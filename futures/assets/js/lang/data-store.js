/**
 * 读取 #doc，#content 的埋点数据 data-xxx
 *
 * @author jun.yj
 * @since 2015/8/6
 */

define(function(require, exports, module){
	'use strict';

	var $ = require('$');

	var docData = $('#doc').data(),
		cttData = $('#content').data();

	var dataStore = {};

	$.extend( dataStore, docData, cttData );

	return {
		get: function( name ){
			return name && dataStore[ name ];
		}
	};
});
