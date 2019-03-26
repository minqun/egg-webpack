module.exports = (app) => {
    const { router, controller } = app;
    router.get('/index', controller.home.index);
    router.get('/', controller.home.index);
    router.get('/home', controller.home.detail);
};
