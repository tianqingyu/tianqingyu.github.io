/**
 *
 * @author jun.yj
 * @since 15/8/7
 */

define(function (require, exports, module) {
    'use strict';

    var $ = require('$');

    var $d = $('#doc'),
        $h = $d.find('header.page-header'),
        $m = $d.find('section.page-main');

    return {
        init: function(){
            this.wait();
        },

        wait: function(){

            var tabSwitcher = $h.find('div.mod-tab-switcher');

            tabSwitcher.on('tap', 'span', function( evt ){

                tabSwitcher.find('span.curr').removeClass('curr');

                $(this).addClass('curr');
            });

            var tabSample = $m.find('ul.mod-tab-sample');

            tabSample.on('tap', 'span', function( evt ){

                tabSample.find('span.curr').removeClass('curr');

                $(this).addClass('curr');
            });
        }
    };
});
