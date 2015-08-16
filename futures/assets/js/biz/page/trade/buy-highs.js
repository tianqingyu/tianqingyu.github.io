/**
 *
 * @author jun.yj
 * @since 15/8/7
 */

define(function(require, exports, module){
    'use strict';

    var $ = require('$');

    var $d = $('#doc');

    return {
        init: function(){
            this.wait();
        },

        wait: function(){

            var $msgbox = $d.find('div.float div.mod-msgbox-info');

            $d.find('div.page-buy-highs div.action a.button').on('tap', function( evt ){

                evt.preventDefault();

                $msgbox.removeClass('hide');
            });

            $msgbox.find('a.ok').on('tap', function( evt ){

                evt.preventDefault();

                $msgbox.addClass('hide');
            });
        }
    };
});
