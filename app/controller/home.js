const Controller = require('egg').Controller;
class HomeController extends Controller {
    async index() {
        const {
            ctx
        } = this;
        await ctx.render('view/index/index.njk');
    }
    async detail() {
        const {
            ctx
        } = this;
        await ctx.render('view/home/home.njk');
    }
}

module.exports = HomeController;
