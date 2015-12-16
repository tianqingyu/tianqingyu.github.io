/**
 * @author jun.yj
 * @date 2015/8/6
 */

define(function(require, exports, module){
	'use strict';

	var Class = require('lang/class');
	var Attribute = require('lang/attribute');
	var observer = require('lang/observer');

	var mixin = function( target, src ){

		var val;

		src = src.prototype || src;

		for (var name in src ){
			val = src[name];
			if ( val !== undefined ){
				target[name] = val;
			}
		}
	};

	var Base = Class({
		init: function( config ){

			this.initOptions( config );
		},

		destroy: function(){

			this.uninstall();

			this.off();

			for ( var key in this ){
				if ( this.hasOwnProperty( key ) ){
					delete this[key];
				}
			}
		}
	});

	mixin( Base.prototype, Attribute );

	observer.mixTo( Base.prototype );

	return Base;
});