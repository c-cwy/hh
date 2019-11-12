const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123321',
    database: 'node_5b'
})
connection.connect((error) => {
    if (error) {
        console.log('数据库连接失败');
    } else {
        console.log('数据库连接成功');
    }
})

module.exports.query = (sql, parser = []) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, parser, (error, data) => {
            if (error) {
                reject({ msg: 'error', error })
            } else {
                resolve({ msg: 'success', data })
            }
        })
    })
}