/**
 * @author jun.yj
 * @since 2015/8/6
 */

define(function (require, exports, module) {
    'use strict';

    var $ = require('$'),
        P = $('#doc');

    return {
        init: function(){
            this.wait();
        },

        wait: function(){

            var self = this;

            var el = P.find('div.pk-game');

            var li = el.find('li.highs'),
                pk = el.find('span.pk'),
                hp = el.find('li.highs span.percent'),
                lp = el.find('li.lows span.percent');

            var pc = 65;

            var locked = false;

            el.on('tap', function(){

                if ( locked ) {
                    return;
                }
                locked = true;

                var newPC = self.getPercent();

                if ( newPC > pc ) {
                    self.highs( li, pk, hp, lp, newPC );
                }
                else if ( newPC < pc ) {
                    self.lows( li, pk, hp, lp, newPC );
                }

                pc = newPC;
            });

            pk.on('transitionend', function(){
                locked = false;
                pk.removeClass('rotate360 rotate-360');
            });

            window.setTimeout(function(){
                self.highs( li, pk, hp, lp, pc );
            }, 500);
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
