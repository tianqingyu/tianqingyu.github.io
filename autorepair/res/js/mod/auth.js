/**
 * @author jun.yj
 * @date 2015/8/6
 */

define(function(require, exports, module){
	'use strict';

	var log = require('log');

	var NAME = 'LOGINSID',
		TYPE = 'USERTYPE',
		PHONE = 'MOBILE',
		MENUS = 'MENUS';

	return {

		USER_GENERAL: '1',
		USER_ENTERPRISE: '2',

		isLogin: function(){
			return !!this.getSID();
		},

		setLogin: function( rs, type, phone ){
			sessionStorage.setItem( MENUS, JSON.stringify(rs.data) );
			sessionStorage.setItem( NAME, rs.sessionid );
			sessionStorage.setItem( TYPE, type );
			sessionStorage.setItem( PHONE, phone );
		},

		getSID: function(){
			return sessionStorage.getItem( NAME );
		},

		getMenus: function(){
			return JSON.parse( sessionStorage.getItem( MENUS ) );
		},

		getPhone: function(){
			return sessionStorage.getItem( PHONE );
		},

		isGeneral: function(){
			return sessionStorage.getItem( TYPE ) === this.USER_GENERAL;
		},

		isEnterprise: function(){
			return sessionStorage.getItem( TYPE ) === this.USER_ENTERPRISE;
		}
	};
});