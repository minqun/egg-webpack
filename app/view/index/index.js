import './index.scss';
import $ from 'jquery';
import base from '@/common/js/base.js';
require('' + base.tpl('./index.njk'));
const SOURCE = window.WEB_SOURCE || {};
if (module.hot) {
    console.log('Accepting the updated printMe module!', module.hot);
}
console.log(SOURCE, '资源目录');
/** 开发环境 监听.njk 文件 */
$('#box').on('click', function() {
    $(this).html(SOURCE.configuration.host);
});
