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
        loading = require('ui/loading');

    var $d = $('#doc'),
        $m = $d.find('section.main-login');

    var URL = '../../chassis/index.html';

    return {
        init: function(){
            this.wait();
        },

        wait: function(){

            var that = this;

            $m.find('a.login').on('tap', function( evt ){

                if ( that.check() ) {

                    loading.show();

                    net.post({
                        url: 'login.do',
                        data: {
                            phonenumber: $.trim( $m.find('input.name').val() ),
                            password: $m.find('input.pass').val()
                        },
                        success: function( rs ){

                            if ( rs.sessionid ) {
                                auth.setLogin( rs.sessionid, auth.USER_GENERAL );

                                window.location.href = URL;
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
            });
        },

        check: function(){

            var name = $m.find('input.name').val(),
                pass = $m.find('input.pass').val();

            if ( $.trim( name ) === '' ) {
                msgbox.alert('请输入您的手机号');
                return false;
            }

            if ( pass === '' ) {
                msgbox.alert('请输入密码');
                return false;
            }

            return true;
        }
    }
});
