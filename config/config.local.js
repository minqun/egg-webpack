
module.exports = app => {
    const config = {};
    config.configuration = {
        host: '127.0.0.0'

    };
    // 允许请求的方式
    config.webpack = {
        port: 9000,
        webpackConfigList: [require('../webpack.config')]
    };
    return config;
};