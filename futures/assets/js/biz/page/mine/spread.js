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

            var cns = 'tab-spread tab-history tab-users';

            var $tab = $d.find('ul.mod-tab-sample');

            $tab.on('tap', 'span', function( evt ){

                var cn = 'tab-' + this.className;

                $tab.parent().removeClass( cns ).addClass( cn );
            });
        }
    };
});
