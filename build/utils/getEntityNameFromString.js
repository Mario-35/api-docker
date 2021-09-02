"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEntityNameFromString = void 0;
const constants_1 = require("../constants");
const getEntityNameFromString = (input) => {
    var _a;
    const test = (_a = input
        .replace("Create", "")
        .match(/[a-zA-Z]/g)) === null || _a === void 0 ? void 0 : _a.join("").trim();
    if (test !== undefined) {
        return constants_1._DBDATAS.hasOwnProperty(test)
            ? test
            : Object.keys(constants_1._DBDATAS).filter((elem) => constants_1._DBDATAS[elem].name.toUpperCase() == test.toUpperCase() || constants_1._DBDATAS[elem].singular.toUpperCase() == test.toUpperCase())[0];
    }
    return undefined;
};
exports.getEntityNameFromString = getEntityNameFromString;
