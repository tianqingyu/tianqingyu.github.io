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

    var urlUtil = require('util/url'),
        msgbox = require('ui/msgbox');

    var $d = $('#doc'),
        $m = $d.find('section.main-business-search');

    return {
        init: function(){
            this.wait();
        },

        wait: function(){

            var that = this;

            $('#do-query').on('tap', function(){

                var o = that.getParams();

                if ( that.check( o ) ) {
                    this.href += '?' + urlUtil.toQueryString( o );
                }
            });
        },

        check: function( o ){

            if ( o.name === '' ) {
                msgbox.alert('请输入商家名称');
                return false;
            }

            return true;
        },

        getParams: function(){
            return {
                mode: '1',
                name: $.trim( $m.find('input[name="name"]').val() )
            };
        }
    }
});
