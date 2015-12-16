/**
 * @author jun.yj
 * @date 2015/8/6
 */

define(function(require, exports, module){
    'use strict';

    var extend = function( target, src ){
        var val, name;
        for ( name in src ) {
            val = src[name];
            if ( val !== undefined ){
                target[name] = val;
            }
        }
        return target;
    },

    Proxy = function(){};

    return function( parent, o ){

        if ( !o ) {
            o = parent;
            parent = null;
        }

        var Class = function(){
            this.init && this.init.apply( this, arguments );
        };

        var proto = {},
            superclass;

        if ( parent ) {
            Proxy.prototype = superclass = parent.prototype || parent;
            proto = new Proxy();
        }

        Class.prototype = extend( proto, o );
        Class.prototype.constructor = Class;
        Class.prototype.superclass = superclass;

        return Class;
    };
});
