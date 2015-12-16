/**
 * 定时器（每隔多少时间执行任务）.
 *
 * 一个页面只有一个定时器，需要执行的任务都添加到定时器中.
 *
 * @author jun.yj
 * @email god.yangjun@gmail.com
 * @date 15/9/20
 */

define(function (require, exports, module) {
    'use strict';

    var uid = 0,
        tasks = {};

    var reqAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function( fn ){
        window.setTimeout( fn, 17 );
    },

    isNumber = function( v ){
        return typeof v === 'number';
    },

    exec = function(){

        var ids = Object.keys( tasks );

        if ( !ids.length ) {
            return;
        }

        var now = Date.now();

        ids.forEach(function( id ){

            var task = tasks[ id ];

            // 异步情况，任务已经被删除
            if ( task == null ) {
                return;
            }

            if ( now - task.time >= task.wait ) {

                var times = task.times;

                if ( times > 0 ) {
                    times--;
                }

                task.fn.call( task.context );

                if ( times === -1 || times > 0 ) {
                    // 时间重置，需要放在任务执行之后，
                    // 确保每次任务执行时间的间隔一致
                    task.time = Date.now();
                    task.times = times;
                }
                else {
                    task = null;
                    delete tasks[ id ];
                }
            }
        });
    },

    remove = function( id ){
        tasks[ id+'' ] && delete tasks[ id+'' ];
    },

    loop = function(){
        exec();
        reqAF( loop );
    };

    loop();

    return {
        /**
         * add( fn )
         * add( fn, wait )
         * add( fn, context )
         * add( fn, times ) // times < 1000
         * add( fn, wait, context )
         * add( fn, wait, times )
         * add( fn, context, times )
         * add( fn, wait, context, times )
         *
         * @param fn
         * @param wait 每次间隔多少毫秒
         * @param context
         * @param times 执行多少次，-1表示无限次
         */
        add: function( fn, wait, context, times ){

            if ( arguments.length === 2 ) {
                if ( isNumber(wait) ) {
                    if ( wait < 100 ) { // 小于100的值，则认为是指定100次
                        times = wait;
                        wait = 1000;
                    }
                }
                else {
                    context = wait;
                    wait = 1000;
                }
            }
            else if ( arguments.length === 3 ) {
                if ( isNumber(context) ) {
                    times = context;
                    context = null;
                }
                else if ( !isNumber(wait) ) {
                    times = context;
                    context = wait;
                    wait = 1000;
                }
            }

            uid++;

            tasks[ uid+'' ] = {
                id: uid,
                fn: fn,
                wait: wait || 1000,
                context: context,
                times: times != null ? times : -1,
                time: Date.now()
            };

            return {
                id: uid,
                clear: function(){
                    remove( this.id );
                }
            };
        },

        // 执行一次
        one: function( fn, wait, context ){

            if ( wait != null && !isNumber(wait) ) {
                context = wait;
                wait = 1000;
            }

            return this.add( fn, wait, context, 1 );
        },

        // 不限次数
        ever: function( fn, wait, context ){

            if ( wait != null && !isNumber(wait) ) {
                context = wait;
                wait = 1000;
            }

            return this.add( fn, wait, context, -1 );
        },

        // 异步执行代码
        async: function( fn ){
            return this.add( fn, 25, null, 1 );
        },

        clear: function( id ){
            if ( id != null && isNumber(id) ) {
                remove( id );
            }
        }
    };
});
