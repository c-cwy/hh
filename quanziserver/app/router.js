'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.get('/register', controller.home.register);
    // router.post('/api/login', controller.login.login); //登录
    // router.post('/api/register', controller.home.register); //注册
};