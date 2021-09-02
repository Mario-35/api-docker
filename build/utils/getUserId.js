"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserId = void 0;
const getUserId = (ctx) => {
    return ctx.state.user && ctx.state.user.id ? ctx.state.user.id : process.env.USERID ? process.env.USERID : -1;
};
exports.getUserId = getUserId;
