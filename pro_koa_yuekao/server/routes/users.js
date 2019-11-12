const { query } = require('../controller/index');

//查询
module.exports.check = async ctx => {
    let checkList = 'select * from  list';
    let dataList = await query(checkList)
    console.log(ctx.query)
    if (dataList.length) {
        ctx.body = {
            code: 200,
            data: dataList
        }
    } else {
        ctx.body = {
            code: 404,
            msg: '没有数据'
        }
    }
}

//删除
module.exports.del = async ctx => {
    let { id } = ctx.query;
    let sql = 'delete from list where id=?'
    let data = await query(sql, [id]);
    ctx.body = {
        code: 200
    }
}

//添加
module.exports.add = async ctx => {
    let { tit, author } = ctx.query;
    let sql = 'insert into list (tit,author) values (?,?)';
    let data = await query(sql, [tit, author]);
    ctx.body = {
        code: 200
    }
}