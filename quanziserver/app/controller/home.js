'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const { ctx } = this;
        ctx.body = 'hi, egg';
    }
    async register() {
        console.log(ctx.request.body);
        // let {} = ctx.request.body;
        this.ctx.body = {
            code: 200
        }
    }
}

module.exports = HomeController;