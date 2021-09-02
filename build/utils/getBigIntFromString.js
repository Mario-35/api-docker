"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBigIntFromString = void 0;
const getBigIntFromString = (input) => {
    var _a;
    try {
        return typeof input == "string" ? BigInt((_a = input.match(/[0-9]/g)) === null || _a === void 0 ? void 0 : _a.join("")) : BigInt(input);
    }
    catch (error) {
        return undefined;
    }
};
exports.getBigIntFromString = getBigIntFromString;
