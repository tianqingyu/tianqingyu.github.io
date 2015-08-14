/**
 * 一个页面需要引入多个不同的模块（module），则使用该loader来加载，
 * 目的是清晰的管理那些依赖的模块.
 *
 * @author jun.yj
 * @since 2015/8/6
 */

define(function(require, exports, module){
	'use strict';

	var $ = require('$'),
		_ = require('_'),
		P = $('#doc');

	// 递归加载（严格进行顺序加载）
	var loader = function( urls ){

			if ( urls.length ) {

				if ( typeof urls === 'string' ) {
					urls = [urls];
				}

				require.async( urls.shift(), function( mod ) {

					mod && mod.init && mod.init();

					loader( urls );
				});
			}
		},

		isModExits = function( selector ){
			return !!P.find( selector ).length;
		};

	module.exports = function( urls ){

		if ( _.isArray( urls ) ) {
			loader( urls );
		}
		else {
			_.each( urls, function( urls, selector ){
				if ( isModExits( selector ) ) {
					loader( urls );
				}
			});
		}
	};
});
