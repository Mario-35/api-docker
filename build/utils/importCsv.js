"use strict";
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.importCsv = void 0;
const pg_1 = require("pg");
const fs_1 = __importDefault(require("fs"));
const pg_copy_streams_1 = __importDefault(require("pg-copy-streams"));
const _1 = require(".");
let columns = [];
const readline = require("readline");
async function prepareImportFile(paramsFile) {
    var e_1, _a;
    const fileStream = fs_1.default.createReadStream(paramsFile.filename);
    const regexDate = /^[0-9]{2}[\/][0-9]{2}[\/][0-9]{4}$/g;
    const regexHour = /^[0-9]{2}[:][0-9]{2}[:][0-9]{2}$/g;
    const regexDateHour = /^[0-9]{2}[\/][0-9]{2}[\/][0-9]{4} [0-9]{2}[:][0-9]{2}$/g;
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    try {
        for (var rl_1 = __asyncValues(rl), rl_1_1; rl_1_1 = await rl_1.next(), !rl_1_1.done;) {
            const line = rl_1_1.value;
            const splitColumns = line.split(";");
            if (regexDateHour.test(splitColumns[0]) == true) {
                const nbCol = (line.match(/;/g) || []).length;
                if (paramsFile.debug)
                    (0, _1.message)("INFO", "Date Hour");
                columns = ["datehour"];
                for (let i = 0; i < nbCol; i++) {
                    columns.push(`value${i + 1}`);
                }
                fileStream.destroy();
                return `TO_TIMESTAMP("${paramsFile.tempTable}".datehour, 'DD/MM/YYYY HH24:MI:SS')`;
            }
            else if (regexDate.test(splitColumns[0]) == true && regexHour.test(splitColumns[1]) == true) {
                if (paramsFile.debug)
                    (0, _1.message)("INFO", "date ; hour");
                const nbCol = (line.match(/;/g) || []).length;
                columns = ["date", "hour"];
                for (let i = 0; i < nbCol - 1; i++) {
                    columns.push(`value${i + 1}`);
                }
                fileStream.destroy();
                return `TO_TIMESTAMP(concat("${paramsFile.tempTable}".date, "${paramsFile.tempTable}".hour), 'DD/MM/YYYYHH24:MI:SS:MS')`;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (rl_1_1 && !rl_1_1.done && (_a = rl_1.return)) await _a.call(rl_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return undefined;
}
const importCsv = async (knex, paramsFile) => {
    const results = [];
    const pool = new pg_1.Pool({
        host: process.env.PGHOST,
        user: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE
    });
    const sql = await prepareImportFile(paramsFile);
    if (sql) {
        await knex.schema.createTable(paramsFile.tempTable, (table) => {
            table.increments("id").unsigned().notNullable().primary();
            columns.forEach((value) => {
                table.string(value);
            });
        });
        const copyCommand = `COPY ${paramsFile.tempTable} (${columns.join(",")}) FROM STDIN WITH (FORMAT csv, DELIMITER ';'${paramsFile.header})`;
        const cleanup = () => {
            pool.end();
        };
        await new Promise((resolve, reject) => {
            pool.connect((err, client) => {
                if (err) {
                    if (paramsFile.debug)
                        (0, _1.message)("ERROR", "pool.connect error:", err);
                    return;
                }
                const stream = client.query(pg_copy_streams_1.default.from(copyCommand)).on("error", (err) => {
                    reject(err);
                });
                const fileStream = fs_1.default.createReadStream(paramsFile.filename);
                fileStream.on("error", (err) => {
                    if (paramsFile.debug)
                        (0, _1.message)("ERROR", "fileStream error", err);
                    cleanup();
                    reject(err);
                });
                fileStream.on("error", (err) => {
                    if (paramsFile.debug)
                        (0, _1.message)("ERROR", "streamError", err);
                    cleanup();
                });
                fileStream.on("end", async () => {
                    if (paramsFile.debug)
                        (0, _1.message)("INFO", "COPY TO ", paramsFile.tempTable);
                    const scriptSql = [];
                    const scriptSqlResult = [];
                    Object.keys(paramsFile.columns).forEach(async (myColumn, index) => {
                        scriptSql.push(`${index == 0 ? "WITH " : ","} updated${index + 1} as 
                            (insert into "observation" ("datastream_id", "featureofinterest_id", "phenomenonTime", "result")
                            select ${paramsFile.columns[myColumn]}, 1,  ${sql},
                            CASE "${paramsFile.tempTable}".value${myColumn}
                            WHEN '---' THEN 
                                NULL
                            ELSE
                                cast(REPLACE(value${myColumn},',','.') as float)
                            END
                            from "${paramsFile.tempTable}" returning id)`);
                        scriptSqlResult.push(index == 0 ? " SELECT id FROM updated1" : ` UNION SELECT id FROM updated${index + 1}`);
                    });
                    scriptSql.push(scriptSqlResult.join(""));
                    const res = await client.query(scriptSql.join(""));
                    if (paramsFile.debug)
                        (0, _1.message)("INFO", "SQL Executing", "Ok");
                    res.rows
                        .map((elem) => elem["id"])
                        .forEach((element) => {
                        results.push(element);
                    });
                    cleanup();
                    resolve(results);
                });
                fileStream.pipe(stream);
            });
        });
    }
    return results;
};
exports.importCsv = importCsv;
