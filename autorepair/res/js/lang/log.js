/**
 * @author jun.yj
 * @date 2015/8/6
 */

define(function(require, exports, module){
	'use strict';

	var can = !!window.console;

	var log = function(){
		if (can) {
			console.log.apply(console, arguments);
		}
	};

	log.warn = function(){
		if (can) {
			console.warn.apply(console, arguments);
		}
	};

	log.error = function(){
		if (can) {
			console.error.apply(console, arguments);
		}
	};

	return log;
});
