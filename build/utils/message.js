"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.message = void 0;
const chalk_1 = __importDefault(require("chalk"));
const message = (mode, cle, info) => {
    switch (mode) {
        case "HEAD": {
            if (info)
                process.stdout.write(`${chalk_1.default.green("==== ")} ${chalk_1.default.cyan(cle)} : ${chalk_1.default.yellow(info)} ${chalk_1.default.green(" ====")}` + "\n");
            else
                process.stdout.write(`${chalk_1.default.green("==== ")} ${chalk_1.default.cyan(cle)} ${chalk_1.default.green(" ====")}` + "\n");
            break;
        }
        case "DEBUG": {
            process.stdout.write(`${chalk_1.default.green(cle)} : ${chalk_1.default.yellow(info)}` + "\n");
            break;
        }
        case "INFO": {
            process.stdout.write(`${chalk_1.default.magenta(cle)} : ${chalk_1.default.white(info)}` + "\n");
            break;
        }
        case "ERROR": {
            process.stdout.write(`${chalk_1.default.red(cle)} : ${chalk_1.default.yellow(info)}` + "\n");
            break;
        }
        case "ENV": {
            process.stdout.write(`${chalk_1.default.cyan(cle)} : ${chalk_1.default.yellow(info)}` + "\n");
            break;
        }
        default: {
            process.stdout.write(`${chalk_1.default.whiteBright(cle)} : ${chalk_1.default.blueBright(info)}` + "\n");
            break;
        }
    }
};
exports.message = message;
