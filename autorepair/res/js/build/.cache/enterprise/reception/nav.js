/*TMODJS:{"version":2,"md5":"f8cdb14d20c09e9dab04b81cfe9da6cc"}*/
template('enterprise/reception/nav',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$string=$utils.$string,view=$helpers.view,title=$data.title,$out='';$out+='<!-- 头部 -->\n';
$out+=$string(view('mods/header', {title:'业务导航'}));
$out+='\n\n<!-- 内容 -->\n<section class="page-main main-enterprise-reception-nav bg03">\n  <div class="content">\n    <!-- 接车信息 -->\n    <div class="details">\n      <ul class="photos clearfix">\n        <li><img src="../../../../res/img/other/02.jpg"/></li>\n        <li><img src="../../../../res/img/other/03.jpg"/></li>\n        <li><img src="../../../../res/img/other/03.jpg"/></li>\n        <li><img src="../../../../res/img/other/03.jpg"/></li>\n        <li><img src="../../../../res/img/other/04.jpg"/></li>\n        <li><div><span class="iconfont">&#xe600;</span></div></li>\n      </ul>\n      <div class="type text-s16 text-minor clearfix">\n        <div class="left label">车型</div>\n        <div class="left text">雪弗兰 创酷1.4AT</div>\n      </div>\n      <ul class="user">\n        <li>\n          <span>送修人：</span>\n          <span class="text-minor">张三</span>\n        </li>\n        <li>\n          <span>车牌号：</span>\n          <span class="text-minor">浙A 123321</span>\n        </li>\n      </ul>\n    </div>\n\n    <!-- 导航 -->\n    <ul class="navs">\n      <li class="detect">\n        <a href="detect.html" class="clearfix">\n          <div class="left">\n            <img src="../../../../res/img/icon/16.png"/>\n            <span class="text-s18">车辆检查</span>\n          </div>\n          <div class="right iconfont text-lesser">&#xe603;</div>\n        </a>\n      </li>\n      <li class="options clearfix">\n        <a href="options.html" class="clearfix">\n          <div class="left">\n            <img src="../../../../res/img/icon/17.png"/>\n            <span class="text-s18">项目选择</span>\n          </div>\n          <div class="right iconfont text-lesser">&#xe603;</div>\n        </a>\n      </li>\n      <li class="history clearfix">\n        <a href="history.html" class="clearfix">\n          <div class="left">\n            <img src="../../../../res/img/icon/18.png"/>\n            <span class="text-s18">历史记录</span>\n          </div>\n          <div class="right iconfont text-lesser">&#xe603;</div>\n        </a>\n      </li>\n    </ul>\n  </div>\n</section>\n\n<!-- 底部 -->\n';
$out+=$string(view('mods/footer'));
return new String($out);
});