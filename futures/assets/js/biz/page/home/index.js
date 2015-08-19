/**
 *
 * @author jun.yj
 * @since 15/8/7
 */

define(function (require, exports, module) {
    'use strict';

    var $ = require('$');

    var $d = $('#doc'),
        $m = $d.find('section.page-main');

    var $p = $('div.mod-carousel'),
        $ul = $p.children('ul');

    var $li = $ul.find('li:eq(0)'),
        $dot = $p.find('span.dot:eq(0)');

    return {
        init: function(){
            alert('index');
            this.wait();
            this.loadImage();
        },

        wait: function(){

            var self = this;

            $ul.on('swipeleft', function( evt ){

                var $next = $li.next();

                if ( $next[0] ) {

                    $next.css({left: 0});

                    $li = $next;

                    self.setCurrDot( $dot, $dot = $dot.next() );
                }

            }).on('swiperight', function( evt ){

                var $prev = $li.prev();

                if ( $prev[0] ) {

                    $li.css({left: '100%'});

                    $li = $prev;

                    self.setCurrDot( $dot, $dot = $dot.prev() );
                }
            });

            $m.find('div.mod-tab-switcher').on('tap', 'span', function( evt ){

                $(this).siblings('.curr').removeClass('curr');

                $(this).addClass('curr');
            });
        },

        loadImage: function(){

            $p.find('img[data-src]').each(function(){

                var img = $(this);

                img.attr('src', img.data('src'));
            })
        },

        setCurrDot: function( $sibling, $curr ){

            $sibling.removeClass('curr');

            $curr.addClass('curr');
        }
    };
});
