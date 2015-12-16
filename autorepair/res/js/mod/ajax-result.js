/**
 * 对ajax的返回结果进行统一处理.
 *
 * @author jun.yj
 * @date 2015/8/6
 */

define(function(require, exports, module){
	'use strict';

	var log = require('log');

	var msgbox = require('ui/msgbox'),
		loading = require('ui/loading');

	var isFn = function( fn ){
		return typeof fn === 'function';
	},

	process = function( rs, callback ){

		var url  = rs.redirectUrl,
			msg  = rs.errorMsg,
			type = rs.msgType, // 消息类型（toast）
			opts = rs.button;

		// >http://xx.com，以 > 开头的url，直接跳转
		if ( url && /^>/.test(url) ) {
			window.location.href = url.substring(1);
			return;
		}

		// 以 * 开头的url
		if ( url && /^\*/.test( url ) ) {

			url = url.replace('*', '');

			switch ( url ) {
				// 刷新页面
				case 'refresh':
					window.location.reload();
					break;
			}
			return;
		}

		var fn = function(){

			if ( url ) {
				window.location.href = url;
			}
			else if ( isFn( callback ) ) {
				callback();
			}
		};

		if ( msg ) {
			if ( opts ) {
				if ( opts.ok && opts.no ) {
					msgbox.confirm( msg, fn, null, opts );
				}
				else {
					msgbox.alert( msg, fn, opts );
				}
			}
			else if ( url ) {
				msgbox.alert( msg, fn );
			}
			else if ( type === 'toast' ) {
				msgbox.toast( msg );
				fn();
			}
			else {
				msgbox.alert( msg, fn );
			}
		}
		else {
			fn();
		}
	};

	return {
		done: function( rs, callback ){
			process( rs, callback );
		},

		fail: function( xhr, msg ){

			log.error( msg );

			loading.hide(true);

			process({errorMsg: '抱歉，系统繁忙，请稍后再试'});
		}
	};
});
