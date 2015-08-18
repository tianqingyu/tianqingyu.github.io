/**
 *
 * @author jun.yj
 * @since 15/8/7
 */

define(function(require, exports, module){
    'use strict';

    var $ = require('$');

    var $d = $('#doc'),
        $pt = $d.find('div.page-trade'),
        $pbh = $d.find('div.page-buy-highs'),
        $pbl = $d.find('div.page-buy-lows');

    return {
        init: function(){
            this.wait();
        },

        wait: function(){

            var that = this;

            // 买涨
            $pt.find('a.button-buy-highs').on('tap', function( evt ){

                evt.preventDefault();

                $pt.hide();

                $pbh.show();
            });

            // 买跌
            $pt.find('a.button-buy-lows').on('tap', function( evt ){

                evt.preventDefault();

                $pt.hide();

                $pbl.show();
            });

            // 股票详情
            $pt.find('article.make div.stock-detail > ul:first').on('tap', function( evt ){

                evt.preventDefault();

                $d.find('div.msgbox-slide-options').removeClass('hide');

                setTimeout(function(){
                    $d.find('div.msgbox-slide-options > .content').removeClass('slide-out');
                    $d.find('div.msgbox-slide-options > .content').addClass('slide-in');
                }, 16);
            });

            // 返回
            $pbh.find('a.go-back').on('tap', function( evt ){

                evt.preventDefault();

                $pt.show();

                $pbh.hide();
            });
            $pbl.find('a.go-back').on('tap', function( evt ){

                evt.preventDefault();

                $pt.show();

                $pbl.hide();
            });

            // overlay hide
            $d.find('div.msgbox-slide-options').on('tap', function( evt ){

                evt.preventDefault();

                $d.find('div.msgbox-slide-options > .content').removeClass('slide-in');
                $d.find('div.msgbox-slide-options > .content').addClass('slide-out');

                setTimeout(function(){
                    $d.find('div.msgbox-slide-options').addClass('hide');
                }, 300);
            });
        }
    };
});
