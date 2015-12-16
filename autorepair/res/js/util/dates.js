/**
 * 日期相关工具方法.
 *
 * @author jun.yj
 * @date 2015/8/6
 */

define(function(require, exports, module){
	'use strict';

	var fill = function( v, pass ){
		return (!pass && v < 10 ? '0' : '') + v;
	};

	return {
		/**
		 * 参数 pattern 的规则：
		 * Y 表示年
		 * y 表示年（后2位）
		 * M 表示月
		 * D 表示天（号）
		 * h 表示时
		 * m 表示分
		 * s 表示秒
		 *
		 * 举例：
		 * pattern = Y-M-D h:m:s  // 输出：2015-09-15 15:15:10
		 */
		format: function( value, pattern, notFill ){

			pattern = pattern || 'Y-M-D h:m:s';

			var date = value.getTime ? value : new Date( value ),
				len  = pattern.length,
				ret  = pattern;

			for (var i = 0; i < len; i++) {

				switch ( pattern.charAt(i) ) {

					case 'Y':
						ret = ret.replace( /Y/g, fill( date.getFullYear(), notFill ) );
						break;

					case 'y':
						ret = ret.replace( /y/g, fill( date.getFullYear(), notFill ).substring(2) );
						break;

					case 'M':
						ret = ret.replace( /M/g, fill( date.getMonth() + 1, notFill ) );
						break;

					case 'D':
						ret = ret.replace( /D/g, fill( date.getDate(), notFill ) );
						break;

					case 'h':
						ret = ret.replace( /h/g, fill( date.getHours(), notFill ) );
						break;

					case 'm':
						ret = ret.replace( /m/g, fill( date.getMinutes(), notFill ) );
						break;

					case 's':
						ret = ret.replace( /s/g, fill( date.getSeconds(), notFill ) );
						break;
				}
			}

			return ret;
		},

		// 上一分钟
		// value = 1500
		// value = 15:00
		// value = 毫秒数
		// value = Date对象
		prevMinute: function( value ){

			if ( typeof value === 'string' ) {
				value = value.replace(':', '') - 0;
			}
			else if ( value.getTime ) {
				value = value.getTime();
			}

			if ( value > 2359 ) {
				return this.format( new Date( value - 60000 ), 'h:m' );
			}

			var h = value / 100 | 0,
				m = value % 100;

			m -= 1;

			if ( m < 0 ) {
				m = 59;
				h -= 1;
			}

			if ( h < 0 ) {
				h = 23;
			}

			return fill( h ) + ':' + fill( m );
		}
	};
});
