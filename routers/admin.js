const express = require("express");
const config = require("../config");
const libtools = require("../libs/common");

let adminRouter = express.Router();

module.exports = adminRouter;
//token 与cookie
adminRouter.use((req, res, next) => {
    console.log(req.db.query)
    if (!req.session['admin_ID'] && req.url !== "/login") {
        res.redirect('/admin/login');
    } else {
        next();
    }
})

adminRouter.get('/login', (req, res) => {
    console.log("get")
    res.render('login');
})

adminRouter.post('/login', (req, res) => {
    let {
        username,
        password
    } = req.body;
    if (username === config.admin_username &&
        libtools.md5(password) === config.admin_password) {
        req.session['admin_ID'] = 1;
        res.send("超级管理员登录成功");
    }
})