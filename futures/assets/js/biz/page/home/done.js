/**
 *
 * @author jun.yj
 * @since 15/8/7
 */

define(function(require, exports, module){
    'use strict';

    alert('script loaded 1 ' + ((+new Date()) - gScript)/1000 + 's');

    var loader = require('modLoader');

    loader([
        'page/home/index',
        'page/home/pk-anim'
    ]);
});
