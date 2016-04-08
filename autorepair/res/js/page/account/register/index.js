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

    var loading = require('ui/loading'),
        msgbox = require('ui/msgbox');

    var $d = $('#doc'),
        $m = $d.find('section.main-register');

    return {
        init: function(){
            this.wait();
        },

        wait: function(){

            // 注册
            $m.find('div.action > a.register').on('tap', function( evt ){
                evt.preventDefault();

                if ( $(this).hasClass('button-disabled') ) {
                    return;
                }

                loading.show();

                net.post({
                    url: 'registered.do',
                    data: {
                        "phonenumber" : $m.find('input.mobile').val(),
                        "SMSCode"     : $m.find('input.smscode').val(),
                        "carnumber"   : $m.find('input.plate').val(),
                        "username"    : $m.find('input.name').val(),
                        "password"    : $m.find('input.pass').val()
                    },
                    success: function( rs ){
                        msgbox.alert( rs.msg, function(){
                            if ( rs.code === '0' ) {
                                window.location.href = '../login/index.html';
                            }
                        });
                    },
                    complete: function(){
                        loading.hide();
                    }
                });
            });

            // 确认协议
            $('#do-agreement').on('click', function(){

                if ( !$(this).prop('checked') ) {
                    $m.find('div.action > a.register').addClass('button-disabled');
                }
                else {
                    $m.find('div.action > a.register').removeClass('button-disabled');
                }
            });

            // 获取短信验证码
            $m.find('a.button-smscode').on('tap', function( evt ){
                evt.preventDefault();

                loading.show();

                net.post({
                    url: 'getSMSCode.do',
                    data: {
                        phonenumber: $m.find('input.mobile').val()
                    },
                    complete: function(){
                        loading.hide();
                    }
                });
            });
        }
    }
});
