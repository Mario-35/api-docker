"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepFreeze = void 0;
const deepFreeze = (obj) => {
    const propNames = Object.getOwnPropertyNames(obj);
    for (const name of propNames) {
        const value = obj[name];
        obj[name] = value && typeof value === "object" ? (0, exports.deepFreeze)(value) : value;
    }
    return Object.freeze(obj);
};
exports.deepFreeze = deepFreeze;
