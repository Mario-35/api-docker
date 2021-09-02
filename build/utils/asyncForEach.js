"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncForEach = void 0;
async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}
exports.asyncForEach = asyncForEach;
