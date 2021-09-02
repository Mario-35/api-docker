"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const koa_passport_1 = __importDefault(require("koa-passport"));
const dataAccess_1 = require("../db/dataAccess/");
const _helpers_1 = require("./_helpers");
const constants_1 = require("../constants");
const db_1 = require("../db");
const views_1 = require("./views");
const router = new koa_router_1.default();
const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
const checkPassword = (str) => {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/.test(str);
};
router.get(["/register", "/api/register"], async (ctx) => {
    const createHtml = new views_1.CreateHtml();
    ctx.type = constants_1.returnFormat[constants_1.formatsResult.HTML];
    ctx.body = createHtml.login({ login: false });
});
router.post(["/register", "/api/register"], async (ctx, next) => {
    const body = ctx.request.body;
    const isObject = typeof body != "string";
    const why = {};
    if (isObject && body["username"].trim() === "") {
        why["username"] = "Empty username";
    }
    else {
        const user = await (0, db_1.db)("user").select("username").where({ username: ctx.request.body["username"] }).first();
        if (user)
            why["username"] = "Already present";
    }
    if (isObject && body["email"].trim() === "") {
        why["email"] = "Empty email";
    }
    else {
        if (emailIsValid(body["email"]) === false)
            why["email"] = "Invalid email";
    }
    if (isObject && body["password"].trim() === "") {
        why["password"] = "Empty password";
    }
    if (isObject && body["repeat"].trim() === "") {
        why["repeat"] = "Empty repeat password";
    }
    else {
        if (body["password"] != body.repeat) {
            why["repeat"] = "Password are different";
        }
        else {
            if (checkPassword(body["password"]) === false)
                why["password"] = "Invalid password";
        }
    }
    if (Object.keys(why).length === 0) {
        try {
            await dataAccess_1.userAccess.add(ctx.request.body);
            return await koa_passport_1.default.authenticate("local", async (err, user, info, status) => {
                if (user) {
                    ctx.status = 200;
                    ctx.login(user);
                    ctx.redirect("/status");
                }
                else {
                    ctx.status = 400;
                    ctx.redirect("/register");
                }
            })(ctx, next);
        }
        catch (error) {
            ctx.redirect("/error");
        }
    }
    else {
        const createHtml = new views_1.CreateHtml();
        ctx.type = constants_1.returnFormat[constants_1.formatsResult.HTML];
        ctx.body = createHtml.login({ login: false, body: ctx.request.body, why: why });
    }
});
router.get(["/login", "/api/login"], async (ctx) => {
    if (_helpers_1.helperUsers.ensureAuthenticated(ctx)) {
        ctx.redirect("/status");
    }
    else {
        const createHtml = new views_1.CreateHtml();
        ctx.type = constants_1.returnFormat[constants_1.formatsResult.HTML];
        ctx.body = ctx.body = createHtml.login({ login: true });
    }
});
router.post(["/login", "/api/login"], async (ctx, next) => {
    return await koa_passport_1.default.authenticate("local", (err, user) => {
        if (user) {
            ctx.login(user);
            ctx.redirect("/status");
        }
        else {
            ctx.status = 400;
            ctx.redirect("/login");
        }
    })(ctx, next);
});
router.get(["/logout", "/api/logout"], async (ctx) => {
    if (_helpers_1.helperUsers.ensureAuthenticated(ctx)) {
        ctx.logout();
        ctx.session = null;
        ctx.redirect("/login");
    }
    else {
        ctx.body = { success: false };
        ctx.throw(401);
    }
});
router.get(["/status", "/api/status"], async (ctx) => {
    if (_helpers_1.helperUsers.ensureAuthenticated(ctx)) {
        const user = await dataAccess_1.userAccess.getSingle(ctx.state.user.id);
        const createHtml = new views_1.CreateHtml();
        ctx.type = constants_1.returnFormat[constants_1.formatsResult.HTML];
        ctx.body = createHtml.status({
            username: user[0]["username"],
            host: process.env.PGHOST || "",
            database: process.env.PGDATABASE || "",
            admin: user[0]["admin"] == true ? "admin" : "user"
        });
    }
    else {
        ctx.redirect("/login");
    }
});
router.get(["/error", "/api/error"], async (ctx) => {
    const createHtml = new views_1.CreateHtml();
    ctx.type = constants_1.returnFormat[constants_1.formatsResult.HTML];
    ctx.body = createHtml.error("what ?");
});
exports.default = router.routes();
