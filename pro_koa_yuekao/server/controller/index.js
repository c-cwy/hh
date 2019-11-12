const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost', // 数据库地址
    user: 'root', // 数据库用户
    password: '123321', // 数据库密码
    database: 'node_5b' // 选中数据库
})
connection.connect(error => {
    if (error) {
        console.log('数据库连接失败');
    } else {
        console.log('数据库连接成功');
    }
})
module.exports.query = ((sql, parser = []) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, parser, (error, data) => {
            if (error) {
                reject({ msg: 'error', error });
            } else {
                resolve({ msg: 'success', data })
            }
        })
    })
})