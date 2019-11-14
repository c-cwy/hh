'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
    async login() {
        // let { username, password } = ctx.request.body;
        // console.log(username, password);

        this.ctx.body = {
            code: 200
        }
    }
    async register() {
        console.log(ctx.request.body);
        // let {} = ctx.request.body;
        this.ctx.body = {
            code: 200
        }
    }
}

module.exports = LoginController;