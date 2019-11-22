'use strict';

const Controller = require('egg').Controller;
const jwt = require('jsonwebtoken');
class PowerController extends Controller {
    async menu() {
        const { ctx } = this;
        const token = ctx.request.header.token
        console.log("==========", token);
        const info = jwt.verify(token, '陈婉莹');

        console.log(info);
        try {
            const data = await this.service.index.login(info.role_id);
            console.log('data=======', data);
        } catch (e) {
            this.ctx.body = {
                code: 0,
                msg: e
            }
        }
    }
}

module.exports = PowerController;