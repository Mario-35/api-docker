"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.createDB=exports.destroyDB=void 0;const knex_1=__importDefault(require("knex")),index_1=require("../utils/index"),triggers_1=require("./triggers"),dataAccess_1=require("./dataAccess"),constants_1=require("../constants"),admin=()=>(0,knex_1.default)({client:"pg",connection:{host:process.env.PGHOST,user:"postgres",password:process.env.PGADMIN,database:"postgres"},pool:{min:0,max:1},debug:!1}),destroyDB=async e=>{if(!(e&&e.database&&e.host&&e.password&&e.user))return;const a=admin();await a.raw("SELECT pg_terminate_backend(pg_stat_activity.pid) FROM pg_stat_activity  WHERE pg_stat_activity.datname = ? AND pid <> pg_backend_pid()",[e.database]).then(async()=>{await a.raw("DROP Database IF EXISTS "+e.database).catch(e=>{(0,index_1.message)("ERROR",e.message)})})};exports.destroyDB=destroyDB;const createDB=async(e,a)=>{if(!(e&&e.database&&e.host&&e.password&&e.user))return{};const t={"Create Database":e.database},s=admin(),n=(0,knex_1.default)({client:"pg",connection:e,pool:{min:0,max:1},debug:!1});"test"===e.database&&await s.raw("DROP Database IF EXISTS "+e.database),await s.raw("CREATE Database "+e.database).then(async()=>{t["Create Database"]=e.database+" OK",await s.raw(`select count(*) FROM pg_user WHERE usename = '${e.user}';`).then(async a=>{a.rowCount<1?await s.raw(`CREATE ROLE ${e.user} WITH PASSWORD '${e.password}' SUPERUSER;`).then(()=>{t["Create ROLE"]=e.user+" Ok"}).catch(e=>e):await s.raw(`ALTER ROLE ${e.user} WITH PASSWORD '${e.password}' SUPERUSER;`).then(()=>{t["Create/Alter ROLE"]=e.user+" Ok",s.destroy().then(()=>{t["Admin connection destroy"]="Ok"}).catch(e=>{(0,index_1.message)("ERROR",e.message)})}).catch(e=>{(0,index_1.message)("ERROR",e.message)})})}).catch(e=>{(0,index_1.message)("ERROR",e.message)}),await n.raw("CREATE EXTENSION IF NOT EXISTS postgis;").then(()=>{t["Create postgis"]="Ok"}).catch(e=>{(0,index_1.message)("ERROR",e.message)}),await(0,index_1.asyncForEach)(Object.keys(constants_1._DBDATAS),async e=>{const a=[],s=[];let r="";Object.keys(constants_1._DBDATAS[e].columns).forEach(t=>{a.push(`"${t}" ${constants_1._DBDATAS[e].columns[t].create}`),s.push(`comment on column "${constants_1._DBDATAS[e].table}"."${t}" is '${constants_1._DBDATAS[e].columns[t].comment}';`)});const c=constants_1._DBDATAS[e].constraints;if(c){const e=[];Object.keys(c).forEach(a=>{e.push(`CONSTRAINT "${a}" ${c[a]}`)}),r=`${a.join(", ")}, ${e.join(", ")}`}else r=""+a.join(", ");await n.raw(`CREATE TABLE public.${constants_1._DBDATAS[e].table} (${r});`).then(()=>{t["Create table "+constants_1._DBDATAS[e].table]="Ok"}).catch(a=>{t["Create table "+constants_1._DBDATAS[e].table]=a.message,(0,index_1.message)("ERROR",a.message)});const o=constants_1._DBDATAS[e].indexes,i=[];o&&Object.keys(o).forEach(e=>{i.push(`CREATE INDEX "${e}" ${o[e]}`)}),await n.raw(i.join(";")).then(()=>{t["Create indexes for "+e]="Ok"}).catch(a=>{t["Create indexes for "+e]="Error",(0,index_1.message)("ERROR",a.message)}),await n.raw(s.join(" ")).then(()=>{t["Create comments for "+constants_1._DBDATAS[e].table]="Ok"}).catch(e=>{(0,index_1.message)("ERROR",e.message)});const d=constants_1._DBDATAS[e].after;d&&await n.raw(d).then(()=>{t["Something to do after for "+constants_1._DBDATAS[e].table]="Ok"}).catch(e=>{(0,index_1.message)("ERROR",e.message)})});const r=a&&a.state.user?{username:a.state.user.username,email:a.state.user.email,password:a.state.user.password,admin:a.state.user.admin}:{username:e.user,email:"default@email.com",password:e.password,admin:!1};return await dataAccess_1.userAccess.add(r),t["Create functions & trigger"]=await n.raw(triggers_1.triggers).then(()=>"Ok").catch(e=>e),await n.raw(`select count(*) FROM pg_user WHERE usename = '${e.user}';`).then(()=>{t["Create DB"]="Ok"}),t};exports.createDB=createDB;