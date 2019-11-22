'use strict';

const Controller = require('egg').Controller;
const jwt = require('jsonwebtoken');

class UserController extends Controller {

    //登录
    async login() {
        const { username, password } = this.ctx.request.body;
        if (username && password) {
            const result = await this.service.index.login(username, password);
            console.log(result[0].rolename);
            if (result.length) {
                let token = jwt.sign({ username, password, role_id: result[0].role_id }, "陈婉莹", { expiresIn: 60 * 60 });
                this.ctx.body = {
                    code: 1,
                    token,
                    rolename: result[0].rolename,
                    msg: '登录成功!'
                }
            } else {
                this.ctx.body = {
                    code: 1,
                    msg: '用户名或密码错误'
                }
            }
        } else {
            this.ctx.body = {
                code: 0,
                msg: '缺少参数'
            }
        }
    };
}

module.exports = UserController;