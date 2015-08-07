/**
 * seajs配置
 *
 * @author jun.yj
 * @since 2015/5/17
 */

seajs.config({

    base: '//www.molayu.com/futures/',

    // 预加载的模块
    preload: [
        'lang/data-store',
        'assets/js/global/pre-mods'
    ],

    alias: {
        // lib
        '$'		 : 'assets/lib/jquery/1.11.2/jquery',
        '_'		 : 'assets/lib/underscore/1.8.2/underscore',
        'moment' : 'assets/lib/moment/2.10.3/moment',
        'json'	 : 'assets/lib/json/1.0/json',

        // lang
        'modLoader'	: 'lang/mod-loader',
        'dataStore' : 'lang/data-store',

        // util

        // ui
        'ui/msgbox' : 'ui/msgbox/1.0/main'

        // extra
    },

    paths: {
        'lang'	: 'assets/js/lang',
        'util'  : 'assets/js/util',
        'ui'    : 'assets/js/ui',
        'extra' : 'assets/js/extra',
        'mod'   : 'assets/js/biz/mod',
        'page'	: 'assets/js/biz/page',
        'site'  : 'assets/js/biz/site'
    },

    charset: 'UTF-8'
});
