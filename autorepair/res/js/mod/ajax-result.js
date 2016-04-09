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

		var msg  = rs.msg || rs.message;

		var fn = function(){

			if ( isFn( callback ) ) {
				callback();
			}
		};

		if ( msg ) {
			msgbox.alert( msg, fn );
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
