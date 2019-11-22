'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.post('/api/login', controller.user.login); //登录
    router.get('/api/power', controller.power.menu); //请求权限
};