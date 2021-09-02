"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renameProp = void 0;
const renameProp = (oldProp, newProp, _a) => {
    var _b = oldProp, old = _a[_b], others = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
    return (Object.assign({ [newProp]: old }, others));
};
exports.renameProp = renameProp;
