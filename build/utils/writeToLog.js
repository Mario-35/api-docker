"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeToLog = void 0;
const _1 = require(".");
const index_1 = require("../constants/index");
const db_1 = require("../db");
const writeToLog = async (ctx) => {
    if (ctx["LOG"]) {
        ctx["LOG"].result = ctx["LOG"].result || ctx.body;
        ctx["LOG"].code = ctx["LOG"].code || ctx.status;
        ctx["LOG"].url = ctx["LOG"].url || ctx.url;
        ctx["LOG"].method = ctx["LOG"].method || ctx.method;
        ctx["LOG"].user_id = ctx["LOG"].user_id || (0, _1.getUserId)(ctx).toString();
        try {
            await db_1.db.table(index_1._DBDATAS.Logs_request.table).insert(ctx.LOG);
        }
        catch (error) {
            console.log(ctx.LOG);
            console.log(error);
        }
    }
};
exports.writeToLog = writeToLog;
