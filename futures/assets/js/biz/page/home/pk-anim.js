/**
 *
 * @author jun.yj
 * @since 2015/8/6
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

            var el = P.find('div.pk-game');

            var li = el.find('div.bar'),
                pk = el.find('span.pk'),
                hp = el.find('span.highs span.percent'),
                lp = el.find('span.lows span.percent');

            var pc = 65;

            that.locked = false;

            el.on('tap', function(){

                if ( that.locked ) {
                    return;
                }
                that.locked = true;

                var newPC = that.getPercent();

                if ( newPC > pc ) {
                    that.highs( li, pk, hp, lp, newPC );
                }
                else if ( newPC < pc ) {
                    that.lows( li, pk, hp, lp, newPC );
                }

                pc = newPC;

                that.waitUnlock( pk );
            });

            pk.on('transitionend webkitTransitionEnd', function(){
                window.clearTimeout(that.timerId);
                that.unlock( pk );
            });

            // demo
            window.setTimeout(function(){
                that.highs( li, pk, hp, lp, pc );
            }, 500);
        },

        waitUnlock: function( pk ){

            var that = this;

            that.timerId = window.setTimeout(function(){
                that.unlock( pk );
            }, 600);
        },

        unlock: function( pk ){
            this.locked = false;
            pk.removeClass('rotate360 rotate-360');
        },

        // 15% ~ 85%
        getPercent: function(){
            var min = 15, max = 85;
            return ((max - min) * Math.random() | 0) + min;
        },

        highs: function( li, pk, hp, lp, pc ){

            li.css('width', pc + '%');
            pk.addClass('rotate360');

            hp.text( pc + '%' );
            lp.text( (100-pc) + '%' );
        },

        lows: function( li, pk, hp, lp, pc ){

            li.css('width', pc + '%');
            pk.addClass('rotate-360');

            hp.text( pc + '%');
            lp.text( (100-pc) + '%');
        }
    };
});
