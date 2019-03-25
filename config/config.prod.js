// const path = require('path');
module.exports = app => {
    const config = {};
    config.configuration = {
        host: 'origin'
    };
    // 允许请求的方式
    config.cors = {
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    };
    return config;
};
