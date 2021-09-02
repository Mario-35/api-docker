"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiAccess = void 0;
const entities = __importStar(require("../entities/index"));
const utils_1 = require("../../utils/");
const db_1 = require("../../db");
class apiAccess {
    constructor(ctx, args) {
        this.ctx = ctx;
        this.args = args;
        if (this.args.debug)
            (0, utils_1.message)("HEAD", `class ${this.constructor.name}`);
        if (args.ENTITY_NAME in entities) {
            this.myEntity = new entities[(this.ctx, args.ENTITY_NAME)](ctx, args, 0, db_1.db);
            if (this.myEntity === undefined) {
                if (this.args.debug)
                    (0, utils_1.message)("ERROR", `Entity Error : ${args.ENTITY_NAME}`);
            }
            else {
                if (this.args.debug)
                    (0, utils_1.message)("HEAD", `class ${this.myEntity.constructor.name}`);
            }
        }
        else {
            if (this.args.debug)
                (0, utils_1.message)("ERROR", `Entity Error : ${args.ENTITY_NAME}`);
        }
    }
    async getAll() {
        if (this.args.debug)
            (0, utils_1.message)("HEAD", "class DataAccessClass getAll");
        if (this.myEntity) {
            return this.args.RELATION_NAME ? await this.myEntity.getRelation(this.args.ENTITY_ID) : await this.myEntity.getAll();
        }
    }
    async getSingle(id, propertyName, relationName, onlyValue) {
        if (this.args.debug)
            (0, utils_1.message)("HEAD", "class DataAccessClass getSingle");
        if (this.myEntity) {
            return relationName ? await this.myEntity.getRelation(id, relationName) : await this.myEntity.getSingle(id, propertyName, onlyValue);
        }
    }
    async add() {
        if (this.args.debug)
            (0, utils_1.message)("HEAD", "class DataAccessClass add");
        if (this.myEntity) {
            return await this.myEntity.add((0, utils_1.recordToKeyValue)(this.ctx.request.body));
        }
    }
    async update(id) {
        if (this.args.debug)
            (0, utils_1.message)("HEAD", "class DataAccessClass update");
        if (this.myEntity) {
            return await this.myEntity.update(id, (0, utils_1.recordToKeyValue)(this.ctx.request.body));
        }
    }
    async delete(id) {
        if (this.args.debug)
            (0, utils_1.message)("HEAD", "class DataAccessClass delete");
        if (this.myEntity) {
            return await this.myEntity.delete(id);
        }
    }
}
exports.apiAccess = apiAccess;
apiAccess.trxProvider = db_1.db.transactionProvider();
