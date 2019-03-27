import './home.scss';
import $ from 'jquery';
import '@/common/js/base.js';
const SOURCE = window.WEB_SOURCE || {};
const tpl = SOURCE.isDev ? require('./home.njk') : undefined;
console.log('刷新');
