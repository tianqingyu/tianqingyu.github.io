/**
 * @author jun.yj
 * @email god.yangjun@gmail.com
 * @date 15/12/14
 */

define(function (require, exports, module) {
    'use strict';

    var $ = require('$'),
        _ = require('_'),
        log = require('log'),
        net = require('net');

    return {
        init: function(){
            this.test();
        },

        test: function(){

            net.post({
                url: 'selArea.do',
                data: {
                    areaname: '西湖区'
                },
                success: function( rs ){
                    log( rs );
                }
            });
        }
    }
});
