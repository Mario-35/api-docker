"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyId = void 0;
const verifyId = async (dbContext, idInput, tableSearch) => {
    try {
        const query = dbContext(tableSearch);
        if (typeof idInput == "bigint") {
            const result = await query.select("id").where({ id: idInput }).first();
            return result ? true : false;
        }
        else {
            const result = await query.count().whereIn("id", idInput.map(String));
            return Object.values(idInput).length == result[0].count;
        }
    }
    catch (error) {
        return false;
    }
};
exports.verifyId = verifyId;
