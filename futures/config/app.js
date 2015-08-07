/**
 * seajs配置
 *
 * @author jun.yj
 * @since 2015/5/17
 */

seajs.config({

    base: '//style-yzn.oss-cn-hangzhou.aliyuncs.com/',

    // 预加载的模块
    preload: [
        'lang/data-store',
        'assets/js/global/pre-mods'
    ],

    alias: {
        // lib
        'jquery' 	 : 'assets/libs/jquery/1.11.2/jquery',
        '$'		 	 : 'assets/libs/jquery/1.11.2/jquery',
        'underscore' : 'assets/libs/underscore/1.8.2/underscore',
        '_'		 	 : 'assets/libs/underscore/1.8.2/underscore',
        'moment'	 : 'assets/libs/moment/2.10.3/moment',
        'json'		 : 'assets/libs/json/1.0/json',

        // lang
        'modLoader'	: 'lang/mod-loader',
        'dataStore' : 'lang/data-store',

        // util
        'util/validator' : 'util/validator/1.0.0/main',

        // ui
        'ui/address'  	  : 'ui/address/1.0/main',
        'ui/datepicker'   : 'ui/datepicker/1.0/main',
        'ui/dialog'  	  : 'ui/dialog/1.0/main',
        'ui/fileuploader' : 'ui/fileuploader/5.42.3/main',
        'ui/msgbox'  	  : 'ui/msgbox/1.0/main',
        'ui/richeditor'   : 'ui/richeditor/1.0.0/main',
        'ui/school' 	  : 'ui/school/1.0/main',
        'ui/sidebar'	  : 'ui/sidebar/1.0/main',

        // extra
        'extra/baidumap' : 'extra/baidumap/1.0/main',
        'extra/share'    : 'extra/share/1.0/main'
    },

    paths: {
        'lang'	: 'assets/js/lang',
        'util'  : 'assets/js/util',
        'ui'    : 'assets/js/ui',
        'extra' : 'assets/js/extra',
        'mod'   : 'assets/js/biz/module',
        'page'	: 'assets/js/biz/page',
        'site'  : 'assets/js/biz/site'
    },

    charset: 'UTF-8'
});
