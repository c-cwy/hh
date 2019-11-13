const koa = require('koa');
var bodyParser = require('koa-bodyparser');
const app = new koa();
const router = require('koa-router')();

const { check, add, del, exit } = require('./routes/index');
app.use(bodyParser());
app.use(router.routes())
app.use(router.allowedMethods());

router.get('/api/check', check); //查询
router.post('/api/add', add); //添加
router.get('/api/del', del); //删除
router.post('/api/exit', exit); //修改

app.listen(3000, () => {
    console.log('服务启动成功');
});