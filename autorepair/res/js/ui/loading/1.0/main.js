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
        '<div class="overlay">' +
          '<div class="loading">' +
            '<div class="content">' +
              '<span></span>' +
            '</div>' +
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

            $el.show();

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
                $el.hide();
            }

            return this;
        }
    }
});
