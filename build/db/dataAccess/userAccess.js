"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.userAccess=void 0;const bcryptjs_1=__importDefault(require("bcryptjs")),db_1=require("../../db");exports.userAccess={getAll:async()=>await db_1.db.table("user").select("*"),getSingle:async e=>await(0,db_1.db)("user").select("*").where({id:parseInt(e)}),add:async e=>{const t=bcryptjs_1.default.genSaltSync(),s=bcryptjs_1.default.hashSync(e.password,t);return await(0,db_1.db)("user").insert({username:e.username,email:e.email,password:s}).returning("*")}};