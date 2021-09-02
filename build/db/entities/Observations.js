"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Observations = void 0;
const common_1 = require("./common");
const db_1 = require("../../db");
const index_1 = require("../../utils/index");
const constants_1 = require("../../constants");
class Observations extends common_1.Common {
    constructor(ctx, args, level, knexInstance) {
        super(ctx, args, knexInstance);
    }
    async add(dataInput) {
        if (this.args.debug)
            (0, index_1.message)("HEAD", "class Observations add createObservation");
        const results = [];
        let total = 0;
        if (this.args.entities[0].startsWith("CreateObservations")) {
            if (this.args.extras) {
                const extras = this.args.extras;
                if (extras["entity"] == "Datastreams") {
                    if (this.args.debug)
                        (0, index_1.message)("INFO", "addFromCsv");
                    const datasJson = JSON.parse(extras["datas"]);
                    const myColumns = {};
                    Object.keys(datasJson["columns"]).forEach((element) => {
                        myColumns[element] = datasJson["columns"][element];
                    });
                    const paramsFile = {
                        tempTable: `temp${Date.now().toString()}`,
                        filename: extras["file"],
                        columns: myColumns,
                        header: datasJson["header"] && datasJson["header"] == true ? ", HEADER" : "",
                        dataStreamId: BigInt(extras["nb"]),
                        debug: this.args.debug
                    };
                    const testID = paramsFile.dataStreamId > 0 ? paramsFile.dataStreamId : Object.values(paramsFile.columns);
                    await (0, index_1.verifyId)(common_1.Common.dbContext, BigInt("2"), constants_1._DBDATAS.Datastreams.table);
                    const test = await (0, index_1.verifyId)(common_1.Common.dbContext, testID, constants_1._DBDATAS.Datastreams.table);
                    if (!test) {
                        if (this.args.debug)
                            (0, index_1.message)("INFO", "test Datastream ID", testID);
                        this.ctx.throw(404, { detail: paramsFile.dataStreamId > 0 ? `No id found for : ${testID}` : `One of id not found for : ${testID}` });
                    }
                    const importDatas = await (0, index_1.importCsv)(common_1.Common.dbContext, paramsFile);
                    if (this.args.debug)
                        (0, index_1.message)("INFO", "importCsv", "OK");
                    total = importDatas.length;
                    importDatas.forEach((element) => {
                        results.push(this.linkBase + "(" + element + ")");
                    });
                }
            }
            else {
                const dataInsert = [{}];
                const dataStreamId = dataInput["Datastream"]["@iot.id"];
                const DatastreamIdExist = await (0, index_1.verifyId)(common_1.Common.dbContext, BigInt(dataStreamId), constants_1._DBDATAS.Datastreams.table);
                if (!DatastreamIdExist) {
                    this.ctx.throw(404, { detail: `No id found for : ${dataStreamId}` });
                }
                dataInput["dataArray"].forEach((element) => {
                    const temp = {
                        datastream_id: Number(dataStreamId)
                    };
                    dataInput["components"].forEach((title, index) => {
                        temp[title] = element[index];
                    });
                    dataInsert.push((0, index_1.renameProp)("FeatureOfInterest/id", "featureofinterest_id", temp));
                });
                try {
                    const resultQuery = await db_1.db
                        .table("observation")
                        .insert(dataInsert.filter((elem) => Object.keys(elem).length))
                        .returning("*");
                    const resultsId = resultQuery.map((elem) => elem["id"]);
                    resultsId.forEach((element) => {
                        results.push(this.linkBase + "(" + element + ")");
                    });
                }
                catch (e) {
                    if (e instanceof Error)
                        this.ctx.throw(400, { detail: e.message });
                }
            }
            if (results) {
                return this.formatReturnResult({
                    total: total,
                    result: results
                });
            }
        }
        else {
            return await super.add(dataInput);
        }
    }
}
exports.Observations = Observations;
