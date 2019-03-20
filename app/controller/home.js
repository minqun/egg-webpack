const Controller = require('egg').Controller;
class HomeController extends Controller {
    async index() {
        const {
            ctx
        } = this;
        await ctx.render('view/index/index.njk');
    }
}

module.exports = HomeController;
