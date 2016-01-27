/**
 * 代理jQuery.ajax，方便以后升级替换（如果以后不使用jQuery.ajax的话）
 *
 * @author jun.yj
 * @date 2015/8/6
 */

define(function(require, exports, module){
	'use strict';

	var $ = require('$');

	var json = require('util/json'),
		result = require('mod/ajax-result');

	var Net = function( opts ){
		this.jqXHR = $.ajax( opts );
	};
	Net.prototype = {
		done: function( fn ){
			this.jqXHR.done( fn );
			return this;
		},

		fail: function( fn ){
			this.jqXHR.fail( fn );
			return this;
		},

		complete: function( fn ){
			this.jqXHR.complete( fn );
			return this;
		},

		always: function( fn ){
			this.jqXHR.always( fn );
			return this;
		}
	};

	return {
		post: function( opts ){
			opts.type = 'POST';
			return this.ajax( opts );
		},

		get: function( opts ){
			opts.type = 'GET';
			return this.ajax( opts );
		},

		text: function( opts ){
			if (arguments.length === 2) {
				var url = opts;
				opts = {
					url: url,
					success: arguments[1]
				};
			}
			opts.type = 'GET';
			opts.dataType = 'text';
			return this.ajax( opts );
		},

		jsonp: function( opts ){
			opts.type = 'GET';
			opts.dataType = 'jsonp';
			return this.ajax( opts );
		},

		ajax: function( opts ){

			// TODO server读取配置
			if ( !/^http/.test( opts.url ) ) {
				opts.url = seajs.data.server + '/' + opts.url;
			}

			opts.type 	     = opts.type 	    || 'POST';
			opts.cache 	     = opts.cache 	    || false;
			opts.dataType    = opts.dataType    || 'json';
			opts.contentType = opts.contentType || 'application/json';

			opts.success  = opts.success || result.done;
			opts.error    = opts.error 	 || result.fail;

			return new Net( opts );
		}
	};
});
