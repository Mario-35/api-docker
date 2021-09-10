"use strict";var __importDefault=this&&this.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.server=void 0,require("dotenv").config({path:process.env.NODE_ENV?".env."+process.env.NODE_ENV:".env"});const constants_1=require("./constants"),koa_1=__importDefault(require("koa")),koa_bodyparser_1=__importDefault(require("koa-bodyparser")),koa_session_1=__importDefault(require("koa-session")),koa_passport_1=__importDefault(require("koa-passport")),koa_logger_1=__importDefault(require("koa-logger")),koa_json_1=__importDefault(require("koa-json")),auth_1=__importDefault(require("./routes/auth")),all_1=__importDefault(require("./routes/all")),cors_1=__importDefault(require("@koa/cors")),utils_1=require("./utils"),isDbExist_1=require("./db/isDbExist");process.env.PGDATABASE=constants_1.isTest?"test":process.env.PGDATABASE||"api",process.env.PORT=process.env.PORT||"8029";const app=new koa_1.default;app.use(async(s,e)=>{try{await e().then(async()=>{await(0,utils_1.writeToLog)(s)})}catch(e){(0,utils_1.addToLog)(s,"error",e.message+" : "+e.detail),await(0,utils_1.writeToLog)(s),s.status=e.statusCode||e.status||500,s.body={code:e.statusCode,message:e.message,detail:e.detail}}}),app.use((0,koa_bodyparser_1.default)()),app.keys=[process.env.KEY?process.env.KEY:"you shall not pass"],app.use((0,koa_session_1.default)(app)),constants_1.isTest||app.use((0,koa_logger_1.default)()),app.use((0,koa_json_1.default)()),app.use((0,cors_1.default)()),app.use(koa_passport_1.default.initialize()),app.use(koa_passport_1.default.session()),require("./auth"),app.use(auth_1.default),app.use(all_1.default);const showMessages=s=>{s&&((0,utils_1.message)("HEAD","env",process.env.NODE_ENV),(0,utils_1.message)("ENV","Host",process.env.PGHOST),(0,utils_1.message)("ENV","Database",process.env.PGDATABASE),(0,utils_1.message)("ENV","Api version",process.env.APIVERSION),(0,utils_1.message)("ENV","Port",process.env.PGPORT),(0,utils_1.message)("ENV","User",process.env.PGUSER),(0,utils_1.message)("ENV","Listen port",process.env.PORT))};exports.server=app.listen(process.env.PORT,async()=>{constants_1.isTest||await(0,isDbExist_1.isDbExist)().then(s=>{app.context.logID=BigInt(0),s&&((0,utils_1.message)("HEAD","env",process.env.NODE_ENV),(0,utils_1.message)("ENV","Host",process.env.PGHOST),(0,utils_1.message)("ENV","Database",process.env.PGDATABASE),(0,utils_1.message)("ENV","Api version",process.env.APIVERSION),(0,utils_1.message)("ENV","Port",process.env.PGPORT),(0,utils_1.message)("ENV","User",process.env.PGUSER),(0,utils_1.message)("ENV","Listen port",process.env.PORT)),(0,utils_1.message)("HEAD","Server listening on port",process.env.PORT)}).catch(()=>{(0,utils_1.message)("ERROR","Unable to find or create : ",process.env.PGDATABASE),process.exit(111)})});