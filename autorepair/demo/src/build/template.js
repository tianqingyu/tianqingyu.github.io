/*TMODJS:{"version":"1.0.0"}*/
!function() {
    function template(filename, content) {
        return (/string|function/.test(typeof content) ? compile : renderFile)(filename, content);
    }
    function toString(value, type) {
        return "string" != typeof value && (type = typeof value, "number" === type ? value += "" : value = "function" === type ? toString(value.call(value)) : ""), 
        value;
    }
    function escapeFn(s) {
        return escapeMap[s];
    }
    function escapeHTML(content) {
        return toString(content).replace(/&(?![\w#]+;)|[<>"']/g, escapeFn);
    }
    function each(data, callback) {
        if (isArray(data)) for (var i = 0, len = data.length; len > i; i++) callback.call(data, data[i], i, data); else for (i in data) callback.call(data, data[i], i);
    }
    function resolve(from, to) {
        var DOUBLE_DOT_RE = /(\/)[^\/]+\1\.\.\1/, dirname = ("./" + from).replace(/[^\/]+$/, ""), filename = dirname + to;
        for (filename = filename.replace(/\/\.\//g, "/"); filename.match(DOUBLE_DOT_RE); ) filename = filename.replace(DOUBLE_DOT_RE, "/");
        return filename;
    }
    function renderFile(filename, data) {
        var fn = template.get(filename) || showDebugInfo({
            filename: filename,
            name: "Render Error",
            message: "Template not found"
        });
        return data ? fn(data) : fn;
    }
    function compile(filename, fn) {
        if ("string" == typeof fn) {
            var string = fn;
            fn = function() {
                return new String(string);
            };
        }
        var render = cache[filename] = function(data) {
            try {
                return new fn(data, filename) + "";
            } catch (e) {
                return showDebugInfo(e)();
            }
        };
        return render.prototype = fn.prototype = utils, render.toString = function() {
            return fn + "";
        }, render;
    }
    function showDebugInfo(e) {
        var type = "{Template Error}", message = e.stack || "";
        if (message) message = message.split("\n").slice(0, 2).join("\n"); else for (var name in e) message += "<" + name + ">\n" + e[name] + "\n\n";
        return function() {
            return "object" == typeof console && console.error(type + "\n\n" + message), type;
        };
    }
    var cache = template.cache = {}, String = this.String, escapeMap = {
        "<": "&#60;",
        ">": "&#62;",
        '"': "&#34;",
        "'": "&#39;",
        "&": "&#38;"
    }, isArray = Array.isArray || function(obj) {
        return "[object Array]" === {}.toString.call(obj);
    }, utils = template.utils = {
        $helpers: {},
        $include: function(filename, data, from) {
            return filename = resolve(from, filename), renderFile(filename, data);
        },
        $string: toString,
        $escape: escapeHTML,
        $each: each
    }, helpers = template.helpers = utils.$helpers;
    template.get = function(filename) {
        return cache[filename.replace(/^\.\//, "")];
    }, template.helper = function(name, helper) {
        helpers[name] = helper;
    }, "function" == typeof define ? define(function() {
        return template;
    }) : "undefined" != typeof exports ? module.exports = template : this.template = template, 
    template.helper("view", function(path, data) {
        return utils.$include(path, data);
    }), /*v:10*/
    template("biz/login/index", function($data) {
        "use strict";
        var $utils = this, $helpers = $utils.$helpers, $string = $utils.$string, view = $helpers.view, testObj = ($data.title, 
        $data.test, $data.testObj), $out = "";
        return $out += "<!-- 头部 -->\n", $out += $string(view("../../mods/header", {
            title: "哈哈",
            test: testObj
        })), $out += '\n\n<!-- 内容 -->\n<section class="page-main main-login bg02">\n  <div class="content">\n    <h1><img class="icon-logo" src="../../../res/img/logo/01.png"/></h1>\n\n    <ul class="forms">\n      <li>\n        <div class="form-input clearfix">\n          <div class="left">\n            <span class="icon-name"></span>\n            <input class="name" type="text" maxlength="20" placeholder="请输入您的姓名" />\n          </div>\n        </div>\n      </li>\n      <li>\n        <div class="form-input clearfix">\n          <div class="left">\n            <span class="icon-pass"></span>\n            <input class="pass" type="text" maxlength="20" placeholder="请输入登录密码" />\n          </div>\n          <div class="right">\n            <a class="button-findback" href="javascript:void(0)">忘记密码？</a>\n          </div>\n        </div>\n      </li>\n    </ul>\n\n    <div class="action">\n      <a href="javascript:void(0)" class="button login">登录</a>\n      <a href="../register/index.html" class="button button-stress register">注册</a>\n    </div>\n\n    <div class="ps">\n      <a href="enterprise.html" class="text-s16">企业用户登录 &gt;</a>\n    </div>\n  </div>\n</section>\n\n', 
        $out += $string(view("../../mods/footer")), new String($out);
    }), /*v:3*/
    template("mods/footer", '<footer class="page-footer">\n  <div class="content">\n    <ul>\n      <li class="reception">\n        <a href="../reception/index.html">\n          <span class="icon-jieche img"></span><span>接车</span>\n        </a>\n      </li>\n      <li class="management">\n        <a href="../management/index.html">\n          <span class="icon-chejianguanli img"></span><span>车间管理</span>\n        </a>\n      </li>\n      <li class="order">\n        <a href="../order/index.html">\n          <span class="icon-dingdan img"></span><span>客户订单</span>\n        </a>\n      </li>\n      <li class="more">\n        <a href="../more/index.html">\n          <span class="icon-gengduo img"></span><span>更多+</span>\n        </a>\n      </li>\n    </ul>\n  </div>\n</footer>'), 
    /*v:5*/
    template("mods/header", function($data) {
        "use strict";
        var $utils = this, goback = ($utils.$helpers, $data.goback), $escape = $utils.$escape, title = $data.title, test = $data.test, $out = "";
        return $out += '<header class="page-header">\n  <div class="content">\n    <h3 ', 
        0 != goback && ($out += 'class="noback"'), $out += ">", $out += $escape(title), 
        $out += $escape(test.a), $out += '</h3>\n\n    <div class="left">\n      ', 0 != goback && ($out += '\n      <a href="javascript:window.history.back()" class="icon-arrow-left go-back"></a>\n      '), 
        $out += '\n    </div>\n    <div class="right"></div>\n  </div>\n</header>', new String($out);
    });
}();