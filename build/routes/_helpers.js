"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helperUsers = void 0;
const dataAccess_1 = require("../db/dataAccess/");
const constants_1 = require("../constants");
exports.helperUsers = {
    ensureAuthenticated: (context) => {
        return constants_1.isTest ? "true" : context.isAuthenticated();
    },
    ensureAdmin: (context) => {
        return new Promise((resolve, reject) => {
            if (context.isAuthenticated()) {
                dataAccess_1.userAccess
                    .getSingle(context.state.user.id)
                    .then((user) => {
                    if (user && user[0].admin)
                        resolve(true);
                    resolve(false);
                })
                    .catch(() => {
                    reject(false);
                });
            }
            return false;
        });
    }
};
