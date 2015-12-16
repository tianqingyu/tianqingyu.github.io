/**
 * 处理数字相关.
 *
 * @author jun.yj
 * @date 2015/9/13
 */

define(function(require, exports, module){
	'use strict';

	var U = {
		u:function(n,shrink){if(!shrink)shrink=0;if(U.isS(n))n=U.f(n);var un;if(n>0){if(n<100000)return U.round(n);if(n<100000000){n=n/10000;un='万';}else{n=n/100000000;un='亿';}if(shrink==0)return U.round(n,2).toFixed(2)+un;else if(shrink==1)return n>=100 ? U.round(n)+un : U.round(n,2).toFixed(2)+un;else if(shrink==2)return n>=100 ? U.round(n)+un : U.round(n,1).toFixed(1)+un;return U.round(n)+un;}else if(n<0){if(n>-100000)return U.round(n);if(n>-100000000){n=n/10000;un='万';}else{n=n/100000000;un='亿';}if(shrink==0)return U.round(n,2).toFixed(2)+un;else if(shrink==1)return n<=-100 ? U.round(n)+un : U.round(n,2).toFixed(2)+un;else if(shrink==2)return n<=-100 ? U.round(n)+un : U.round(n,1).toFixed(1)+un;return U.round(n)+un;}return '0';},
		round:function(n,mantissa){if(!mantissa)mantissa=0;if(mantissa<=0)return Math.round(n);var v=1;for(var i=0;i<mantissa;i++)v*=10;return Math.round(n*v) / v},
		isS: function(s){return typeof s === 'string';}
	};

	return {
		/**
		 * 将数字格式化成3位一组，比如1234567，变为 1,234,567
		 */
		format: function( n ){

			if ( typeof n !== 'number' ) {
				return n + '';
			}

			var f = n < 0 ? '-' : '',
				s = Math.abs( n ) + '',
				i = s.length,
				r = '',
				c = 0;

			while ( i-- > 0 ) {

				c++;
				r = s.charAt( i ) + r;

				if ( c % 3 === 0 && i !== 0 ) {
					c = 0;
					r = ',' + r;
				}
			}

			return f + r;
		},

		// 格式化金额，小数点保留
		money: function( m ){

			var n = m | 0,
				m = m + '',
				i = m.indexOf('.');

			return this.format(n) + (i === -1 ? '' : m.substring(i));
		},

		// 将数字缩写为 万、亿 单位
		shrink: function( value ){
			return typeof value === 'number' ? U.u( value ) : value;
		},

		// 不够2位，用0填充
		fill: function( v ){
			return (v < 10 ? '0' : '') + v;
		}
	};
});
