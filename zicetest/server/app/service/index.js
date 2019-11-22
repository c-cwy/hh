'use strict';

const Service = require('egg').Service;

class IndexService extends Service {
    // 登录接口
    async login(username, password) {
        const result = await this.app.mysql.query("select * from userlist where username=? and password=?", [username, password]);
        return result;
    };

}

module.exports = IndexService;