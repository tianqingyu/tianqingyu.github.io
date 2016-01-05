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
            $('#page-content').replaceWith( art('enterprise/more/orders-make', {}) );
        }
    }
});
