"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const busboy_1 = __importDefault(require("busboy"));
const path_1 = __importDefault(require("path"));
const util_1 = __importDefault(require("util"));
const fs_1 = __importDefault(require("fs"));
const _1 = require(".");
const upload = (ctx) => {
    const data = {};
    return new Promise(async (resolve, reject) => {
        const uploadPath = "./upload";
        const allowedExtName = ["csv", "txt", "json"];
        if (!fs_1.default.existsSync(uploadPath)) {
            const mkdir = util_1.default.promisify(fs_1.default.mkdir);
            await mkdir(uploadPath).catch((error) => {
                data.state = "ERROR";
                reject(error);
            });
        }
        const busboy = new busboy_1.default({ headers: ctx.req.headers });
        busboy.on("file", (fieldname, file, filename) => {
            const extname = path_1.default.extname(filename).substr(1);
            if (!allowedExtName.includes(extname)) {
                data.state = "UPLOAD UNALLOWED FILE";
                file.resume();
                reject(data);
            }
            else {
                file.pipe(fs_1.default.createWriteStream(uploadPath + "/" + filename));
                data["file"] = uploadPath + "/" + filename;
                file.on("data", (chunk) => {
                    data.state = `GET ${chunk.length} bytes`;
                });
                file.on("error", (error) => {
                    (0, _1.message)("ERROR", error.message);
                });
                file.on("end", () => {
                    data.state = "UPLOAD FINISHED";
                    data[fieldname] = uploadPath + "/" + filename;
                });
            }
        });
        busboy.on("field", (fieldname, value) => {
            data[fieldname] = value;
        });
        busboy.on("error", (error) => {
            (0, _1.message)("ERROR", error.message);
            data.state = "ERROR";
            reject(error);
        });
        busboy.on("finish", () => {
            data.state = "DONE";
            resolve(data);
        });
        ctx.req.pipe(busboy);
    });
};
exports.upload = upload;
