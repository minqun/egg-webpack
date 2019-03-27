/*
 * @Description: 配置生成page路径，开发环境为 入口设置监听 IP:端口 listen
 * @params option.listen
 * @params option.page （开启页面入口)
 * @return ctx.isDev && ctx.source (页面资源及环境)
 * @Date: 2019-03-20
 */
module.exports = options => {
    return async function loadWare(ctx, next) {
        let conf = {};
        let pageConfiguration = {};
        if (options && options.page) {
            if (process.env.NODE_ENV === 'development') {
                conf = await ctx.curl(`${options.listen}/manifest.json`, {
                    dataType: 'json'
                });
                for (let d in conf.data) {
                    conf.data[d] = `//${options.listen}${conf.data[d]}`;
                }
                pageConfiguration = conf.data;
            } else {
                conf = require('../public/static/manifest.json');
                pageConfiguration = conf;
            }
        }
        console.log('路由地址:请求', ctx.request.url);
        ctx.isDev = process.env.NODE_ENV === 'development';
        ctx.sources = pageConfiguration;
        let name = options && options.page ? ctx.request.url.slice(1).split('/')[0] : '';
        ctx.styleCSS = name ? name.indexOf('.') > 0 ? `${name.split('.')[0]}.css` : `${name}.css` : 'index.css';
        ctx.sourcesJSON = JSON.stringify({
            'isDev': process.env.NODE_ENV === 'development',
            'sources': pageConfiguration,
            'configuration': ctx.app.config.configuration
        });
        await next();
    };
};
