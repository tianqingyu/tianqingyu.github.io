/**
 * @author jun.yj
 * @date 2015/8/6
 */

define(function(require, exports, module){
	'use strict';

	var log = require('log');

	var NAME = 'SESSIONID';

	return {
		isLogin: function(){
			return !!this.getSID();
		},

		setLogin: function( sessionid ){
			sessionStorage.setItem( NAME, sessionid );
		},

		getSID: function(){
			return sessionStorage.getItem( NAME );
		}
	};
});
