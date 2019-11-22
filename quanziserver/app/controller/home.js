'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    //注销
    async logout() {
        const { id } = this.ctx.request.body;
        if (!id) {
            this.ctx.body = {
                code: 3,
                msg: '缺少参数'
            }
        }
        try {
            await this.service.index.logout(id);
            this.ctx.body = {
                code: 200,
                msg: '注销成功'
            }
        } catch (e) {
            console.log(e);
            this.ctx.body = {
                code: 404,
                msg: e
            }
        }
    }

    //修改密码
    async exitpwd() {
        const {} = this.ctx.request.body;
    }
}

module.exports = HomeController;