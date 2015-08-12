/**
 *
 * @author jun.yj
 * @since 15/8/7
 */

define(function(require, exports, module){
    'use strict';

    var loader = require('modLoader');

    loader({
        // 资金明细
        'section.main-mine-funds': ['page/mine/funds'],

        // 我的账号 - 推广挣钱
        'section.main-mine-spread': ['page/mine/spread']
    });
});
