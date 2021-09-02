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
exports.Common = void 0;
const constants_1 = require("../../constants");
const entities = __importStar(require("./index"));
const index_1 = require("../../utils/index");
class Common {
    constructor(ctx, args, knexInstance) {
        this.ctx = ctx;
        this.args = args;
        if (this.args.debug)
            (0, index_1.message)("HEAD", `class common [${this.constructor.name}]`);
        if (knexInstance)
            Common.dbContext = knexInstance;
        this.entityProperty = constants_1._DBDATAS[this.constructor.name];
        this.nextLinkBase = `http://${this.args.baseUrl}/${this.args.version}/${this.args.entities.join("/")}`;
        this.linkBase = constants_1.isTest
            ? `proxy/${this.args.version}/${this.constructor.name}`
            : `http://${this.args.baseUrl}/${this.args.version}/${this.constructor.name}`;
    }
    toJson(data) {
        return JSON.stringify(data, (_, v) => (typeof v === "bigint" ? `${v}#bigint` : v)).replace(/"(-?\d+)#bigint"/g, (_, a) => a);
    }
    async executeQuery(query) {
        if (this.args.debug)
            (0, index_1.message)("HEAD", "executeQuery");
        const isQueryIsString = typeof query == "string";
        (0, index_1.addToLog)(this.ctx, "query", isQueryIsString ? query : query.toQuery());
        return isQueryIsString ? await Common.dbContext.raw(query) : await query;
    }
    formatReturnResult(args) {
        if (this.args.debug)
            (0, index_1.message)("HEAD", "formatReturnResult");
        const result = {
            id: undefined,
            entity: this.entityProperty,
            nextLink: args.nextLink ? args.nextLink : undefined,
            prevLink: args.prevLink ? args.prevLink : undefined,
            result: undefined,
            value: undefined,
            body: undefined,
            total: undefined
        };
        Object.keys(args).forEach((element) => {
            result[element] = args[element];
        });
        return result;
    }
    isKeyValueObject(test) {
        return test && typeof test === "object" && test.length > 0;
    }
    async formatLineResult(input) {
        if (this.args.debug)
            (0, index_1.message)("HEAD", `class common formatLineResult [${this.constructor.name}]`);
        const linkBaseId = input["id"] ? `${this.linkBase}(${input["id"].toString()})` : undefined;
        input = Object.assign({}, (0, index_1.renameProp)("id", "@iot.id", input));
        const request = async () => {
            const relationsKeys = this.entityProperty.relations
                ? Object.keys(this.entityProperty.relations).filter((word) => !this.entityProperty.relations[word].columnRelation.startsWith("_"))
                : [];
            const result = {};
            if (linkBaseId) {
                input["@iot.selfLink"] = `${linkBaseId}`;
            }
            Object.keys(input)
                .filter((word) => !word.trim().endsWith("_id"))
                .sort((a, b) => (a > b ? 1 : -1))
                .forEach((element) => {
                if (this.isKeyValueObject(input[element])) {
                    const subResult = {};
                    Object.keys(input[element])
                        .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))
                        .forEach((subElement) => {
                        subResult[subElement] = input[element][subElement];
                    });
                    input[element] = subResult;
                }
                result[element] = input[element];
            });
            await (0, index_1.asyncForEach)(relationsKeys.sort((a, b) => (a > b ? 1 : -1)), async (element) => {
                if (this.args.odada.includes.length > 0) {
                    await (0, index_1.asyncForEach)(this.args.odada.includes, async (expand, index) => {
                        const tempTab = expand.navigationProperty.split("/");
                        const expandName = tempTab ? tempTab[0] : undefined;
                        if (expandName && expandName.includes(element)) {
                            if (this.args.debug)
                                (0, index_1.message)("DEBUG", `Expand for ${expandName}`, element);
                            const subEntityName = (0, index_1.getEntityName)(element);
                            if (subEntityName) {
                                const newArgs = JSON.parse(this.toJson(this.args));
                                if (newArgs && newArgs.odada) {
                                    newArgs.odada.includes[index].navigationProperty =
                                        this.args.odada && this.args.odada && tempTab ? tempTab.slice(1).join("/") : "";
                                }
                                const subEntity = new entities[subEntityName](this.ctx, newArgs);
                                const singular = element == constants_1._DBDATAS[subEntityName].singular;
                                const relation = this.entityProperty.relations[element];
                                let myId = [];
                                let whereRaw = `${relation.columnRelation} = ${BigInt(input["@iot.id"])}`;
                                if (relation.tableName == this.entityProperty.table) {
                                    myId = [BigInt(input[relation.entityColumn])];
                                    whereRaw = `${relation.columnRelation} = ${myId}`;
                                }
                                else if (subEntity.entityProperty.relations &&
                                    subEntity.entityProperty.relations[this.entityProperty.name] &&
                                    relation.tableName == subEntity.entityProperty.relations[this.entityProperty.name].tableName) {
                                    try {
                                        const allIds = await Common.dbContext(relation.tableName)
                                            .select(relation.columnRelation)
                                            .whereRaw(`${relation.entityColumn} = ${input["@iot.id"]}`);
                                        allIds.forEach((id) => myId.push(BigInt(id[relation.columnRelation])));
                                        whereRaw = `id IN (${myId})`;
                                    }
                                    catch (e) {
                                        whereRaw = "";
                                        if (e instanceof Error)
                                            this.ctx.throw(400, { detail: e.message });
                                    }
                                }
                                else if (relation.tableName != this.entityProperty.table && !(0, index_1.getEntityName)(relation.tableName)) {
                                    if (this.args.debug)
                                        (0, index_1.message)("DEBUG", `Table Association for ${expandName} : `, element);
                                    try {
                                        const allIds = await Common.dbContext(relation.tableName)
                                            .select({ id: relation.columnRelation })
                                            .where({ [relation.entityColumn]: input["@iot.id"] });
                                        allIds.forEach((ids) => myId.push(BigInt(ids.id)));
                                        whereRaw = `id IN (${myId})`;
                                    }
                                    catch (e) {
                                        whereRaw = "";
                                        if (e instanceof Error)
                                            this.ctx.throw(400, { detail: e.message });
                                    }
                                }
                                const results = await subEntity.getWhereFormat(whereRaw);
                                result[element] = singular ? results[0] : results;
                            }
                            else {
                                if (this.args.debug)
                                    (0, index_1.message)("ERROR", "No entity for", element);
                            }
                        }
                        else {
                            result[`${element}@iot.navigationLink`] = `${linkBaseId}/${element}`;
                        }
                    });
                }
                else {
                    result[`${element}@iot.navigationLink`] = `${linkBaseId}/${element}`;
                }
            });
            return result;
        };
        return await request();
    }
    async formatResult(input) {
        if (this.args.debug)
            (0, index_1.message)("HEAD", `class common formatResult [${this.constructor.name}]`);
        if (this.isKeyValueObject(input)) {
            const values = [];
            const request = async () => {
                await (0, index_1.asyncForEach)(input, async (item) => {
                    const temp = await this.formatLineResult(item);
                    if (temp) {
                        values.push(temp);
                    }
                });
                return values;
            };
            return await request();
        }
        return undefined;
    }
    convertOdataToKnex(input) {
        var _a;
        const result = (_a = input
            .match(/[a-z,A-Z]/g)) === null || _a === void 0 ? void 0 : _a.join("").trim().split(",");
        return result ? result : ["*"];
    }
    makeOdataQuery(query, propertyName) {
        const oDatas = this.args.odada;
        if (oDatas) {
            query.limit(oDatas.limit && oDatas.limit > 0 ? oDatas.limit : Number(process.env.APILIMIT));
            query.offset(oDatas.skip && oDatas.skip > 0 ? oDatas.skip : 0);
        }
        query.select(oDatas && oDatas.select ? this.convertOdataToKnex(oDatas.select) : propertyName ? [propertyName] : ["*"]);
        query.orderByRaw(oDatas && oDatas.orderby ? oDatas.orderby.replace(/"/g, "") : "id");
        if (oDatas && oDatas.where) {
            const tempTab = oDatas.where.split(":");
            for (let i = 1; i < tempTab.length; i += 2) {
                tempTab[i] = oDatas.parameters[tempTab[i]];
            }
            query.whereRaw(tempTab.join(" "));
        }
        return query;
    }
    async getAll(propertyName) {
        if (this.args.debug)
            (0, index_1.message)("HEAD", `class common getAll [${this.constructor.name}]`);
        const query = Common.dbContext(this.entityProperty.table);
        if (this.args.entities.length > 1) {
            const entityName = (0, index_1.getEntityName)(this.args.entities[0]);
            if (this.args.debug)
                (0, index_1.message)("DEBUG", "Found entity : ", entityName);
            const entity = entityName ? constants_1._DBDATAS[entityName] : undefined;
            const id = (0, index_1.getBigIntFromString)(this.args.entities[0]);
            if (entity && id) {
                const subEntity = new entities[entity.name](this.ctx, Object.assign({}, this.args));
                const result = await subEntity.getSingle(id, "id", true);
                if (result && result.body && result.id && result.id > 0) {
                    if (this.args.debug)
                        (0, index_1.message)("DEBUG", "Found Id : ", result.id.toString());
                    if (Object.keys(this.entityProperty.columns).includes(`${entity.table.toLowerCase()}_id`)) {
                        query.where({
                            [`${entity.table.toLowerCase()}_id`]: result.body
                        });
                    }
                    else if (Object.keys(this.entityProperty.relations).includes(entity.name)) {
                        const relation = this.entityProperty.relations[entity.name];
                        query.whereRaw(`id in (select ${relation.columnRelation} from ${relation.tableName} where ${relation.entityColumn} = ${result.id})`);
                    }
                    else {
                        if (this.args.debug)
                            (0, index_1.message)("ERROR", "No relation resolving");
                    }
                }
                else {
                    this.ctx.throw(404, { detail: `No id for : ${this.args.entities[0]}` });
                }
            }
            else {
                if (this.args.debug)
                    (0, index_1.message)("DEBUG", "No entity or id for", entityName);
                return undefined;
            }
        }
        const results = await this.executeQuery(this.makeOdataQuery(query, propertyName));
        const limit = this.args.odada.limit ? this.args.odada.limit : Number(process.env.APILIMIT);
        const skip = this.args.odada.skip ? this.args.odada.skip : 0;
        const next = skip + limit;
        const prev = skip - limit;
        return results && results.length > 0
            ? this.formatReturnResult({
                id: BigInt(results.length),
                result: results,
                nextLink: process.env.APILIMIT && results.length >= Number(process.env.APILIMIT) ? `${this.nextLinkBase}?$top=${limit}&$skip=${next}` : undefined,
                prevLink: process.env.APILIMIT && results.length >= Number(process.env.APILIMIT) && prev >= 0
                    ? `${this.nextLinkBase}?$top=${limit}&$skip=${prev}`
                    : undefined,
                value: await this.formatResult(results)
            })
            : undefined;
    }
    async getWhere(condition) {
        if (this.args.debug)
            (0, index_1.message)("HEAD", `class common getWhere [${this.constructor.name}]`);
        try {
            return await Common.dbContext(this.entityProperty.table).whereRaw(condition);
        }
        catch (e) {
            if (e instanceof Error) {
                if (this.args.debug)
                    (0, index_1.message)("ERROR", e.message);
                this.ctx.throw(400, { detail: (0, index_1.extractMessageError)(e.message) });
            }
        }
    }
    async getWhereFormat(condition) {
        if (this.args.debug)
            (0, index_1.message)("HEAD", `class common getWhereFormat [${this.constructor.name}]`);
        try {
            const query = Common.dbContext(this.entityProperty.table).whereRaw(condition);
            (0, index_1.addToLog)(this.ctx, "query", query.toQuery());
            const results = await query;
            return results ? await this.formatResult(results) : undefined;
        }
        catch (e) {
            if (e instanceof Error) {
                if (this.args.debug)
                    (0, index_1.message)("ERROR", e.message);
                this.ctx.throw(400, { detail: (0, index_1.extractMessageError)(e.message) });
            }
        }
    }
    async getSingle(idInput, propertyName, onlyValue) {
        if (this.args.debug)
            (0, index_1.message)("HEAD", `class common getSingle [${this.constructor.name}]`);
        const selectColumns = propertyName ? [propertyName] : this.args.odada.select ? this.convertOdataToKnex(this.args.odada.select) : ["*"];
        const query = Common.dbContext(this.entityProperty.table).select(selectColumns).where({ id: idInput }).first();
        const results = await this.executeQuery(query);
        if (results) {
            return this.formatReturnResult({
                id: results.id ? BigInt(results.id) : undefined,
                body: selectColumns[0] != "*"
                    ? onlyValue && onlyValue === true
                        ? results[selectColumns[0]].replace(/['"]+/g, "")
                        : results
                    : await this.formatLineResult(results)
            });
        }
    }
    async getRelation(idInput, relationName) {
        if (this.args.debug)
            (0, index_1.message)("HEAD", `class common getRelation [${this.constructor.name}]`);
        if (this.args.debug)
            (0, index_1.message)("DEBUG", "RelationName ", relationName);
        const resultId = await Common.dbContext(this.entityProperty.table)
            .select("id")
            .where(idInput && idInput !== undefined ? { id: idInput } : {})
            .first();
        if (resultId)
            if (relationName && this.entityProperty.relations) {
                const relations = constants_1._DBDATAS[relationName];
                if (relations) {
                    const column = relationName;
                    if (column && relationName) {
                        const mySubEntity = new entities[relationName](this.ctx, Object.assign({}, this.args));
                        const column = relationName;
                        const results = await mySubEntity.getWhereFormat(`"${column}"=${resultId.id}`);
                        if (results) {
                            return this.formatReturnResult({
                                body: results
                            });
                        }
                    }
                }
            }
    }
    async add(dataInput) {
        if (this.args.debug)
            (0, index_1.message)("HEAD", `class Common add [${this.constructor.name}]`);
        if (dataInput) {
            const sql = this.creatAddUpdateQuery(dataInput);
            try {
                (0, index_1.addToLog)(this.ctx, "query", sql);
                const results = await Common.dbContext.raw(sql);
                if (results.rows) {
                    const result = await this.formatLineResult(results.rows[0]);
                    if (result) {
                        return this.formatReturnResult({
                            id: result.id ? BigInt(results.id) : undefined,
                            result: result,
                            value: result,
                            body: result,
                            query: sql
                        });
                    }
                }
            }
            catch (e) {
                if (e instanceof Error) {
                    if (this.args.debug)
                        (0, index_1.message)("ERROR", e.message);
                    this.ctx.throw(400, { detail: (0, index_1.extractMessageError)(e.message) });
                }
            }
        }
    }
    async update(idInput, dataInput) {
        if (this.args.debug)
            (0, index_1.message)("HEAD", `class Observations update [${this.constructor.name}]`);
        const testIfId = await (0, index_1.verifyId)(Common.dbContext, idInput, this.entityProperty.table);
        if (testIfId === false) {
            this.ctx.throw(404, { detail: `No id found for : ${idInput}` });
        }
        if (dataInput) {
            const sql = this.creatAddUpdateQuery(dataInput, idInput);
            (0, index_1.addToLog)(this.ctx, "query", sql);
            try {
                const results = await Common.dbContext.raw(sql);
                if (results.rows) {
                    const result = await this.formatLineResult(results.rows[0]);
                    if (result) {
                        return this.formatReturnResult({
                            id: result.id ? BigInt(results.id) : undefined,
                            result: result,
                            value: result,
                            body: result
                        });
                    }
                }
            }
            catch (e) {
                if (e instanceof Error) {
                    if (this.args.debug)
                        (0, index_1.message)("ERROR", e.message);
                    this.ctx.throw(400, { detail: (0, index_1.extractMessageError)(e.message) });
                }
            }
        }
    }
    async delete(idInput) {
        if (this.args.debug)
            (0, index_1.message)("HEAD", `class common delete [${this.constructor.name}]`);
        try {
            const query = Common.dbContext(this.entityProperty.table).del().where({ id: idInput });
            (0, index_1.addToLog)(this.ctx, "query", query.toQuery());
            const results = await query;
            return this.formatReturnResult({
                id: BigInt(results)
            });
        }
        catch (e) {
            if (e instanceof Error) {
                if (this.args.debug)
                    (0, index_1.message)("ERROR", e.message);
                this.ctx.throw(400, { detail: (0, index_1.extractMessageError)(e.message) });
            }
        }
    }
    creatAddUpdateQuery(datas, idInput) {
        let OperationType;
        (function (OperationType) {
            OperationType[OperationType["Table"] = 0] = "Table";
            OperationType[OperationType["Relation"] = 1] = "Relation";
            OperationType[OperationType["Association"] = 2] = "Association";
        })(OperationType || (OperationType = {}));
        const queryMaker = {};
        const names = { [this.entityProperty.table]: this.entityProperty.table };
        let level = 0;
        const getRelationNameFromEntity = (source, from) => {
            return Object.keys(source.relations).includes(from.name)
                ? from.name
                : Object.keys(source.relations).includes(from.singular)
                    ? from.singular
                    : undefined;
        };
        const queryMakerToString = (query) => {
            const result = [query];
            const links = {};
            const sorting = [];
            Object.keys(queryMaker).forEach((element) => {
                Object.keys(queryMaker).forEach((elem) => {
                    if (JSON.stringify(queryMaker[elem].datas).includes(`select ${element}`)) {
                        if (links[elem]) {
                            links[elem].push(element);
                        }
                        else {
                            links[elem] = [element];
                        }
                    }
                });
            });
            Object.keys(queryMaker).forEach((elem) => {
                if (Object.keys(links).includes(elem)) {
                    sorting.push(elem);
                }
                else {
                    sorting.unshift(elem);
                }
            });
            sorting.forEach((element) => {
                if (queryMaker[element].datas.hasOwnProperty("@iot.id")) {
                    const searchId = queryMaker[element].datas["@iot.id"];
                    result.push(`, ${element} AS (select coalesce((select "id" from "${queryMaker[element].table}" where "id" = ${searchId}), ${searchId}) AS id)`);
                }
                else {
                    const query = Common.dbContext(queryMaker[element].table);
                    result.push(`, ${element} AS (`);
                    if (idInput) {
                        if (queryMaker[element].type == OperationType.Association) {
                            result.push(query
                                .insert(queryMaker[element].datas)
                                .onConflict(Object.keys(queryMaker[element].datas))
                                .merge(queryMaker[element].datas)
                                .whereRaw(`${queryMaker[element].table}.${queryMaker[element].keyId} = ${BigInt(idInput).toString()}`)
                                .toString());
                        }
                        else {
                            result.push(query
                                .update(queryMaker[element].datas)
                                .whereRaw(`${queryMaker[element].table}.${queryMaker[element].keyId} = ${BigInt(idInput).toString()}`)
                                .toString());
                        }
                    }
                    else {
                        result.push(query.insert(queryMaker[element].datas).toString());
                    }
                    result.push(`RETURNING ${this.entityProperty.table == queryMaker[element].table ? "*" : queryMaker[element].keyId})`);
                }
            });
            result.push(`SELECT * FROM ${this.entityProperty.table};`);
            return result.join("\n").replace(/\'@/g, "").replace(/\@'/g, "");
        };
        const start = (datas, entity, parentEntity) => {
            if (this.args.debug)
                (0, index_1.message)("HEAD", `start level ${level++}`);
            const result = {};
            entity = entity ? entity : this.entityProperty;
            parentEntity = parentEntity ? parentEntity : this.entityProperty;
            for (const key in datas) {
                if (entity && !Object.keys(entity.relations).includes(key)) {
                    result[key] = typeof datas[key] === "object" ? JSON.stringify(datas[key]) : datas[key];
                    delete datas[key];
                }
            }
            const createName = (inputNameEntity) => {
                const test = names[inputNameEntity];
                let number = 0;
                if (test) {
                    const numbers = test.match(/[0-9]/g);
                    number = numbers !== null ? Number(numbers.join("")) : 0;
                }
                return `${inputNameEntity}${(number + 1).toString()}`;
            };
            const addToQueryMaker = (type, name, tableName, datas, keyId, key) => {
                const isTypeString = typeof datas === "string";
                if (queryMaker.hasOwnProperty(name)) {
                    if (key && isTypeString) {
                        queryMaker[name].datas[key] = datas;
                        queryMaker[name].keyId = keyId;
                    }
                    else if (!isTypeString) {
                        queryMaker[name].datas = Object.assign(queryMaker[name].datas, datas);
                        queryMaker[name].keyId = keyId;
                    }
                }
                else {
                    if (key && isTypeString) {
                        queryMaker[name] = {
                            type: type,
                            table: tableName,
                            datas: { [key]: datas },
                            keyId: keyId
                        };
                    }
                    else if (!isTypeString) {
                        queryMaker[name] = {
                            type: type,
                            table: tableName,
                            datas: datas,
                            keyId: keyId
                        };
                    }
                }
            };
            const addAssociation = (subEntity, subParentEntity) => {
                if (this.args.debug)
                    (0, index_1.message)("DEBUG", `addAssociation in ${subEntity.name} for parent`, subParentEntity.name);
                const relationName = getRelationNameFromEntity(subEntity, subParentEntity);
                const parentRelationName = getRelationNameFromEntity(subParentEntity, subEntity);
                if (parentRelationName && relationName) {
                    const relation = subEntity.relations[relationName];
                    const parentRelation = subParentEntity.relations[parentRelationName];
                    if (this.args.debug)
                        (0, index_1.message)("DEBUG", `Found a parent relation in ${subEntity.name}`, subParentEntity.name);
                    if (relation.tableName == parentRelation.tableName && relation.tableName == subEntity.table) {
                        if (this.args.debug)
                            (0, index_1.message)("INFO", "Found a relation to do in sub query", subParentEntity.name);
                        const tableName = names[subEntity.table];
                        const parentTableName = names[subParentEntity.table];
                        addToQueryMaker(OperationType.Relation, tableName, subEntity.table, `@(select ${parentTableName}.id from ${parentTableName})@`, parentRelation.tableKey, parentRelation.columnRelation);
                    }
                    else if (relation.tableName == parentRelation.tableName) {
                        if (relation.tableName == subParentEntity.table) {
                            const tableName = names[subEntity.table];
                            const parentTableName = names[subParentEntity.table];
                            if (this.args.debug)
                                (0, index_1.message)("INFO", `Add parent relation ${tableName} in`, parentTableName);
                            addToQueryMaker(OperationType.Relation, parentTableName, subParentEntity.table, `@(select ${tableName}.id from ${tableName})@`, parentRelation.tableKey, relation.columnRelation);
                        }
                        else if (relation.tableName != subParentEntity.table && relation.tableName != subEntity.table) {
                            const tableName = names[subEntity.table];
                            const parentTableName = names[subParentEntity.table];
                            if (this.args.debug)
                                (0, index_1.message)("INFO", `Add Table association ${tableName} in`, parentTableName);
                            addToQueryMaker(OperationType.Association, relation.tableName, relation.tableName, {
                                [`${subEntity.table}_id`]: `@(select ${tableName}.id from ${tableName})@`,
                                [`${subParentEntity.table}_id`]: `@(select ${parentTableName}.id from ${parentTableName})@`
                            }, relation.tableKey, undefined);
                        }
                    }
                    else {
                        const tableName = names[subEntity.table];
                        const parentTableName = names[subParentEntity.table];
                        if (this.args.debug)
                            (0, index_1.message)("INFO", `Add Relation ${tableName} in`, parentTableName);
                        addToQueryMaker(OperationType.Table, parentTableName, subParentEntity.table, {
                            [relation.columnRelation]: `@(select ${tableName}.id from ${tableName})@`
                        }, relation.tableKey, undefined);
                    }
                }
            };
            const subBlock = (key, value) => {
                const entityNameSearch = (0, index_1.getEntityName)(key);
                if (entityNameSearch) {
                    const newEntity = constants_1._DBDATAS[entityNameSearch];
                    const name = createName(newEntity.table);
                    names[newEntity.table] = name;
                    const test = start(value, newEntity, entity);
                    if (test) {
                        addToQueryMaker(OperationType.Table, name, newEntity.table, test, "id", undefined);
                        level--;
                    }
                    if (entity)
                        addAssociation(newEntity, entity);
                }
            };
            if (entity && parentEntity) {
                for (const key in datas) {
                    if (Array.isArray(datas[key])) {
                        Object.entries(datas[key]).forEach(([_key, value]) => {
                            if (entity && parentEntity && Object.keys(entity.relations).includes(key)) {
                                if (this.args.debug)
                                    (0, index_1.message)("INFO", `Found a relation for ${entity.name}`, key);
                                subBlock(key, value);
                            }
                            else {
                                if (this.args.debug)
                                    (0, index_1.message)("INFO", `data ${key}`, datas[key]);
                                result[key] = datas[key];
                            }
                        });
                    }
                    else if (typeof datas[key] === "object") {
                        if (Object.keys(entity.relations).includes(key)) {
                            if (this.args.debug)
                                (0, index_1.message)("DEBUG", `Found a object relation for ${entity.name}`, key);
                            subBlock(key, datas[key]);
                        }
                    }
                    else {
                        result[key] = datas[key];
                    }
                }
            }
            return result;
        };
        if (this.args.entities.length > 1) {
            const entityName = (0, index_1.getEntityName)(this.args.entities[0]);
            if (this.args.debug)
                (0, index_1.message)("DEBUG", "Found entity : ", entityName);
            const callEntity = entityName ? constants_1._DBDATAS[entityName] : undefined;
            const id = (0, index_1.getBigIntFromString)(this.args.entities[0]);
            if (entityName && callEntity && id) {
                const relationName = getRelationNameFromEntity(this.entityProperty, callEntity);
                if (relationName)
                    datas[relationName] = { "@iot.id": id.toString() };
            }
        }
        const root = start(datas);
        if (names[this.entityProperty.table] && queryMaker[this.entityProperty.table] && queryMaker[this.entityProperty.table].datas) {
            queryMaker[this.entityProperty.table].datas = Object.assign(root, queryMaker[this.entityProperty.table].datas);
            queryMaker[this.entityProperty.table].keyId = idInput ? "id" : "*";
            return queryMakerToString(`WITH "log_request" as (select id FROM "${constants_1._DBDATAS.Logs_request.table}" LIMIT 1)`);
        }
        else {
            return queryMakerToString(idInput
                ? `WITH ${this.entityProperty.table} as (${Common.dbContext(this.entityProperty.table)
                    .update(root)
                    .where({ id: idInput.toString() })
                    .toString()} RETURNING *)`
                : `WITH ${this.entityProperty.table} as (${Common.dbContext(this.entityProperty.table).insert(root).toString()} RETURNING *)`);
        }
    }
}
exports.Common = Common;
