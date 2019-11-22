'use strict';
const { Service } = require('egg');
class ServiceIndex extends Service {
    //注销
    async logout(id) {
        let $sql = `delete from quanziuser where id=?`
        return await this.app.mysql.query($sql, [id]);
    }
}
module.exports = ServiceIndex;