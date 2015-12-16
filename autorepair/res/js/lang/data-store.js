/**
 * 读取 #doc，#content 的埋点数据 data-xxx
 *
 * @author jun.yj
 * @date 2015/8/6
 */

define(function(require, exports, module){
	'use strict';

	var $ = require('$'),
		_ = require('_'),
		json = require('util/json');

	var docData = $('#doc').data(),
		cttData = $('#content').data();

	var dataStore = {},
		RE_JSON = /^\{.*\}$/m;

	$.extend( dataStore, docData, cttData );

	// 对json字符串，再parse一次
	_.each( dataStore, function( v, n ){

		if ( _.isString(v) && RE_JSON.test( v ) ) {

			dataStore[ n ] = json.parse( v );
		}
	});

	return {
		get: function( name ){
			return name && dataStore[ name ] || dataStore;
		},
		set: function( name, value ){
			dataStore[ name ] = value;
		}
	};
});
