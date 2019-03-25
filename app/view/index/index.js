import './index.scss';
import $ from 'jquery';
const SOURCE = window.WEB_SOURCE || {};
const tpl = SOURCE.isDev ? require('./index.njk') : undefined;
console.log('资源配置数据', SOURCE)
$('#box').on('click', function() {
    $(this).html(SOURCE.configuration.host);
});
