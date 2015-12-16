/**
 * @author jun.yj
 * @email god.yangjun@gmail.com
 * @date 15/12/14
 */

seajs.config({

    base: 'file:///Users/molayu/Work/mygit/github/autorepair/res/js',

    // 别名（缩写）
    alias: {
        // lang
        '$'	        : 'lang/jquery',
        '_'         : 'lang/lodash',
        'art'       : 'lang/art',
        'log'       : 'lang/log',
        'net'       : 'lang/net',
        'class'     : 'lang/class',
        'delayer'   : 'lang/delayer',
        'observer'  : 'lang/observer',
        'modLoader'	: 'lang/mod-loader',
        'dataStore' : 'lang/data-store',

        // ui
        'ui/msgbox'  : 'ui/msgbox/1.0/main',
        'ui/loading' : 'ui/loading/1.0/main',
        'ui/menu'    : 'ui/menu/1.0/main',
        'ui/address' : 'ui/address/1.0/main',

        // data
        'data/province'	: 'data/address/1.0/province',
        'data/city'		: 'data/address/1.0/city'
    },

    charset: 'UTF-8'
});
