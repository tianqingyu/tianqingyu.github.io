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

    var strings = require('util/strings'),
        loading = require('ui/loading'),
        msgbox  = require('ui/msgbox'),
        auth    = require('mod/auth');

    var $d = $('#doc'),
        $m = $d.find('section.main-general-more-apply-search');

    return {
        init: function(){
            this.wait();
        },

        wait: function(){

            var that = this;

            $m.find('a.submit').on('tap', function(){
                if ( that.check() ) {
                    that.submit();
                }
            });
        },

        submit: function(){

            var params = this.getParams();

            loading.show();

            net.post({
                url: 'requestselAdd.do',
                data: params,
                complete: function(){
                    loading.hide();
                }
            });
        },

        check: function(){

            var o = this.getParams();

            if ( !o.name ) {
                msgbox.alert('请输入申请人姓名');
                return false;
            }

            if ( !o.login_userinfo_id ) {
                msgbox.alert('请输入申请人手机号');
                return false;
            }

            return true;
        },

        getParams: function(){
            return {
                company_id        : $m.find('input.business').val(),
                login_userinfo_id : $.trim( $m.find('input.mobile').val() ),
                name              : encodeURIComponent( $.trim( $m.find('input.username').val() ) ),
                requestnote       : '',
                sessionid         : auth.getSID()
            };
        }
    }
});