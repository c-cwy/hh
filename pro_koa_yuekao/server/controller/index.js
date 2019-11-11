const mysql = require('mysql');
const connection = mysql.connection({
    host: 'localhost', // 数据库地址
    user: 'root', // 数据库用户
    password: '123321', // 数据库密码
    database: 'node_5b' // 选中数据库
})