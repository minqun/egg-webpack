module.exports = app => {
    const config = {};
    config.configuration = {
        host: '127.0.0.0',
        version: '1.0.0'
    };
    config.development = {
        reloadPattern: ['**', '!../app/view/**/*']
    }; // 是否进行重载
    config.security = {
        csrf: {
            enable: false,
            ignoreJSON: true
        },
        domainWhiteList: ['http://127.0.0.1:9000']
    };
    // 允许请求的方式
    config.cors = {
        origin: '*',
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    };
    // 允许请求的方式
    config.webpack = {
        port: 9000,
        webpackConfigList: [require('../webpack.config')]
    };
    return config;
};
