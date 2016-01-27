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

                net.post({

                });
            });

            // 获取短信验证码
            $m.find('a.button-smscode').on('tap', function( evt ){
                evt.preventDefault();

                log(123);

                net.post({
                    url: 'getSMSCode.do',
                    data: JSON.stringify({
                        phonenumber: '13588219404'
                    })
                });
            });
        }
    }
});
