/**
 * 消息弹出框msgbox
 * 1. msgbox.alert()
 * 2. msgbox.confirm()
 *
 * @author jun.yj
 * @since 2015/5/30
 */

define(function(require, exports, module){
	'use strict';

	return {
		alert: function( txt, callback ){

			window.alert( txt );

			callback && callback();
		},

		confirm: function( txt, callback ){

			var rs = window.confirm( txt );

			callback && callback( rs );
		}
	};
});
