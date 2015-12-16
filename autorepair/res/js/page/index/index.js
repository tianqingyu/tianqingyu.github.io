/**
 * @author jun.yj
 * @email god.yangjun@gmail.com
 * @date 15/12/14
 */

define(function (require, exports, module) {
    'use strict';

    var $ = require('$'),
        _ = require('_'),
        log = require('log'),
        art = require('art'),
        net = require('net');

    return {
        init: function(){
            this.initTmpl();
        },

        initTmpl: function(){

            // header
            net.text('../mods/header.art', function( rs ){
                $('#header').replaceWith( art.compile(rs)({}) );
            });

            // footer
            net.text('../mods/footer.art', function( rs ){
                $('#footer').replaceWith( art.compile(rs)({}) );
            });

            // main
            net.text('index.art', function( rs ){
                $('#main').replaceWith( art.compile(rs)({}) );
            });
        }
    }
});
