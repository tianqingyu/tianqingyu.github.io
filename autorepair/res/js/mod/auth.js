/**
 * @author jun.yj
 * @date 2015/8/6
 */

define(function(require, exports, module){
	'use strict';

	var log = require('log');

	var NAME = 'LOGINSID',
		TYPE = 'USERTYPE';

	return {

		USER_GENERAL: '1',
		USER_ENTERPRISE: '2',

		isLogin: function(){
			return !!this.getSID();
		},

		setLogin: function( sessionid, type ){
			sessionStorage.setItem( NAME, sessionid );
			sessionStorage.setItem( TYPE, type );
		},

		getSID: function(){
			return sessionStorage.getItem( NAME );
		},

		isGeneral: function(){
			return sessionStorage.getItem( TYPE ) === this.USER_GENERAL;
		},

		isEnterprise: function(){
			return sessionStorage.getItem( TYPE ) === this.USER_ENTERPRISE;
		}
	};
});
