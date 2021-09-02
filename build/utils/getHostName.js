"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHostName = void 0;
const getHostName = (ctx) => {
    return ctx.request.headers["x-forwarded-host"] ? ctx.request.headers["x-forwarded-host"][0] : ctx.request.header.host ? ctx.request.header.host : "";
};
exports.getHostName = getHostName;
