import './index.scss';
import $ from 'jquery';
import base from '@/common/js/base.js';
require('' + base.tpl('./index.njk'));
const SOURCE = window.WEB_SOURCE || {};

console.log(SOURCE, '资源目录333');
/** 开发环境 监听.njk 文件 */
$('#box').on('click', function() {
    $(this).html(SOURCE.configuration.host);
});
