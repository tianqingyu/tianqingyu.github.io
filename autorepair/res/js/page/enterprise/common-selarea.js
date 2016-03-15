/**
 * @author jun.yj
 * @email god.yangjun@gmail.com
 * @date 15/12/14
 */

define(function (require, exports, module) {
    'use strict';

    var $ = require('$'),
        _ = require('_'),
        log = require('log'),
        net = require('net');

    return {
        init: function(){
            this.test();
        },

        test: function(){

            net.post({
                url: 'selclient.do',
                data: {

                },
                success: function( rs ){

                    if ( rs.code == null ) {
                        that.renderData( rs.data );
                    }
                    else {
                        msgbox.alert( rs.msg );
                    }
                },
                complete: function(){
                    loading.hide();
                }
            });
        }
    }
});
