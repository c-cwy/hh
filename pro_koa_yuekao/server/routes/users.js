const { query } = require('../controller/index');

//查询
module.exports.check = async ctx => {
    let checkList = 'select * from  userlist';
    let dataList = await query(checkList)
    console.log(dataList);
    if (dataList.length) {
        ctx.body = {
            code: 200,
            data: dataList
        }
    } else {
        ctx.body = {
            code: 200,
            msg: '没有数据'
        }
    }
}

//添加
module.exports.add = async ctx => {
    const { name, password } = ctx.query
    const addlist = 'insert into userlist (name,password) values (?,?)'
    let insertdata = await query(addlist, [name, password])
    console.log(insertdata.length)
    ctx.body = {
        code: 200,
        data: insertdata
    }
}

//删除
module.exports.del = async ctx => {
    const { id } = ctx.query;
    const dellist = 'delete from userlist where id=?'
    const deldata = await query(dellist, [id]);
    ctx.body = {
        code: 200,
        data: deldata
    }
}

//更改
module.exports.change = async ctx => {
    const { name, password, id } = ctx.request.body;
    console.log(ctx.request.body);
    const changelist = 'update userlist set name = ?,password=? where id = ?'
    const changedata = await query(changelist, [name, password, id]);
    ctx.body = {
        code: 200,
        data: changedata
    }
}