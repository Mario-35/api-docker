"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDbExist = void 0;
const db_1 = require("../db");
const utils_1 = require("../utils");
const createDB_1 = require("./createDB");
const isDbExist = async () => {
    return await db_1.db
        .raw("select 1+1 as result")
        .then(() => {
        return true;
    })
        .catch(async (err) => {
        if (err.code == "3D000" && process.env.NODE_ENV) {
            (0, utils_1.message)("ENV", "create DATABASE", process.env.PGDATABASE);
            return (0, createDB_1.createDB)({
                host: process.env.PGHOST,
                user: process.env.PGUSER,
                password: process.env.PGPASSWORD,
                database: process.env.PGDATABASE,
                port: Number(process.env.PGPORT)
            })
                .then(() => {
                (0, utils_1.message)("ENV", "create DATABASE", "OK");
                return true;
            })
                .catch(() => {
                (0, utils_1.message)("ERROR", "create DATABASE", "ERROR");
                return false;
            });
        }
        else {
            return false;
        }
    });
};
exports.isDbExist = isDbExist;
