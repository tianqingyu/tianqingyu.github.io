/**
 * @author jun.yj
 * @email god.yangjun@gmail.com
 * @date 15/12/14
 */

define(function (require, exports, module) {
    'use strict';

    var $ = require('$'),
        _ = require('_'),
        art = require('art'),
        log = require('log'),
        net = require('net');

    return {
        init: function(){

            net.ajax({
                url: 'index.art',
                type: 'GET',
                dataType: 'text',
                success: function( rs ){
                    log(rs);
                },
                error: function(){
                    log(11);
                }
            });
        }
    }
});
