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

    var auth = require('mod/auth'),
        msgbox = require('ui/msgbox'),
        loading = require('ui/loading'),
        strings = require('util/strings');

    var $d = $('#doc'),
        $m = $d.find('section.main-enterprise-more-approve');

    return {
        init: function(){
            this.request();
        },

        request: function(){

            var that = this;

            loading.show();

            net.post({
                url: 'requestsel.do',
                data: {
                    model: 'selectrequestsel',
                    phonenumber: auth.getPhone(),
                    sessionid: auth.getSID()
                },
                success: function( rs ){

                    if ( rs.msg || rs.message ) {
                        msgbox.alert( rs.msg || rs.message );
                    }
                    else {
                        that.render( rs.data );
                    }
                },
                complete: function(){
                    loading.hide();
                }
            });
        },

        render: function( data ){

            var tpl = (
                '<a href="shopsearchdetail.html?id=${requestsel_id}">' +
                  '<ul class="list2">' +
                    '<li>' +
                      '<span>姓名：</span>' +
                      '<span>${username}</span>' +
                    '</li>' +
                    '<li>' +
                      '<span>手机号：</span>' +
                      '<span>${phonenumber}</span>' +
                    '</li>' +
                  '</ul>' +
                '</a>'
            );

            var html = '';

            _.each(data, function( o ){
                html += strings.format( tpl, o );
            });

            $m.find('div.lists').html( html );
        }
    }
});
