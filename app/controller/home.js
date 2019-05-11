'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const {
            ctx,
            config
        } = this;
        await ctx.render('view/index/index.njk');
    }
    async detail() {
        const {
            ctx,
            config
        } = this;
        await ctx.render('view/home/home.njk');
    }
    async about() {
        const {
            ctx,
            config
        } = this;
        await ctx.render('view/about/about.njk');
    }
}

module.exports = HomeController;
