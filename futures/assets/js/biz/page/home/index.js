/**
 *
 * @author jun.yj
 * @since 15/8/7
 */

define(function (require, exports, module) {
    'use strict';

    var $ = require('$');

    var $p = $('div.mod-carousel'),
        $ul = $p.children('ul');

    var $li = $ul.find('li:eq(0)'),
        $dot = $p.find('span.dot:eq(0)');

    $ul.on('swipeleft', function( evt ){

        var $next = $li.next();

        if ( $next[0] ) {

            $next.css({left: 0});

            $li = $next;

            setCurrDot( $dot, $dot = $dot.next() );
        }

    }).on('swiperight', function( evt ){

        var $prev = $li.prev();

        if ( $prev[0] ) {

            $li.css({left: '100%'});

            $li = $prev;

            setCurrDot( $dot, $dot = $dot.prev() );
        }
    });

    function setCurrDot( $sibling, $curr ) {

        $sibling.removeClass('curr');

        $curr.addClass('curr');
    }
});
