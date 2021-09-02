"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractMessageError = void 0;
const extractMessageError = (input) => {
    const temp = input.split("-");
    return input.length === 0 ? input : temp[temp.length - 1].trim();
};
exports.extractMessageError = extractMessageError;
