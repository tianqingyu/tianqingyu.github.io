/**
 * @author jun.yj
 * @email god.yangjun@gmail.com
 * @date 15/12/14
 */

seajs.config({

    base: 'http://www.autorepair.com/res/js',

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

// 加载子模板
template.helper('view', function( url, data ){

    var rs;

    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'text',
        async: false,
        cache: false,
        success: function( txt ){
            rs = template.compile( txt )( data || {} );;
        }
    });

    return rs;
});
