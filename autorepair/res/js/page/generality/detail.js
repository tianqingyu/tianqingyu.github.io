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
        $m = $d.find('section.main-general-more-common-result');

    return {
        init: function(){
            this.wait();
            this.render();
        },

        wait: function(){

            var that = this;

            // 原厂编号
            $m.find('div.show-list-1').on('tap', 'a.ycbh', function(){

                that.render2( $(this).data('id') );
            });

            // 适用车型
            $m.find('div.show-list-1').on('tap', 'a.sycx', function(){

                that.render3( $(this).data('id') );
            });

            $m.find('div.show-list-2 a.close').on('tap', function(){
                $m.find('div.show-list-2').addClass('hide');
                $m.find('div.show-list-1').removeClass('hide');
            });

            $m.find('div.show-list-3 a.close').on('tap', function(){
                $m.find('div.show-list-3').addClass('hide');
                $m.find('div.show-list-1').removeClass('hide');
            });
        },

        render: function(){

            var that = this;

            var params = urlUtil.getParams();

            loading.show();

            net.post({
                url: 'selecttyx.do',
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

            if ( data ) {

                var tpl = (
                  '<ul class="list">' +
                    '<li>' +
                      '<h3 class="pinpai">${SUP_BRAND}</h3>' +
                    '</li>' +
                    '<li>' +
                      '${list}' +
                    '</li>' +
                  '</ul>'
                );
                var tpl2 = '<h4 class="xinghao">${GA_ASSEMBLY}</h4>';
                var tpl3 = (
                  '<ul class="items">' +
                    '<li>' +
                      '<span class="label">品牌编号：</span>' +
                      '<span class="text">${ART_ARTICLE_NR}</span>' +
                    '</li>' +
                    '<li>' +
                      '<span class="label">配件型号：</span>' +
                      '<span class="text">${GADES}</span>' +
                    '</li>' +
                    '<li class="text-right">' +
                      '<a href="javascript:void(0)" class="text-link ycbh" data-id="${ART_ID}">原厂编号</a>　' +
                      '<a href="javascript:void(0)" class="text-link sycx" data-id="${ART_ID}">适用车型</a>　' +
                    '</li>' +
                  '</ul>'
                );

                var lists = {};
                _.each( data, function( o ){
                    var brand = lists[ o.SUP_BRAND ];
                    if ( !brand ) {
                        brand = lists[ o.SUP_BRAND ] = {};
                    }
                    var types = brand[ o.GA_ASSEMBLY ];
                    if ( !types ) {
                        types = brand[ o.GA_ASSEMBLY ] = [];
                    }
                    types.push( o );
                });

                var ss = '';

                _.each( lists, function( types, name ){

                    var s = '';

                    _.each( types, function( arr, type ){

                        s += strings.format( tpl2, {GA_ASSEMBLY: type});

                        _.each( arr, function( o ){
                            s += strings.format( tpl3, o );
                        });
                    });

                    ss += strings.format( tpl, {
                        list: s,
                        SUP_BRAND: name
                    });
                });

                $m.find('div.show-list-1').html( ss );
            }
        },

        render2: function( id ){

            var that = this;

            $m.find('div.show-list-1').addClass('hide');
            $m.find('div.show-list-2').removeClass('hide');

            loading.show();

            net.post({
                url: 'selecttyx.do',
                data: {
                    mode: '2',
                    l_art_id: ''+id
                },
                success: function( rs ){

                    if ( rs.message || rs.msg ) {
                        msgbox.alert( rs.message || rs.msg );
                    }

                    that.render2Data( rs.data );
                },
                complete: function(){
                    loading.hide();
                }
            });
        },
        render2Data: function( data ){

            var ss = '<li><span>品牌</span><span>号码</span></li>';

            _.each( data, function( o ){

                ss += (
                    '<li>' +
                      '<span>' + o.BRA_BRAND + '</span>' +
                      '<span>' + o.ARL_DISPLAY_NR + '</span>' +
                    '</li>'
                );
            });

            $m.find('div.show-list-2 .list3').html( ss );
        },

        render3: function( id ){

            var that = this;

            $m.find('div.show-list-1').addClass('hide');
            $m.find('div.show-list-3').removeClass('hide');

            loading.show();

            net.post({
                url: 'selecttyx.do',
                data: {
                    mode: '3',
                    l_art_id: ''+id
                },
                success: function( rs ){

                    if ( rs.message || rs.msg ) {
                        msgbox.alert( rs.message || rs.msg );
                    }

                    that.render3Data( rs.data );
                },
                complete: function(){
                    loading.hide();
                }
            });
        },
        render3Data: function( data ){

            var ss = '<li><span>描述</span><span>车型</span></li>';

            _.each( data, function( o ){

                ss += (
                    '<li>' +
                      '<span>' + o.VEHICLE_DES + '</span>' +
                      '<span>' + o.BODY + '</span>' +
                    '</li>'
                );
            });

            $m.find('div.show-list-3 .list3').html( ss );
        }
    }
});
