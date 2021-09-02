"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlRequestToArgs = void 0;
const constants_1 = require("../constants");
const odata_1 = require("./odata");
const message_1 = require("./message");
const _1 = require(".");
const excludeColumn = ["id"];
const urlRequestToArgs = async (ctx, extras) => {
    const debug = ctx.request.url.includes("-debug-") || (extras !== undefined && extras.tab.includes("-debug-"));
    if (extras !== undefined && extras.tab) {
        const temp = extras.tab.replace("-debug-", "");
        const tempSplit = temp.trim().split("&");
        tempSplit.forEach((elem) => {
            const elemSplit = elem.split("=");
            extras[elemSplit[0]] = elemSplit[1];
        });
    }
    let cleanStr = unescape(ctx.request.url.replace("-debug-", "")).replace("/Query", "");
    const getArgValue = (input) => {
        if (ctx.request.url.includes(`${input}=`)) {
            const test = cleanStr.split("$");
            const format = test.filter((word) => word.startsWith(input))[0];
            cleanStr = cleanStr.replace(`$${format}`, "");
            return format.replace(`${input}=`, "");
        }
    };
    const testFormat = getArgValue("resultFormat");
    const getFormat = () => {
        if (cleanStr.includes("$value"))
            return constants_1.formatsResult.TXT;
        if (testFormat == "CSV")
            return constants_1.formatsResult.CSV;
        if (testFormat == "TXT")
            return constants_1.formatsResult.TXT;
        return constants_1.formatsResult.JSON;
    };
    let splitStr = cleanStr.split("?");
    const entitiesRequest = [];
    const entities = [];
    let last_index = 0;
    let version_index = 0;
    (0, _1.addToLog)(ctx, "datas", ctx.request.body != {} ? ctx.request.body : extras && extras.datas ? extras.datas : null);
    try {
        const result = {
            LOG: {},
            ENTITY_NAME: "",
            ENTITY_ID: undefined,
            PROPERTY_NAME: undefined,
            RELATION_NAME: undefined,
            value: false,
            baseUrl: "",
            version: "",
            entities: [],
            odada: ctx.request.querystring && splitStr[1]
                ? (0, odata_1.createQuery)(splitStr[1].trim())
                : (0, odata_1.createQuery)(`$top=${process.env.APILIMIT ? Number(process.env.APILIMIT) : 200}`),
            debug: debug,
            formatResult: getFormat(),
            extras: extras
        };
        splitStr = splitStr[0]
            .replace("//", "/")
            .split("/")
            .map((item) => {
            return item.trim();
        });
        splitStr[0] = ctx.request.header.host && splitStr[0] === "" ? ctx.request.header.host : "error";
        splitStr.forEach((value, index) => {
            const input = (0, _1.getEntityNameFromString)(splitStr[index]);
            if (input) {
                entitiesRequest.push(constants_1._DBDATAS[input]);
                last_index = index;
                entities.push(value.trim());
            }
            if (value.match(/v{1}\d\.\d/g)) {
                version_index = index;
            }
        });
        if (last_index > 0) {
            const ENTITY_ID = splitStr[last_index].toUpperCase().match(/[0-9]/g);
            const index = entitiesRequest.length - 1;
            const propertyOrRelation = entities[index] === splitStr.slice(3)[0] ? undefined : splitStr.slice(3).filter((word) => !excludeColumn.includes(word))[0];
            const propertyOrRelationTest = propertyOrRelation
                ? entitiesRequest[0].relations && Object.keys(entitiesRequest[0].relations).includes(propertyOrRelation)
                : false;
            if (entitiesRequest[index] !== undefined) {
                result.ENTITY_NAME = entitiesRequest[index].name;
                result.ENTITY_ID = ENTITY_ID !== null ? BigInt(ENTITY_ID.join("")) : splitStr[splitStr.length - 1].indexOf("(") === -1 ? BigInt(0) : undefined;
                result.PROPERTY_NAME = propertyOrRelationTest ? undefined : propertyOrRelation;
                result.RELATION_NAME = propertyOrRelationTest ? propertyOrRelation : undefined;
                result.baseUrl = (0, _1.getHostName)(ctx);
                result.version = splitStr[version_index];
                result.entities = entities;
                result.value = ctx.request.url.includes("/$value");
            }
            else {
                (0, message_1.message)("ERROR", "Error");
            }
        }
        else {
            if (splitStr[splitStr.length - 1] == "createDB") {
                result.ENTITY_NAME = "createDB";
            }
        }
        if (debug) {
            Object.keys(result).forEach((elem) => (0, message_1.message)("ENV", elem, result[elem]));
        }
        return result;
    }
    catch (e) {
        if (e instanceof Error) {
            (0, message_1.message)("ERROR", e.message);
            return undefined;
        }
    }
};
exports.urlRequestToArgs = urlRequestToArgs;
