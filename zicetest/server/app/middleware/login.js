const jwt = require('jsonwebtoken');
module.exports = () => {
    let writePath = [
        '/api/login',
    ]
    return async(ctx, next) => {
        let token = ctx.cookies.get('token');
        if (writePath.includes(ctx.path)) {
            await next();
        } else {
            try {
                let info = jwt.verify(token, '123');
                ctx.info = info;
                await next()
            } catch (e) {
                ctx.body = {
                    code: 3,
                    msg: e.message
                }
            }
        }
    }
}