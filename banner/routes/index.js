const { query } = require('../config/index');
//全表查询
module.exports.check = async ctx => {
    let sql = 'select * from banner'
    let data = await query(sql)
    if (data.msg === 'error') {
        ctx.body = {
            code: 400,
            msg: '查找失败'
        }
    } else {
        ctx.body = {
            code: 200,
            data: data.data
        }
    }
}

//添加
module.exports.add = async ctx => {
    let { idCard, remark, type, sort, timeD } = ctx.request.body;
    if (idCard && remark && type && timeD) {
        let cardSql = 'select * from banner where idCard=?'
        let cardData = await query(cardSql, [idCard]);
        if (cardData.data.length) {
            ctx.body = {
                code: 3,
                msg: '已存在'
            }
        } else {
            try {
                let sql = 'insert into banner(idCard, remark, type, sort, timeD) values (?,?,?,?,?)';
                let data = await query(sql, [idCard, remark, type, sort, timeD]);
                ctx.body = {
                    code: 200,
                    msg: '添加成功'
                }
            } catch (e) {
                ctx.body = {
                    code: 400,
                    msg: '添加失败'
                }
            }
        }
    } else {
        ctx.body = {
            code: 0,
            mas: '缺失参数'
        }
    }

}

//删除
module.exports.del = async ctx => {
    let { id } = ctx.query;
    if (id || id === 0) {
        try {
            let sql = 'delete from banner where id=?'
            let data = await query(sql, [id]);
            ctx.body = {
                code: 200,
                mas: '删除成功'
            }
        } catch (e) {
            ctx.body = {
                code: 0,
                mas: '删除失败'
            }
        }
    } else {
        ctx.body = {
            code: 0,
            mas: '缺失参数'
        }
    }
}

//修改
module.exports.exit = async ctx => {
    let { idCard, remark, type, sort, timeD, id } = ctx.request.body;
    if (idCard && remark && type && timeD) {
        try {
            let sql = 'update banner set idCard=?,remark=?,type=?,sort=?,timeD=? where id=?';
            let data = await query(sql, [idCard, remark, type, sort, timeD, id]);
            ctx.body = {
                code: 200,
                mas: '更改成功'
            }
        } catch (e) {
            ctx.body = {
                code: 400,
                mas: '更改失败'
            }
        }
    } else {
        ctx.body = {
            code: 0,
            mas: '缺失参数'
        }
    }
}