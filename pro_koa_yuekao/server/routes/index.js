const router = require('koa-router')();
const { query } = require('../controller/index');



router.get('/json', async(ctx, next) => {
    ctx.body = {
        title: 'koa2 json'
    }
})

module.exports = router