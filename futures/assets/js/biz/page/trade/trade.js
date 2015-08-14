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

            var that = this;

            // 买涨
            $d.find('div.page-trade a.button-buy-highs').on('tap', function( evt ){

                evt.preventDefault();

                $d.find('div.page-trade').hide();

                $d.find('div.page-buy-highs').show();
            });

            // 买跌
            $d.find('div.page-trade a.button-buy-lows').on('tap', function( evt ){

                evt.preventDefault();

                $d.find('div.page-trade').hide();

                $d.find('div.page-buy-lows').show();
            });

            $d.find('div.page-buy-highs a.go-back').on('tap', function( evt ){

                evt.preventDefault();

                $d.find('div.page-trade').show();

                $d.find('div.page-buy-highs').hide();
            });
            $d.find('div.page-buy-highs div.action a.button').on('tap', function( evt ){

                evt.preventDefault();

                $d.find('div.page-trade').show();

                $d.find('div.page-buy-highs').hide();
            });

            $d.find('div.page-buy-lows a.go-back').on('tap', function( evt ){

                evt.preventDefault();

                $d.find('div.page-trade').show();

                $d.find('div.page-buy-lows').hide();
            });
            $d.find('div.page-buy-lows div.action a.button').on('tap', function( evt ){

                evt.preventDefault();

                $d.find('div.page-trade').show();

                $d.find('div.page-buy-lows').hide();
            });
        }
    };
});
