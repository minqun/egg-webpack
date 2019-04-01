export default {
    tpl(url) {
        let SOURCE = window.WEB_SOURCE || {};
        let tpl;
        if (SOURCE.isDev) {
            tpl = url;
        } else {
            tpl = '@/common/js/njk.js';
        }
        return tpl;
    }
};
