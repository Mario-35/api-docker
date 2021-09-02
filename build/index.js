"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
require("dotenv").config({ path: process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : ".env" });
const constants_1 = require("./constants");
const koa_1 = __importDefault(require("koa"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const koa_session_1 = __importDefault(require("koa-session"));
const koa_passport_1 = __importDefault(require("koa-passport"));
const koa_logger_1 = __importDefault(require("koa-logger"));
const koa_json_1 = __importDefault(require("koa-json"));
const auth_1 = __importDefault(require("./routes/auth"));
const all_1 = __importDefault(require("./routes/all"));
const cors_1 = __importDefault(require("@koa/cors"));
const utils_1 = require("./utils");
const isDbExist_1 = require("./db/isDbExist");
process.env.PGDATABASE = constants_1.isTest ? "test" : process.env.PGDATABASE || "api";
process.env.PORT = process.env.PORT || "8029";
const app = new koa_1.default();
app.use(async (ctx, next) => {
    try {
        await next().then(async () => {
            await (0, utils_1.writeToLog)(ctx);
        });
    }
    catch (err) {
        (0, utils_1.addToLog)(ctx, "error", err.message + " : " + err.detail);
        await (0, utils_1.writeToLog)(ctx);
        ctx.status = err.statusCode || err.status || 500;
        ctx.body = {
            code: err.statusCode,
            message: err.message,
            detail: err.detail
        };
    }
});
app.use((0, koa_bodyparser_1.default)());
app.keys = [process.env.KEY ? process.env.KEY : "you shall not pass"];
app.use((0, koa_session_1.default)(app));
if (!constants_1.isTest) {
    app.use((0, koa_logger_1.default)());
}
app.use((0, koa_json_1.default)());
app.use((0, cors_1.default)());
app.use(koa_passport_1.default.initialize());
app.use(koa_passport_1.default.session());
require("./auth");
app.use(auth_1.default);
app.use(all_1.default);
const showMessages = (mode) => {
        (0, utils_1.message)("HEAD", "env", process.env.NODE_ENV);
        (0, utils_1.message)("ENV", "Host", process.env.PGHOST);
        (0, utils_1.message)("ENV", "Database", process.env.PGDATABASE);
        (0, utils_1.message)("ENV", "Api version", process.env.APIVERSION);
        (0, utils_1.message)("ENV", "Port", process.env.PGPORT);
        (0, utils_1.message)("ENV", "User", process.env.PGUSER);
        (0, utils_1.message)("ENV", "Listen port", process.env.PORT);
    
};
exports.server = app.listen(process.env.PORT, async () => {
    if (!constants_1.isTest) {
        await (0, isDbExist_1.isDbExist)()
            .then((res) => {
            app.context.logID = BigInt(0);
            showMessages(res);
            (0, utils_1.message)("HEAD", "Server listening on port", process.env.PORT);
        })
            .catch(() => {
            (0, utils_1.message)("ERROR", "Unable to find or create : ", process.env.PGDATABASE);
            process.exit(111);
        });
    }
});
