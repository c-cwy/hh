const { query } = require('../controller/index');

//查询
module.exports.check = async ctx => {
    let checkList = 'select * from list';
    let dataList = await query(checkList)
    if (dataList.msg === 'success') {
        ctx.body = {
            code: 200,
            data: dataList
        }
    } else {
        ctx.body = {
            code: 404,
            msg: '查找失败'
        }
    }
}

//删除
module.exports.del = async ctx => {
    let { id } = ctx.query;
    if (id || id === 0) {
        try {
            let sql = 'delete from list where id=?'
            let data = await query(sql, [id]);
            ctx.body = {
                code: 200,
                msg: '成功'
            }
        } catch (e) {
            ctx.body = {
                code: 404,
                e
            }
        }

    } else {
        ctx.body = {
            code: 404,
            msg: '缺失参数'
        }
    }

}

//添加
module.exports.add = async ctx => {
    let { tit, author, idCard } = ctx.request.body;
    if (idCard) {
        let idCardsql = 'select * from list where idCard=?'
        let dataCard = await query(idCardsql, [idCard]);
        if (dataCard.data.length) {
            //已存在
            ctx.body = {
                code: 404,
                msg: '已存在'
            }
        } else {
            try {
                let sql = 'insert into list (tit,author,idCard) values (?,?,?)';
                let data = await query(sql, [tit, author, idCard]);
                console.log(data);
                ctx.body = {
                    code: 200,
                    msg: '添加成功'
                }
            } catch (e) {
                ctx.body = {
                    code: 404,
                    data: e.msg
                }
            }
        }
    } else {
        ctx.body = {
            code: 3,
            msg: '参数缺失'
        }
    }

}

//修改
module.exports.exit = async ctx => {
    let { tit, author, idCard, id } = ctx.request.body;

    if (idCard && tit && author) {

        try {
            let sql = 'update list set tit=?,author=?,idCard=? where id=?';
            let data = await query(sql, [tit, author, idCard, id]);
            ctx.body = {
                code: 200,
                msg: '添加成功'
            }
        } catch (e) {
            ctx.body = {
                code: 404,
                msg: '失败'
            }
        }
    } else {
        ctx.body = {
            code: 404,
            msg: '缺失参数'
        }
    }

}