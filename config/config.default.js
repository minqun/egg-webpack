const path = require('path');
module.exports = app => {
    const config = {}
    config.keys = 'your-secret-key'
    config.development = {
        reloadPattern: ['**', '../app/view/**/*'], //是否进行重载
    }
    config.view = {
        mapping: {
            '.njk': 'nunjucks',
        },
        root: [
            path.join(app.baseDir, '/app/view'),
        ].join(',')
    };
    return config
}