import './index.scss';
import $ from 'jquery';
const SOURCE = window.WEB_SOURCE || {};
/** 开发环境 监听.njk 文件 */
const tpl = SOURCE.isDev ? require('./index.njk') : undefined;
/** 开发环境 监听.njk 文件 */
$('#box').on('click', function() {
    $(this).html('1234');
});
