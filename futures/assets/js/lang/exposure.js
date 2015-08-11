/**
 * 曝光组件.
 *
 * @author jun.yj
 * @build 2015/8/10
 */

define(function(require, exports, module){
    'use strict';

    var $ = require('$');
    
    var $win = $(window),
        $doc = $(document),
        isFunction = $.isFunction,
        
        winHeight = 0,
        queue = [],
        isBind = false,
    
    
    cover = function( target ){
        if ( 'string' === typeof target || 1 === target.nodeType ){
            target = $(target);
        }
        
        return target;
    },
    
    make = function( target, callback, spacing ){
        
        var item = {};
        
        target = cover( target );
        
        item.$el = target.jquery && target.length ? target : [];
        item.spacing = spacing || 0;
        
        if ( isFunction( callback ) ) {
            item.callback = callback;
        }
        
        return item;
    },
    
    spinoff = function( item, i, one ){
        
        var subItem = {
            $el: item.$el.eq(i),
            callback: item.callback,
            spacing: item.spacing
        };
        
        if ( one ){
            subItem.selector = item.$el.selector;
        }
        
        queue.push( subItem );
        
    },
    
    add = function( target, callback, spacing, one ){
        
        var item = make( target, callback, spacing ),
            i, l;
        
        l = item.$el.length;
        
        if ( l > 1 ){
            for ( i = 0; i < l; i++ ){
                spinoff( item, i, one );
            }
            
            return;
        }
        
        queue.push( item );
    },
    
    bind = function(){
        
        var timer = null, interval = 200;
        
        winHeight = $win.height();
        
        $win.bind( 'scroll.exposure', function(e){
            timer && clearTimeout( timer );
            timer = setTimeout( function(){
                poll();
            }, interval );
        } ).bind( 'resize.exposure', function(e){
            timer && clearTimeout( timer );
            timer = setTimeout( function(){
                winHeight = $win.height();
                poll();
            }, interval );
        } );
        
        isBind = true;
        
    },
    
    poll = function(){
        
        if ( queue.length > 0 ){
            notify();
        } else {
            unbind();
        }
        
    },
    
    notify = function(){
        
        call(function( item ){
            return check( item );
        });
        
    },
    
    call = function( tactic ){
        
        var item,
            loop = { i: 0 };
            
        for ( ; loop.i < queue.length; ){
            item = queue[loop.i];
            if ( tactic( item ) ){
                remove( item, loop );
                item.callback && item.callback.call( null, item.$el );
            } else {
                loop.i++;
            }
        }
        
        if ( queue.length === 0 ){

            unbind();
        }
        
    },
    
    check = function( item ){
        
        var result = false;
        
        if ( item.$el.length > 0 ){
            var scrollTop = $doc.scrollTop(),
                heightDown = winHeight + scrollTop + item.spacing,
                offsetTop = item.$el.offset().top,
                heightUp = offsetTop + item.$el.height() + item.spacing;
                
            if ( heightDown >= offsetTop && scrollTop <= heightUp && item.$el.is(':visible') ){
                result = true;
            }
        }
        
        return result;
        
    },
    
    remove = function( item, loop ){
        
        var selector = item.selector,
            j;
        
        if ( selector ){
            
            for ( j = 0; j < queue.length; ){
                if ( queue[j].selector === selector ){
                    queue.splice( j, 1 );
                    j < loop.i && loop.i--;
                } else {
                    j++;
                }
            }
            
        } else {
            queue.splice( loop.i, 1 );
        }
        
    },
    
    unbind = function(){
        
        if ( !isBind ){
            return;
        }
        
        $win.unbind( 'resize.exposure' )
            .unbind( 'scroll.exposure' );
        
        isBind = false;
        
    },
    
    init = function(){
        
        if ( !isBind ){
            bind();
        }
        
        notify();
        
    };
    
    return {
        bind: function( target, callback, spacing ){
            
            add( target, callback, spacing );
            
            init();

        },
        
        one: function( target, callback, spacing ){
            
            add( target, callback, spacing, true );
            
            init();
            
        },
        
        trigger: function(){
            
            poll();
            
        },
        
        force: function( target ){
            
            target = cover( target );
            
            if ( target.length > 0 ){
                call(function( item ){
                    return target.index( item.$el[0] ) > -1 ? true : false;
                });
            }
        }
    };
});
