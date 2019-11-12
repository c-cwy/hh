const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'locahost',
    user: 'root',
    password: '123321',
    database: 'node_5b'
})