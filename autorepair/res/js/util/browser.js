/**
 * 浏览器检测.
 *
 * @author jun.yj
 * @email god.yangjun@gmail.com
 * @date 15/12/7
 */

define(function (require, exports, module) {
    'use strict';

    var ua = navigator.userAgent;

    var isiOS          = /iPhone|iPad|iPod|iOS/i.test( ua ),
        isAndroid      = /Android/i.test( ua ),
        isBlackBerry   = /BlackBerry/i.test( ua ),
        isWindowsPhone = /Windows Phone/i.test( ua );

    var isMobile = isiOS || isAndroid || isBlackBerry || isWindowsPhone;

    var browser = {
        // 系统
        ios: isiOS,
        android: isAndroid,
        blackBerry: isBlackBerry,
        windowsPhone: isWindowsPhone,

        // UC浏览器，移动版
        uc: isMobile && /UCBrowser/i.test( ua ),

        // 平台
        mobile: isMobile
    };

    return browser;
});
