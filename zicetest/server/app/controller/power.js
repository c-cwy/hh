'use strict';

const Controller = require('egg').Controller;
const jwt = require('jsonwebtoken');
class PowerController extends Controller {
    async menu() {
        const { ctx } = this;
        const token = ctx.request.header.token
        const info = jwt.verify(token, '陈婉莹');
        try {
            const data = await this.service.power.menu(info.role_id);
            this.ctx.body = {
                code: 2,
                data
            }
        } catch (e) {
            this.ctx.body = {
                code: 0,
                msg: e
            }
        }
    }
}

module.exports = PowerController;