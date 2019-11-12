const koa = require('koa');
var bodyParser = require('koa-bodyparser');
const app = new koa();
const router = require('koa-router')();

app.use(bodyParser());
app.use(router.routes())
app.use(router.allowedMethods());

app.listen(3000, () => {
    console.log('服务启动成功');
});