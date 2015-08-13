/**
 *
 * @author jun.yj
 * @since 15/8/7
 */

define(function(require, exports, module){
    'use strict';

    var $ = require('$'),
        P = $('#doc');

    return {
        init: function(){
            this.wait();
        },

        wait: function(){

            var that = this;

            // 买涨
            P.find('div.page-trade a.button-buy-highs').on('tap', function(){

                P.find('div.page-trade').hide();

                P.find('div.page-buy-highs').show();
            });

            // 买跌
            P.find('div.page-trade a.button-buy-lows').on('tap', function(){

                P.find('div.page-trade').hide();

                P.find('div.page-buy-lows').show();
            });

            P.find('div.page-buy-highs a.go-back').on('tap', function(){

                P.find('div.page-trade').show();

                P.find('div.page-buy-highs').hide();
            });
            P.find('div.page-buy-highs div.action a.button').on('tap', function(){

                P.find('div.page-trade').show();

                P.find('div.page-buy-highs').hide();
            });

            P.find('div.page-buy-lows a.go-back').on('tap', function(){

                P.find('div.page-trade').show();

                P.find('div.page-buy-lows').hide();
            });
            P.find('div.page-buy-lows div.action a.button').on('tap', function(){

                P.find('div.page-trade').show();

                P.find('div.page-buy-lows').hide();
            });
        }
    };
});
