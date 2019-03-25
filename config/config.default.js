const path = require('path');
module.exports = app => {
    const config = {};
    config.keys = '123456789';
  
    config.middleware = ['loadWare'];
    config.loadWare = {
        listen: '127.0.0.1:9000',
        page: true
    };
    // 日志切割
    config.logrotator = {
        filesRotateByHour: [
            path.join(app.root, 'logs', app.name, 'debug.log'),
            path.join(app.root, 'logs', app.name, 'egg-web.log'),
            path.join(app.root, 'logs', app.name, 'info.log'),
            path.join(app.root, 'logs', app.name, 'fail.log'),
        ],
    };
    config.view = {
        mapping: {
            '.njk': 'nunjucks',
        },
        root: [
            path.join(app.baseDir, '/app/'),
        ].join(',')
    };
    return config;
};
