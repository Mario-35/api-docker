"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_passport_1 = __importDefault(require("koa-passport"));
const LocalStrategy = require("passport-local").Strategy;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const db_1 = require("./db");
const options = {};
function comparePass(userPassword, databasePassword) {
    return bcryptjs_1.default.compareSync(userPassword, databasePassword);
}
koa_passport_1.default.serializeUser((user, done) => {
    done(null, user ? user.id : false);
});
koa_passport_1.default.deserializeUser((id, done) => {
    return ((0, db_1.db)("user")
        .where({ id })
        .first()
        .then((user) => {
        done(null, user ? user : false);
    })
        .catch((err) => {
        done(err, undefined);
    }));
});
koa_passport_1.default.use(new LocalStrategy(options, (username, password, done) => {
    (0, db_1.db)("user")
        .where({ username })
        .first()
        .then((user) => {
        if (!user)
            return done(null, false);
        if (!comparePass(password, user.password)) {
            return done(null, false);
        }
        else {
            process.env.USERID = user.id;
            return done(null, user);
        }
    })
        .catch((err) => {
        return done(err);
    });
}));
