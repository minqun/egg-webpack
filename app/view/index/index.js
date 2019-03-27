import './index.scss';
import $ from 'jquery';
import { base } from '@/common/js/base.js';

const SOURCE = window.WEB_SOURCE || {};
console.log(SOURCE, 'source');

/** 开发环境 监听.njk 文件 */
const tpl = SOURCE.isDev ? require('./index.njk') : undefined;
/** 开发环境 监听.njk 文件 */
$('#box').on('click', function() {
    $(this).html(SOURCE.configuration.host);
});
