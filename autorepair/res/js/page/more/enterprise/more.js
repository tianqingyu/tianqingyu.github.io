/**
 * 更多页面.
 *
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

    var auth = require('mod/auth'),
        strings = require('util/strings');

    var $d = $('#doc'),
        $m = $d.find('section.main-enterprise-more');

    return {
        init: function(){
            this.render();
        },

        render: function(){

            var menus = auth.getMenus();

            var tpl = (
                '<li>' +
                  '<a href="${url}">' +
                    '<div class="left">' +
                      '<img src="${icon}"/>' +
                      '<span>${name}</span>' +
                    '</div>' +
                    '<div class="iconfont right text-s20">&#xe603;</div>' +
                  '</a>' +
                '</li>'
            );

            var html = '';

            _.each(menus, function( o ){
                html += strings.format( tpl, o );
            });

            $m.find('ul.list-nav').html( html );
        }
    }
});
