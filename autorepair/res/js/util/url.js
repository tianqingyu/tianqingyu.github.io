/**
 * 浏览器检测.
 *
 * @author jun.yj
 * @email god.yangjun@gmail.com
 * @date 15/12/7
 */

define(function (require, exports, module) {
    'use strict';

    var _ = require('_');

    var reg = /([^=]+)=(.+)/;

    return {
        getParams: function(){

            var rs = {};

            var search = location.search;

            if ( search ) {
                search = search.substring(1);

                var arr = search.split('&');

                _.each(arr, function( s ){

                    var m = s.match( reg );

                    if ( m ) {
                        rs[ m[1] ] = decodeURIComponent( m[2] );
                    }
                });
            }
            return rs;
        },

        toQueryString: function( o ){
            var rs = '';
            _.each(o, function( v, n ){
                v = v == null ? '' : v;
                rs += n + '=' + v + '&';
            });
            return rs.substring(0, rs.length-1);
        }
    };
});
