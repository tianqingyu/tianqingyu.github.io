/**
 * 使用 eval 做json字符串解析.
 * 如果json字符串是符合格式的，那么直接 JSON.parse
 *
 * @author jun.yj
 * @date 15/9/12
 * @deprecated
 */

define(function (require, exports, module) {
    'use strict';

    return {
        parse: function( txt ){
            return txt && eval( '(' + txt + ')' );
        },

        stringify: function( o ){
            return JSON.stringify( o );
        }
    };
});
