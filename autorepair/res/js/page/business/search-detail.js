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

    var urlUtil = require('util/url'),
        strings = require('util/strings'),
        loading = require('ui/loading'),
        msgbox  = require('ui/msgbox');

    var $d = $('#doc'),
        $m = $d.find('section.main-business-detail');

    return {
        init: function(){
            this.render();
        },

        render: function(){

            var that = this;

            var params = urlUtil.getParams();

            loading.show();

            net.post({
                url: 'selclient.do',
                data: params,
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
        },

        renderData: function( data ){

            var tpl = (
                '<ul class="list">' +
                  '<li>' +
                    '<span class="label">商户：</span>' +
                    '<span class="text text-stress">${name}</span>' +
                  '</li>' +
                  '<li>' +
                    '<span class="label">地址：</span>' +
                    '<span class="text">${address}</span>' +
                  '</li>' +
                  '<li>' +
                    '<span class="label">电话：</span>' +
                    '<span class="text">' +
                      '<a href="tel:${area_code}${tel}" class="text-link">${area_code}-${tel}&nbsp;&nbsp;呼叫</a>' +
                    '</span>' +
                  '</li>' +
                '</ul>'
            );

            var html = '';

            _.each(data, function( o ){
                html += strings.format(tpl, o);
            });

            $m.find('div.lists').append( html );
        }
    }
});
