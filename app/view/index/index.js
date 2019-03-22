import './index.scss';
import $ from 'jquery';
const SOURCE = window.WEB_SOURCE || {};
const tpl = SOURCE.isDev ? require('./index.njk') : undefined;

$('#box').on('click', function() {
    $(this).html('1234');
});
