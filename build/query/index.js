"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryHtml = exports.minimalForHtmlQuery = void 0;
const fs_1 = __importDefault(require("fs"));
const constants_1 = require("../constants");
const _helpers_1 = require("../routes/_helpers");
const utils_1 = require("../utils");
const minimalForHtmlQuery = (ctx) => {
    return Object.assign({ user: _helpers_1.helperUsers.ensureAuthenticated(ctx) ? "true" : "false", host: (0, utils_1.getHostName)(ctx), version: process.env.APIVERSION || "v1.0" }, ctx.query);
};
exports.minimalForHtmlQuery = minimalForHtmlQuery;
const queryHtml = (params) => {
    const action = `http://${params.host}/v1.0/CreateObservations`;
    const relations = {};
    Object.keys(constants_1._DBDATAS).forEach((key) => {
        relations[key] = Object.keys(constants_1._DBDATAS[key].relations);
    });
    if (params.user == "true") {
        relations["CreateObservations"] = [];
        relations["createDB"] = [];
    }
    let file = fs_1.default
        .readFileSync(__dirname + "/query.html", "utf-8")
        .replace('<link rel="stylesheet" href="./query.css">', "<style>" + fs_1.default.readFileSync(__dirname + "/query.css", "utf-8") + "</style>")
        .replace('<script src="query.js"></script>', "<script>" + fs_1.default.readFileSync(__dirname + "/query.js", "utf-8") + "</script>");
    const start = params.results ? "jsonObj = JSON.parse(`" + params.results + "`); jsonViewer.showJSON(jsonObj);" : "";
    Object.keys(params).forEach((element) => {
        file = file.replace(`,param${(0, utils_1.camelCase)(element, true)}=""`, `,param${(0, utils_1.camelCase)(element, true)}="${params[element]}"`);
    });
    return file
        .replace(`"@relations@"`, JSON.stringify(relations))
        .replace("// @start@", start)
        .replace("@action@", action)
        .replace("@datas@", params.datas ? params.datas : "");
};
exports.queryHtml = queryHtml;
