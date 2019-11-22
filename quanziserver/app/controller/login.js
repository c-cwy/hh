'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
    //注册
    async register() {
        const { username, password } = this.ctx.request.body;
        const result = await this.app.mysql.get(`quanziuser`, { username, password });
        if (result !== null) {
            this.ctx.body = {
                msg: "此用户名已注册"
            }
        } else {
            await this.app.mysql.insert(`quanziuser`, { username, password })
            this.ctx.body = {
                msg: '注册成功'
            }
        }
    }

    //登录
    async login() {
        const { username, password } = this.ctx.query;
        const result = await this.app.mysql.get(`quanziuser`, { username, password });
        if (result) {
            this.ctx.body = {
                code: 1,
                msg: '登录成功'
            }
        } else {
            this.ctx.body = {
                code: 0,
                msg: '登录失败'
            }
        }
    }
}

module.exports = LoginController;