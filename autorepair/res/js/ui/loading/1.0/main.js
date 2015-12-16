/**
 * @author jun.yj
 * @email god.yangjun@gmail.com
 * @date 15/9/19
 */

define(function (require, exports, module) {
    'use strict';

    var $ = require('$'),
        $d = $('#doc');

    var TPL = (
        '<div class="loading hide">' +
          '<div class="content">' +
            '<img src="http://www.autorepair.com/res/img/loading/01.gif"/>' +
          '</div>' +
        '</div>'
    );

    var counter = 0,
        $el = null;

    var render = function(){

        if ( !$el ) {

            var $float = $d.find('div.float');
            if ( !$float[0] ) {
                $float = $(
                    '<div class="float"><div class="content"></div></div>'
                ).appendTo( $d );
            }

            $el = $( TPL ).appendTo( $float.children('div.content') );
        }
    };

    render();

    return {
        show: function( force ){

            if ( force === true ) {
                counter = -1;
            }
            else {
                counter > -1 && counter++;
            }

            $el.removeClass('hide');

            return this;
        },

        hide: function( force ){

            if ( force === true ) {
                counter = 0;
            }
            else {
                counter > 0 && counter--;
            }

            if ( counter === 0 ) {
                $el.addClass('hide');
            }

            return this;
        }
    }
});
