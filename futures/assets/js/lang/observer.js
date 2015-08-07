/**
 * 观察者模块.
 *
 * @author jun.yj
 * @since 2015/8/6
 */

define(function(require, exports, module){
    'use strict';

    var toString = {}.toString,
        slice = Array.prototype.slice;

    var isFunction = function( it ){
            return toString.call( it ) === '[object Function]';
        },

        isArray = Array.isArray || function( it ){
                return toString.call( it ) === '[object Array]';
            },

        isString = function( str ){
            return 'string' === typeof str;
        },

        wrap = function( names, performer ){

            var name;

            if ( isArray( names ) ){
                while ( name = names.shift() ){
                    performer( name );
                }
            } else {
                performer( names );
            }
        },

        attach = function( observerGroup, name, listener, context ){

            if ( !isString( name ) ){
                return;
            }

            var listeners = observerGroup[name] || ( observerGroup[name] = [] );
            listeners.push({
                listener: listener,
                context: context
            });
        },

        detach = function( observerGroup, name, listener, context ){

            var listeners, item;

            if ( !isString( name ) || !( listeners = observerGroup[name] ) ){
                return;
            }

            if ( listener || context ){
                for ( var i = 0; i < listeners.length; ){
                    item = listeners[i];
                    if ( ( listener && item.listener === listener ) || ( context && item.context === context ) ){
                        listeners.splice( i, 1 );
                    } else {
                        i++;
                    }
                }
            } else {
                delete observerGroup[name];
            }
        },

        notify = function( observerGroup, name, args ){

            var listeners, item;

            if ( !isString( name ) || !( listeners = observerGroup[name] ) ){
                return;
            }

            for ( var i = 0, l = listeners.length; i < l; i++ ){
                item = listeners[i];
                item.listener.apply( item.context || this._observer_context || this, args );
            }
        };

    var MakeObserver = function( context ){
        this._observer_context = context;
    };

    MakeObserver.prototype = {
        attach: function( names, listener, context ){

            var observerGroup;

            if ( !isFunction( listener ) ){
                return this;
            }

            observerGroup = this._observer_group || ( this._observer_group = {} );

            wrap( names, function( name ){
                attach( observerGroup, name, listener, context );
            });

            return this;
        },

        detach: function( names, listener, context ){

            var observerGroup;

            if ( !( observerGroup = this._observer_group ) ){
                return this;
            }

            if ( !names ){
                delete this._observer_group;
                return this;
            }

            wrap( names, function( name ){
                detach( observerGroup, name, listener, context );
            } );

            return this;
        },

        notify: function( names ){

            var observerGroup, args, _this;

            if ( !( observerGroup = this._observer_group ) ){
                return this;
            }

            args = slice.call( arguments, 1 );
            _this = this;

            wrap( names, function( name ){
                notify.call( _this, observerGroup, name, args );
            });

            return this;
        }
    };

    MakeObserver.prototype.on = MakeObserver.prototype.attach;
    MakeObserver.prototype.off = MakeObserver.prototype.detach;
    MakeObserver.prototype.emit = MakeObserver.prototype.notify;


    var observer = new MakeObserver( window );

    observer.create = function( context ){
        return new MakeObserver( context );
    };

    observer.mixTo = function( target ){

        target = target || {};

        var observerProto = MakeObserver.prototype;

        for ( var fn in observerProto ){
            target[fn] = observerProto[fn];
        }

        return target;
    };

    return observer;
});
