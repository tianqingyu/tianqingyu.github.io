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

            var $list = $('#content').find('div.dropdown-list');

            $('#header').find('span.dropdown').on('tap', function(){

                if ( $list.data('isShow') ) {
                    $list.data('isShow', false);

                    $list.hide();
                }
                else {
                    $list.data('isShow', true);

                    $list.show();
                }
            });

            $list.on('tap', function(){

                $list.data('isShow', false);

                $list.hide();
            });

            $list.on('tap', 'li', function( evt ){
                alert(1);
            });
        }
    };
});
