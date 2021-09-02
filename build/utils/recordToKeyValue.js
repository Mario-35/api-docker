"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordToKeyValue = void 0;
const recordToKeyValue = (input) => {
    const result = [];
    if (typeof input == "object") {
        for (const [key, value] of Object.entries(input))
            result[key] = value;
    }
    return result;
};
exports.recordToKeyValue = recordToKeyValue;
