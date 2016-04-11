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
        $m = $d.find('section.main-more-search');

    return {
        init: function(){
            this.wait();
        },

        wait: function(){

            var that = this;

            $('#do-query').on('tap', function( evt ){

                evt.preventDefault();

                var o = that.getParams();

                if ( that.check( o ) ) {

                    window.location.href = this.href + '?' + urlUtil.toQueryString( o );
                }
            });
        },

        check: function( o ){

            if ( o.vinInfo === '' || o.vinInfo.length !== 17 ) {
                msgbox.alert('请输入17位底盘号');
                return false;
            }

            return true;
        },

        getParams: function(){
            return {
                vinInfo: $.trim( $m.find('input[name="vinInfo"]').val() )
            };
        }
    }
});
