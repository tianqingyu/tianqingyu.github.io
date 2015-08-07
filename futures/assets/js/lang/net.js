/**
 * 代理jQuery.ajax，方便以后升级替换（如果以后不使用jQuery.ajax的话）
 *
 * @author jun.yj
 * @since 2015/8/6
 */

define(function(require, exports, module){
	'use strict';

	var $ = require('$');

	var Net = function( opts ){

		this.jqXHR = $.ajax( opts );
	};

	Net.prototype = {
		done: function( func ){
			this.jqXHR.done( func );
			return this;
		},

		fail: function( func ){
			this.jqXHR.fail( func );
			return this;
		},

		always: function( func ){
			this.jqXHR.always( func );
			return this;
		},

		complete: function( func ){
			this.jqXHR.complete( func );
			return this;
		}
	};

	return {
		ajax: function( opts ){

			opts.type = opts.type || 'POST';
			opts.cache = opts.cache || false;
			opts.dataType = opts.dataType || 'json';

			return new Net( opts );
		}
	};
});
