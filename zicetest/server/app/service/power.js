'use strict';

const Service = require('egg').Service;

class PowerService extends Service {
    // 登录接口
    async menu(roleid) {
        const result = await this.app.mysql.query(`select * from menulist where power like '%${roleid}%'`, [roleid]);
        return result;
    };

}

module.exports = PowerService;