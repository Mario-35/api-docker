"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAccess = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const db_1 = require("../../db");
exports.userAccess = {
    getAll: async () => {
        return await db_1.db.table("user").select("*");
    },
    getSingle: async (id) => {
        return await (0, db_1.db)("user")
            .select("*")
            .where({ id: parseInt(id) });
    },
    add: async (data) => {
        const salt = bcryptjs_1.default.genSaltSync();
        const hash = bcryptjs_1.default.hashSync(data.password, salt);
        return await (0, db_1.db)("user")
            .insert({
            username: data.username,
            email: data.email,
            password: hash
        })
            .returning("*");
    }
};
