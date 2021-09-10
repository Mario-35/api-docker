"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(t,e,s,i){void 0===i&&(i=s),Object.defineProperty(t,i,{enumerable:!0,get:function(){return e[s]}})}:function(t,e,s,i){void 0===i&&(i=s),t[i]=e[s]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),__importStar=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var s in t)"default"!==s&&Object.prototype.hasOwnProperty.call(t,s)&&__createBinding(e,t,s);return __setModuleDefault(e,t),e};Object.defineProperty(exports,"__esModule",{value:!0}),exports.apiAccess=void 0;const entities=__importStar(require("../entities/index")),utils_1=require("../../utils/"),db_1=require("../../db");class apiAccess{constructor(t,e){this.ctx=t,this.args=e,this.args.debug&&(0,utils_1.message)("HEAD","class "+this.constructor.name),e.ENTITY_NAME in entities?(this.myEntity=new entities[(this.ctx,e.ENTITY_NAME)](t,e,0,db_1.db),void 0===this.myEntity?this.args.debug&&(0,utils_1.message)("ERROR","Entity Error : "+e.ENTITY_NAME):this.args.debug&&(0,utils_1.message)("HEAD","class "+this.myEntity.constructor.name)):this.args.debug&&(0,utils_1.message)("ERROR","Entity Error : "+e.ENTITY_NAME)}async getAll(){if(this.args.debug&&(0,utils_1.message)("HEAD","class DataAccessClass getAll"),this.myEntity)return this.args.RELATION_NAME?await this.myEntity.getRelation(this.args.ENTITY_ID):await this.myEntity.getAll()}async getSingle(t,e,s,i){if(this.args.debug&&(0,utils_1.message)("HEAD","class DataAccessClass getSingle"),this.myEntity)return s?await this.myEntity.getRelation(t,s):await this.myEntity.getSingle(t,e,i)}async add(){if(this.args.debug&&(0,utils_1.message)("HEAD","class DataAccessClass add"),this.myEntity)return await this.myEntity.add((0,utils_1.recordToKeyValue)(this.ctx.request.body))}async update(t){if(this.args.debug&&(0,utils_1.message)("HEAD","class DataAccessClass update"),this.myEntity)return await this.myEntity.update(t,(0,utils_1.recordToKeyValue)(this.ctx.request.body))}async delete(t){if(this.args.debug&&(0,utils_1.message)("HEAD","class DataAccessClass delete"),this.myEntity)return await this.myEntity.delete(t)}}exports.apiAccess=apiAccess,apiAccess.trxProvider=db_1.db.transactionProvider();