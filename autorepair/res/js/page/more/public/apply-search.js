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

            if ( !o.company_id ) {
                msgbox.alert('请输入商户名称');
                return false;
            }
            if ( !o.name ) {
                msgbox.alert('请输入申请人姓名');
                return false;
            }
            if ( !o.phonenumber ) {
                msgbox.alert('请输入申请人手机号');
                return false;
            }
            if ( !o.vehicl_code ) {
                msgbox.alert('请输入车牌号');
                return false;
            }

            return true;
        },

        getParams: function(){
            return {
                sessionid   : auth.getSID(),
                company_id  : $.trim( $m.find('input.business').val() ),
                name        : encodeURIComponent( $.trim( $m.find('input.username').val() ) ),
                phonenumber : $.trim( $m.find('input.mobile').val() ),
                vehicl_code : encodeURIComponent( $.trim( $m.find('input.vehicl-code').val() ) ),
                requestnote : encodeURIComponent( $.trim( $m.find('input.requestnote').val() ) )
            };
        }
    }
});