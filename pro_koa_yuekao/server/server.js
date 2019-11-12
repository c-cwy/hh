const Koa = require('koa')
const app = new Koa()

const Router = require('koa-router');
const router = new Router();

const bodyParser = require('koa-bodyparser')
const { check, del, add } = require('./routes/users');

const path = require('path');
const koaStatic = require('koa-static');
const staticPath = koaStatic(path.join(process.cwd(), 'public'))
app.use(staticPath)

app.use(bodyParser())
app.use(router.routes()).use(router.allowedMethods());

router.get('/list/check', check);
router.get('/list/del', del);
router.get('/list/add', add);

app.listen(3001, function() {
    console.log('服务启动成功');
})