"use strict";var _a,__importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0}),exports._DBDATAS=exports.returnFormat=exports.formatsResult=exports.isTest=void 0;const utils_1=require("../utils"),dbDatas_1=__importDefault(require("./dbDatas"));var formatsResult;exports.isTest="test"===(null===(_a=process.env.NODE_ENV)||void 0===_a?void 0:_a.trim()),function(t){t[t.JSON=0]="JSON",t[t.CSV=1]="CSV",t[t.TXT=2]="TXT",t[t.HTML=3]="HTML",t[t.ICON=4]="ICON"}(formatsResult=exports.formatsResult||(exports.formatsResult={})),exports.returnFormat={[formatsResult.JSON]:"application/json",[formatsResult.CSV]:"text/csv",[formatsResult.TXT]:"text/plain",[formatsResult.HTML]:"html",[formatsResult.ICON]:"image/x-icon"},exports._DBDATAS=(0,utils_1.deepFreeze)(dbDatas_1.default);