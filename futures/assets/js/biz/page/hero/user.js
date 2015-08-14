/**
 *
 * @author jun.yj
 * @since 15/8/7
 */

define(function (require, exports, module) {
    'use strict';

    var $ = require('$');

    var $d = $('#doc'),
        $h = $d.find('header.page-header');

    return {
        init: function(){
            this.wait();
        },

        wait: function(){

            var tabCalendar = $h.find('div.mod-tab-calendar');

            tabCalendar.on('tap', 'span', function( evt ){

                tabCalendar.find('span.curr').removeClass('curr');

                $(this).addClass('curr');
            });
        }
    };
});
