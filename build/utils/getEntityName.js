"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEntityName = void 0;
const constants_1 = require("../constants");
function getEntityName(search) {
    var _a;
    const testString = (_a = search
        .match(/[a-zA-Z]/g)) === null || _a === void 0 ? void 0 : _a.join("").trim();
    return testString
        ? constants_1._DBDATAS.hasOwnProperty(testString)
            ? testString
            : Object.keys(constants_1._DBDATAS).filter((elem) => constants_1._DBDATAS[elem].table == testString.toLowerCase() || constants_1._DBDATAS[elem].singular == testString)[0]
        : undefined;
}
exports.getEntityName = getEntityName;
