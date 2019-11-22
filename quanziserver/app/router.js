'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.post('/api/register', controller.login.register); //注册
    router.get('/api/login', controller.login.login); //登录
    router.post('/api/logout', controller.home.logout); //查询
    router.post('/api/exitpwd', controller.home.exitpwd) //修改密码
};