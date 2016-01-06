/*TMODJS:{"version":10,"md5":"8ae8ada9ab9ce194fddbe61f742d81a6"}*/
template('enterprise/more/approve',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$string=$utils.$string,view=$helpers.view,title=$data.title,$out='';$out+='<!-- 头部 -->\n';
$out+=$string(view('mods/header', {title:'费用审批'}));
$out+='\n\n<!-- 内容 -->\n<section class="page-main main-enterprise-more-approve">\n  <div class="content">\n    <!-- 列表 -->\n    <div class="lists">\n      <a href="approve-detail.html">\n        <ul class="list2">\n          <li>\n            <span>客户：</span>\n            <span>刘大山</span>\n          </li>\n          <li>\n            <span>编码：</span>\n            <span>30000786</span>\n          </li>\n          <li>\n            <span>总价：</span>\n            <span>546元</span>\n          </li>\n        </ul>\n      </a>\n      <a href="approve-detail.html">\n        <ul class="list2">\n          <li>\n            <span>客户：</span>\n            <span>刘大山</span>\n          </li>\n          <li>\n            <span>编码：</span>\n            <span>30000786</span>\n          </li>\n          <li>\n            <span>总价：</span>\n            <span>546元</span>\n          </li>\n        </ul>\n      </a>\n    </div>\n  </div>\n</section>\n\n<!-- 底部 -->\n';
$out+=$string(view('mods/footer'));
return new String($out);
});