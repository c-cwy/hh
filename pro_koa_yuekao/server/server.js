const Koa = require('koa')
const app = new Koa()

const Router = require('koa-router');
const router = new Router();

const bodyParser = require('koa-bodyparser')
const { check, del, add, exit } = require('./routes/users');

const path = require('path');
const koaStatic = require('koa-static');
const staticPath = koaStatic(path.join(process.cwd(), 'public'))
app.use(staticPath)

app.use(bodyParser())
app.use(router.routes()).use(router.allowedMethods());

router.get('/list/check', check); //查询
router.get('/list/del', del); //删除
router.post('/list/add', add); //添加
router.post('/list/exit', exit); //修改

app.listen(3001, function() {
    console.log('服务启动成功');
})