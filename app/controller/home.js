const Controller = require('egg').Controller
class HomeController extends Controller {
    async index() {
        const {
            ctx
        } = this
        let conf = await ctx.curl('127.0.0.1:9000/manifest.json', {
            dataType: "json"
        });

        conf = conf.data
        console.log(ctx.config, '导出数据')
        await ctx.render('index.njk', {
            isDev: process.env.NODE_ENV === 'development',
            conf
        })
    }
}

module.exports = HomeController;