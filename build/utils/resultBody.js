"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resultBody = void 0;
const json2csv_1 = require("json2csv");
const _1 = require(".");
const constants_1 = require("../constants");
const convertToCsv = (inputDatas) => {
    const opts = { delimiter: ";", includeEmptyRows: true, escapedQuote: "" };
    if (inputDatas)
        try {
            const parser = new json2csv_1.Parser(opts);
            const csv = parser.parse(inputDatas);
            return csv;
        }
        catch (e) {
            if (e instanceof Error) {
                (0, _1.message)("ERROR", e.message);
                return e.message;
            }
        }
    return "No datas";
};
const resultBody = (args, input) => {
    switch (args.formatResult) {
        case constants_1.formatsResult.CSV: {
            return convertToCsv(input);
        }
        case constants_1.formatsResult.TXT: {
            return input;
        }
        default: {
            return input;
        }
    }
};
exports.resultBody = resultBody;
