/**
 * 延迟模块.
 *
 * @author jun.yj
 * @date 2015/8/6
 */

define(function(require, exports, module){
    'use strict';

    var WAIT = 100;

    var bind = function( func, args, context ){
        return function(){
            func.apply( context, args );
        };
    };

    var Delayer = function(){
        this.timerId = 0;
    };

    Delayer.prototype = {

        run: function( func, ms, context, args ){

            if ( typeof ms !== 'number' ) {
                context = ms;
                ms = WAIT;
            }

            this.stop();

            this.timerId = setTimeout( bind( func, args, context ), ms );
        },

        stop: function(){
            clearTimeout( this.timerId );
        }
    };

    var delayer = new Delayer();

    /*
     * Delayer.lazy 的使用场景为直接代理对象的方法
     *
     * var App = {
     * 	  show: Delayer.lazy(function(){
     *       // coding...
     *    }, 100)
     * }
     */
    Delayer.lazy = function( func, ms ){
        return function(){
            delayer.run( func, ms, this, arguments );
        };
    };

    Delayer.stop = function(){
        delayer.stop();
    };

    module.exports = Delayer;
});
