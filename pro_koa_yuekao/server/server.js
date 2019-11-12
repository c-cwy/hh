const Koa = require('koa')
const app = new Koa()

const Router = require('koa-router');
const router = new Router();

const bodyParser = require('koa-bodyparser')
const { check, add, del, change } = require('./routes/users');

const path = require('path');
const koaStatic = require('koa-static');
const staticPath = koaStatic(path.join(process.cwd(), 'public'))
app.use(staticPath)

app.use(bodyParser())
app.use(router.routes()).use(router.allowedMethods());

router.get('/userList/check', check)
router.get('/userList/add', add)
router.get('/userList/del', del)
router.post('/userList/change', change)

app.listen(3001, function() {
    console.log('服务启动成功');
})