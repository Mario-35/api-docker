"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addToLog = void 0;
const addToLog = (ctx, key, value) => {
    if (!ctx["LOG"])
        ctx["LOG"] = {};
    ctx["LOG"][key] = value;
};
exports.addToLog = addToLog;
