/**
 * 字符串相关工具方法.
 *
 * @author jun.yj
 * @since 2015/8/6
 */

define(function(require, exports, module){
	'use strict';

	return {

		/**
		 * 简单的模式字符串格式化，
		 * 模式字符串格式为：$prop 或者 ${prop}
		 *
		 * @param {String} tpl，如：'my name is $name'
		 * @param {Object} options，如：{name: 'jun.yj'}
		 * @returns string
		 */
		format: (function(){

			var RE_FMT_FIND = /\$\w+|\$\{\w+\}/g,
				RE_FMT_CLEAR = /\$|\{|\}/g;

			var clear = function( s ){
				return s.replace( RE_FMT_CLEAR, '' );
			};

			return function( tpl, options ){
				return tpl.replace( RE_FMT_FIND, function( prop ){
					var value = options[ clear( prop ) ];
					return value == null ? '' : value;
				});
			};
		}()),

		/**
		 * 返回一个模板执行函数.
		 */
		tpl: function( tpl ){

			var self = this;

			return function( options ){
				return self.format( tpl, options );
			};
		}
	};
});
