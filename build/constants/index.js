"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports._DBDATAS = exports.returnFormat = exports.formatsResult = exports.isTest = void 0;
const utils_1 = require("../utils");
const dbDatas_1 = __importDefault(require("./dbDatas"));
exports.isTest = ((_a = process.env.NODE_ENV) === null || _a === void 0 ? void 0 : _a.trim()) === "test";
var formatsResult;
(function (formatsResult) {
    formatsResult[formatsResult["JSON"] = 0] = "JSON";
    formatsResult[formatsResult["CSV"] = 1] = "CSV";
    formatsResult[formatsResult["TXT"] = 2] = "TXT";
    formatsResult[formatsResult["HTML"] = 3] = "HTML";
    formatsResult[formatsResult["ICON"] = 4] = "ICON";
})(formatsResult = exports.formatsResult || (exports.formatsResult = {}));
exports.returnFormat = {
    [formatsResult.JSON]: "application/json",
    [formatsResult.CSV]: "text/csv",
    [formatsResult.TXT]: "text/plain",
    [formatsResult.HTML]: "html",
    [formatsResult.ICON]: "image/x-icon"
};
exports._DBDATAS = (0, utils_1.deepFreeze)(dbDatas_1.default);
