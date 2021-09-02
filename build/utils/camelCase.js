"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.camelCase = void 0;
const camelCase = (input, pascalCase) => {
    if (!(typeof input === "string" || Array.isArray(input))) {
        throw new TypeError("Expected the input to be `string | string[]`");
    }
    if (Array.isArray(input)) {
        input = input
            .map((x) => x.trim())
            .filter((x) => x.length)
            .join("-");
    }
    else {
        input = input.trim();
    }
    if (input.length === 0) {
        return "";
    }
    if (input.length === 1) {
        return pascalCase && pascalCase == true ? input.toLocaleUpperCase() : input.toLocaleLowerCase();
    }
    input = input.replace(/^[_.\- ]+/, "");
    input = input.toLocaleLowerCase();
    if (pascalCase && pascalCase == true) {
        input = input.charAt(0).toLocaleUpperCase() + input.slice(1);
    }
    return input
        .replace(/[_.\- ]+([\p{Alpha}\p{N}_]|$)/gu, (_, p1) => p1.toLocaleUpperCase())
        .replace(/\d+([\p{Alpha}\p{N}_]|$)/gu, (m) => m.toLocaleUpperCase());
};
exports.camelCase = camelCase;
