/**
 *
 * @author jun.yj
 * @since 15/8/7
 */

define(function(require, exports, module){
    'use strict';

    var loader = require('modLoader');

    loader({
        'section.main-hero': 'page/hero/hero',
        'section.main-hero-user': 'page/hero/user'
    });
});
