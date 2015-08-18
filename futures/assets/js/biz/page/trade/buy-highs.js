/**
 *
 * @author jun.yj
 * @since 15/8/7
 */

define(function(require, exports, module){
    'use strict';

    var $ = require('$');

    var $d = $('#doc'),
        $pbh = $d.find('div.page-buy-highs');

    return {
        init: function(){
            this.wait();
        },

        wait: function(){

            var $info = $d.find('div.float div.msgbox-info'),
                $confirm = $d.find('div.float div.msgbox-confirm');

            $d.find('div.page-buy-highs div.action a.button').on('tap', function( evt ){

                evt.preventDefault();

                $confirm.removeClass('hide');
            });

            $confirm.find('a.ok').on('tap', function( evt ){

                evt.preventDefault();

                $confirm.addClass('hide');

                $info.removeClass('hide');
            });

            $confirm.find('a.no').on('tap', function( evt ){

                evt.preventDefault();

                $confirm.addClass('hide');
            });

            $info.find('a.ok').on('tap', function( evt ){

                evt.preventDefault();

                $info.addClass('hide');
            });

            $pbh.find('span.more-lot').on('tap', function( evt ){

                evt.preventDefault();

                $d.find('div.options-more-lot').removeClass('hide');
            });

            $pbh.find('span.more-trigger').on('tap', function( evt ){

                evt.preventDefault();

                $d.find('div.options-more-trigger').removeClass('hide');
            });

            // overlay hide
            $d.find('div.msgbox-options').on('tap', function( evt ){

                evt.preventDefault();

                $(this).addClass('hide');
            });
        }
    };
});
