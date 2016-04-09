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

    var urlUtil = require('util/url');

    var $d = $('#doc'),
        $m = $d.find('section.main-general-more-common');

    return {
        init: function(){
            this.wait();
        },

        wait: function(){

            var that = this;

            $('#do-query').on('tap', function(){

                var o = that.getParams();

                this.href += '?' + urlUtil.toQueryString( o );
            });
        },

        getParams: function(){
            return {
                mode: 1,
                s_art_nr: $m.find('input.s-art-nr').val()
            };
        }
    }
});