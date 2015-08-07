/**
 * @author jun.yj
 * @since 2015/8/6
 */

define(function(require, exports, module){
    'use strict';

    var toString = {}.toString,
        isFunction = function( it ){
            return toString.call( it ) === '[object Function]';
        },
        extend = function( target, src ){
            var val, name;

            for ( name in src ){
                val = src[name];
                if ( val !== undefined ){
                    target[name] = val;
                }
            }
            return target;
        };

    var Proxy = function(){};

    return function( parent, o ){

        if ( !o ){
            o = parent;
            parent = null;
        }

        var Class = function(){
            this.init && this.init.apply( this, arguments );
        };

        var proto = {};

        if ( parent ){
            Proxy.prototype = Class.superclass = isFunction( parent ) ? parent.prototype : parent;
            proto = new Proxy();
        }

        Class.prototype = extend( proto, o );
        Class.prototype.constructor = Class;

        return Class;
    };
});