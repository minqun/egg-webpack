// const path = require('path');
module.exports = app => {
    const config = {};
    config.configuration = {
        host: 'origin',
        cdn: '这里填写cnd地址',
        version: '1.0.0'
    };
    // 允许请求的方式
    config.cors = {
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    };
    return config;
};
