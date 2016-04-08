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
        $m = $d.find('section.main-general-more-search-result');

    return {
        init: function(){
            this.render();
        },

        render: function(){

            var that = this;

            var params = urlUtil.getParams();

            loading.show();

            net.post({
                url: 'serviceBase.do',
                data: params,
                success: function( rs ){

                    if ( rs.message || rs.msg ) {
                        msgbox.alert( rs.message || rs.msg );
                    }

                    that.renderData( rs.data );
                },
                complete: function(){
                    loading.hide();
                }
            });
        },

        renderData: function( data ){

            var $ul = $m.find('ul.list3');

            $ul.find('span.vinInfo').text( urlUtil.getParams().vinInfo );

            if ( data ) {

                var o = data[0];

                $ul.find('span.CJMC').text( o.CJMC );
                $ul.find('span.PP').text( o.PP );
                $ul.find('span.CX').text( o.CX );
                $ul.find('span.PL').text( o.PL );
            }
        }
    }
});
