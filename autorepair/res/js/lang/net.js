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

		jsonp: function( opts ){
			opts.type = 'GET';
			opts.dataType = 'jsonp';
			return this.ajax( opts );
		},

		ajax: function( opts ){

			opts.type 	  = opts.type || 'POST';
			opts.cache 	  = opts.cache || false;
			opts.dataType = opts.dataType || 'json';

			opts.success  = opts.success || result.done;
			opts.error    = opts.error || result.fail;

			/* TODO
			   后端返回的json字符串数据，并非严格的json格式。
			   用 JSON.parse 去解析会有问题，只能使用 eval 来做了。
			   之后的数据改造，必须改成返回严格格式的json字符串数据。
			 */
			opts.converters = {
				'text json': function( rs ){
					return json.parse( rs && rs.replace(/[\n\r]/g, ' ') );
				}
			};

			return new Net( opts );
		}
	};
});
