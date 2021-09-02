"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const dataAccess_1 = require("../db/dataAccess");
const constants_1 = require("../constants");
const utils_1 = require("../utils/");
const query_1 = require("../query/");
const _helpers_1 = require("./_helpers");
const fs_1 = __importDefault(require("fs"));
const createDB_1 = require("../db/createDB");
const router = new koa_router_1.default();
router.get("/(.*)", async (ctx) => {
    var _a;
    if (ctx.request.url.endsWith(`/${process.env.APIVERSION}/`)) {
        const expectedResponse = [{}];
        const entities = Object.keys(constants_1._DBDATAS)
            .filter((elem) => constants_1._DBDATAS[elem].order > 0)
            .sort((a, b) => (constants_1._DBDATAS[a].order > constants_1._DBDATAS[b].order ? 1 : -1));
        entities.forEach((value) => {
            expectedResponse.push({
                name: constants_1._DBDATAS[value].name,
                url: `http://${(0, utils_1.getHostName)(ctx)}/${process.env.APIVERSION}/${value}`
            });
        });
        ctx.type = constants_1.returnFormat[constants_1.formatsResult.JSON];
        ctx.body = {
            value: expectedResponse.filter((elem) => Object.keys(elem).length)
        };
    }
    else if (ctx.request.url.toLowerCase().includes("/query")) {
        ctx.type = constants_1.returnFormat[constants_1.formatsResult.HTML];
        ctx.body = (0, query_1.queryHtml)((0, query_1.minimalForHtmlQuery)(ctx));
    }
    else if (ctx.request.url.toLowerCase().endsWith("favicon.ico")) {
        try {
            const icon = fs_1.default.readFileSync(__dirname + "/favicon.ico");
            const cacheControl = `public, max-age=${8640}`;
            ctx.set("Cache-Control", cacheControl);
            ctx.type = constants_1.returnFormat[constants_1.formatsResult.ICON];
            ctx.body = icon;
        }
        catch (e) {
            if (e instanceof Error)
                (0, utils_1.message)("ERROR", e.message);
        }
    }
    else if (ctx.request.url.includes(`/${process.env.APIVERSION}/`)) {
        const args = await (0, utils_1.urlRequestToArgs)(ctx);
        if (args && args.ENTITY_NAME != "") {
            if (args.debug)
                (0, utils_1.message)("HEAD", `GET ${process.env.APIVERSION}`);
            const objectAccess = new dataAccess_1.apiAccess(ctx, args);
            if (objectAccess) {
                if (Number(args.ENTITY_ID) === 0) {
                    const results = await objectAccess.getAll();
                    if (results) {
                        const tempResult = args.formatResult == constants_1.formatsResult.JSON
                            ? {
                                "@iot.count": (_a = results.id) === null || _a === void 0 ? void 0 : _a.toString(),
                                "@iot.nextLink": results.nextLink,
                                "@iot.prevLink": results.prevLink,
                                value: results["value"]
                            }
                            : (ctx.body = results["value"]);
                        ctx.type = constants_1.returnFormat[args.formatResult];
                        ctx.body = (0, utils_1.resultBody)(args, tempResult);
                    }
                    else {
                        ctx.throw(404);
                    }
                }
                else if (args.ENTITY_ID && args.ENTITY_ID > 0) {
                    const results = await objectAccess.getSingle(BigInt(args.ENTITY_ID), args.PROPERTY_NAME, args.RELATION_NAME, args.value);
                    if (results && results.body) {
                        ctx.type = constants_1.returnFormat[args.formatResult];
                        ctx.body = (0, utils_1.resultBody)(args, results.body);
                    }
                    else {
                        ctx.throw(404, { detail: `id : ${args.ENTITY_ID} not found` });
                    }
                }
                else {
                    ctx.throw(400);
                }
            }
        }
        else {
            ctx.throw(400, { detail: "No entity found" });
        }
    }
    else {
        ctx.throw(501);
    }
});
router.post("/(.*)", async (ctx) => {
    if (!_helpers_1.helperUsers.ensureAuthenticated(ctx)) {
        ctx.throw(401);
    }
    else if (ctx.request.type.startsWith("application/json") && Object.keys(ctx.request.body).length > 0) {
        const args = await (0, utils_1.urlRequestToArgs)(ctx);
        if (args) {
            if (args.ENTITY_NAME == "createDB" && ctx) {
                if (args.debug)
                    (0, utils_1.message)("HEAD", "POST createDB");
                const conParams = {
                    host: ctx.request.body["host"],
                    user: ctx.request.body["user"],
                    password: ctx.request.body["password"],
                    database: ctx.request.body["database"],
                    port: Number(process.env.PGPORT)
                };
                const results = await (0, createDB_1.createDB)(conParams, ctx);
                constants_1.returnFormat[constants_1.formatsResult.JSON];
                ctx.body = results;
            }
            else {
                if (args.debug)
                    (0, utils_1.message)("HEAD", "POST JSON");
                const objectAccess = new dataAccess_1.apiAccess(ctx, args);
                const result = await objectAccess.add();
                if (result) {
                    constants_1.returnFormat[constants_1.formatsResult.JSON];
                    ctx.status = 201;
                    ctx.body = result.result ? result.result : result.value;
                }
            }
        }
        else {
            ctx.throw(400);
        }
    }
    else if (ctx.request.type.startsWith("multipart/form-data")) {
        const getDatas = async () => {
            return new Promise(async (resolve, reject) => {
                await (0, utils_1.upload)(ctx)
                    .then((data) => {
                    resolve(data);
                })
                    .catch((data) => {
                    reject(data);
                });
            });
        };
        const data = await getDatas();
        const args = await (0, utils_1.urlRequestToArgs)(ctx, data);
        if (args) {
            if (args.debug)
                (0, utils_1.message)("HEAD", "POST FORM");
            const objectAccess = new dataAccess_1.apiAccess(ctx, args);
            const result = await objectAccess.add();
            if (args.extras)
                fs_1.default.unlinkSync(args.extras.file);
            if (result) {
                if (data["source"] == "query") {
                    ctx.type = "html";
                    ctx.body = (0, query_1.queryHtml)(Object.assign(Object.assign({}, (0, query_1.minimalForHtmlQuery)(ctx)), { results: JSON.stringify({ added: result.total, value: result.result }) }));
                }
                else {
                    constants_1.returnFormat[constants_1.formatsResult.JSON];
                    ctx.status = 201;
                    ctx.body = result.result ? result.result : result.value;
                }
            }
            else {
                ctx.throw(400);
            }
        }
    }
    else {
        ctx.throw(400, { details: "Payload is malformed" });
    }
});
router.patch("/(.*)", async (ctx) => {
    if (!_helpers_1.helperUsers.ensureAuthenticated(ctx)) {
        ctx.throw(401);
    }
    else if (Object.keys(ctx.request.body).length > 0) {
        const args = await (0, utils_1.urlRequestToArgs)(ctx);
        if (args) {
            if (args.debug)
                (0, utils_1.message)("HEAD", "PATCH");
            const objectAccess = new dataAccess_1.apiAccess(ctx, args);
            if (args.ENTITY_ID) {
                const result = isNaN(Number(args.ENTITY_ID)) ? undefined : await objectAccess.update(BigInt(args.ENTITY_ID));
                if (result) {
                    constants_1.returnFormat[constants_1.formatsResult.JSON];
                    ctx.status = 200;
                    ctx.body = result.value;
                }
            }
            else {
                ctx.throw(400, { detail: "Id is required" });
            }
        }
        else {
            ctx.throw(404);
        }
    }
});
router.delete("/(.*)", async (ctx) => {
    if (!_helpers_1.helperUsers.ensureAuthenticated(ctx)) {
        ctx.throw(401);
    }
    else {
        const args = await (0, utils_1.urlRequestToArgs)(ctx);
        if (args) {
            if (args.debug)
                (0, utils_1.message)("HEAD", "DELETE");
            const objectAccess = new dataAccess_1.apiAccess(ctx, args);
            if (args && args.ENTITY_ID) {
                const result = await objectAccess.delete(BigInt(args.ENTITY_ID));
                if (result && result.id && result.id > 0) {
                    constants_1.returnFormat[constants_1.formatsResult.JSON];
                    ctx.status = 204;
                }
                else {
                    ctx.throw(404);
                }
            }
            else {
                ctx.throw(400, { detail: "Id is required" });
            }
        }
        else {
            ctx.throw(404);
        }
    }
});
exports.default = router.routes();
