/**
 *
 * @author jun.yj
 * @since 15/8/7
 */

define(function(require, exports, module){
    'use strict';

    var $ = require('$');

    var $d = $('#doc'),
        $h = $d.find('header.page-header'),
        $m = $d.find('section.page-main');

    return {
        init: function(){
            this.wait();
        },

        wait: function(){

            var $list = $m.find('div.dropdown-list');

            $h.find('span.dropdown').on('tap', function( evt ){

                evt.preventDefault();

                if ( $list.data('isShow') ) {

                    $list.data('isShow', false);
                    $list.hide();
                }
                else {
                    $list.data('isShow', true);
                    $list.show();
                }
            });

            $list.on('tap', function( evt ){

                evt.preventDefault();

                $list.data('isShow', false);
                $list.hide();
            });

            $list.on('tap', 'li', function( evt ){

                evt.preventDefault();
            });
        }
    };
});
