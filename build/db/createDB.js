"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDB = exports.destroyDB = void 0;
const knex_1 = __importDefault(require("knex"));
const index_1 = require("../utils/index");
const triggers_1 = require("./triggers");
const dataAccess_1 = require("./dataAccess");
const constants_1 = require("../constants");
const admin = () => {
    return (0, knex_1.default)({
        client: "pg",
        connection: {
            host: process.env.PGHOST,
            user: "postgres",
            password: process.env.PGADMIN,
            database: "postgres"
        },
        pool: {
            min: 0,
            max: 1
        },
        debug: false
    });
};
const destroyDB = async (argsParams) => {
    if (!argsParams || !argsParams.database || !argsParams.host || !argsParams.password || !argsParams.user) {
        return;
    }
    const dbAdmin = admin();
    await dbAdmin
        .raw("SELECT pg_terminate_backend(pg_stat_activity.pid) FROM pg_stat_activity  WHERE pg_stat_activity.datname = ? AND pid <> pg_backend_pid()", [
        argsParams.database
    ])
        .then(async () => {
        await dbAdmin.raw(`DROP Database IF EXISTS ${argsParams.database}`).catch((err) => {
            (0, index_1.message)("ERROR", err.message);
        });
    });
};
exports.destroyDB = destroyDB;
const createDB = async (argsParams, ctx) => {
    if (!argsParams || !argsParams.database || !argsParams.host || !argsParams.password || !argsParams.user) {
        return {};
    }
    const results = { "Create Database": argsParams.database };
    const dbAdmin = admin();
    const db = (0, knex_1.default)({
        client: "pg",
        connection: argsParams,
        pool: {
            min: 0,
            max: 1
        },
        debug: false
    });
    if (argsParams.database === "test") {
        await dbAdmin.raw(`DROP Database IF EXISTS ${argsParams.database}`);
    }
    await dbAdmin
        .raw(`CREATE Database ${argsParams.database}`)
        .then(async () => {
        results["Create Database"] = `${argsParams.database} OK`;
        await dbAdmin.raw(`select count(*) FROM pg_user WHERE usename = '${argsParams.user}';`).then(async (res) => {
            if (res.rowCount < 1) {
                await dbAdmin
                    .raw(`CREATE ROLE ${argsParams.user} WITH PASSWORD '${argsParams.password}' SUPERUSER;`)
                    .then(() => {
                    results["Create ROLE"] = `${argsParams.user} Ok`;
                })
                    .catch((e) => e);
            }
            else {
                await dbAdmin
                    .raw(`ALTER ROLE ${argsParams.user} WITH PASSWORD '${argsParams.password}' SUPERUSER;`)
                    .then(() => {
                    results["Create/Alter ROLE"] = `${argsParams.user} Ok`;
                    dbAdmin
                        .destroy()
                        .then(() => {
                        results["Admin connection destroy"] = "Ok";
                    })
                        .catch((err) => {
                        (0, index_1.message)("ERROR", err.message);
                    });
                })
                    .catch((err) => {
                    (0, index_1.message)("ERROR", err.message);
                });
            }
        });
    })
        .catch((err) => {
        (0, index_1.message)("ERROR", err.message);
    });
    await db
        .raw("CREATE EXTENSION IF NOT EXISTS postgis;")
        .then(() => {
        results["Create postgis"] = "Ok";
    })
        .catch((err) => {
        (0, index_1.message)("ERROR", err.message);
    });
    await (0, index_1.asyncForEach)(Object.keys(constants_1._DBDATAS), async (keyName) => {
        const tabInsertion = [];
        const tabComment = [];
        let insertion = "";
        Object.keys(constants_1._DBDATAS[keyName].columns).forEach((column) => {
            tabInsertion.push(`"${column}" ${constants_1._DBDATAS[keyName].columns[column].create}`);
            tabComment.push(`comment on column "${constants_1._DBDATAS[keyName].table}"."${column}" is '${constants_1._DBDATAS[keyName].columns[column].comment}';`);
        });
        const constraints = constants_1._DBDATAS[keyName].constraints;
        if (constraints) {
            const tabTemp = [];
            Object.keys(constraints).forEach((constraint) => {
                tabTemp.push(`CONSTRAINT "${constraint}" ${constraints[constraint]}`);
            });
            insertion = `${tabInsertion.join(", ")}, ${tabTemp.join(", ")}`;
        }
        else {
            insertion = `${tabInsertion.join(", ")}`;
        }
        await db
            .raw(`CREATE TABLE public.${constants_1._DBDATAS[keyName].table} (${insertion});`)
            .then(() => {
            results[`Create table ${constants_1._DBDATAS[keyName].table}`] = "Ok";
        })
            .catch((err) => {
            results[`Create table ${constants_1._DBDATAS[keyName].table}`] = err.message;
            (0, index_1.message)("ERROR", err.message);
        });
        const indexes = constants_1._DBDATAS[keyName].indexes;
        const tabTemp = [];
        if (indexes)
            Object.keys(indexes).forEach((index) => {
                tabTemp.push(`CREATE INDEX "${index}" ${indexes[index]}`);
            });
        await db
            .raw(tabTemp.join(";"))
            .then(() => {
            results[`Create indexes for ${keyName}`] = "Ok";
        })
            .catch((err) => {
            results[`Create indexes for ${keyName}`] = "Error";
            (0, index_1.message)("ERROR", err.message);
        });
        await db
            .raw(tabComment.join(" "))
            .then(() => {
            results[`Create comments for ${constants_1._DBDATAS[keyName].table}`] = "Ok";
        })
            .catch((err) => {
            (0, index_1.message)("ERROR", err.message);
        });
        const after = constants_1._DBDATAS[keyName].after;
        if (after) {
            await db
                .raw(after)
                .then(() => {
                results[`Something to do after for ${constants_1._DBDATAS[keyName].table}`] = "Ok";
            })
                .catch((err) => {
                (0, index_1.message)("ERROR", err.message);
            });
        }
    });
    const user = ctx && ctx.state.user
        ? {
            username: ctx.state.user.username,
            email: ctx.state.user.email,
            password: ctx.state.user.password,
            admin: ctx.state.user.admin
        }
        : {
            username: argsParams.user,
            email: "default@email.com",
            password: argsParams.password,
            admin: false
        };
    await dataAccess_1.userAccess.add(user);
    results["Create functions & trigger"] = await db
        .raw(triggers_1.triggers)
        .then(() => "Ok")
        .catch((e) => e);
    await db.raw(`select count(*) FROM pg_user WHERE usename = '${argsParams.user}';`).then(() => {
        results["Create DB"] = "Ok";
    });
    return results;
};
exports.createDB = createDB;
