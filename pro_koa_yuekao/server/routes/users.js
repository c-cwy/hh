const { query } = require('../controller/index');

module.exports.add = async ctx => {
    const { time, tit, author, read, state } = ctx.query
    const addlist = 'insert into userlist (time, tit, author, read, state) values (?,?,?,?,?)'
    let insertdata = await query(addlist, [time, tit, author, read, state])
    console.log(insertdata)
    ctx.body = {
        code: 200,
        data: insertdata
    }
}