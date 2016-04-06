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
        $m = $d.find('section.main-update');

    return {
        init: function(){
            this.wait();
        },

        wait: function(){

            var that = this;

            // 修改
            $m.find('div.action > a.update').on('tap', function( evt ){
                evt.preventDefault();

                if ( !that.check() ) {
                    return;
                }

                loading.show();

                net.post({
                    url: 'updateuser.do',
                    data: {
                        phonenumber : $m.find('input.mobile').val(),
                        SMSCode     : $m.find('input.smscode').val(),
                        password    : $m.find('input.pass').val()
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
        },

        check: function(){

            var pass = $m.find('input.pass').val(),
                pass2 = $m.find('input.pass2').val();

            if ( pass === '' ) {
                msgbox.alert('请输入密码');
                return false;
            }

            if ( pass !== pass2 ) {
                msgbox.alert('您二次输入的密码不同，请确认');
                return false;
            }

            return true;
        }
    }
});
