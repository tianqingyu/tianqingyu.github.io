/*TMODJS:{"version":11,"md5":"764a66ba35d5ba0cb7ed03871d1363e2"}*/
template('enterprise/more/approve',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$string=$utils.$string,view=$helpers.view,title=$data.title,$out='';$out+='<!-- 头部 -->\n';
$out+=$string(view('mods/header', {title:'费用审批'}));
$out+='\n\n<!-- 内容 -->\n<section class="page-main main-enterprise-more-approve">\n  <div class="content">\n    <!-- 列表 -->\n    <div class="lists">\n      <a href="approve-detail.html">\n        <ul class="list2">\n          <li>\n            <span>客户：</span>\n            <span>刘大山</span>\n          </li>\n          <li>\n            <span>编码：</span>\n            <span>30000786</span>\n          </li>\n          <li>\n            <span>总价：</span>\n            <span>546元</span>\n          </li>\n        </ul>\n      </a>\n      <a href="approve-detail.html">\n        <ul class="list2">\n          <li>\n            <span>客户：</span>\n            <span>刘大山</span>\n          </li>\n          <li>\n            <span>编码：</span>\n            <span>30000786</span>\n          </li>\n          <li>\n            <span>总价：</span>\n            <span>546元</span>\n          </li>\n        </ul>\n      </a>\n    </div>\n  </div>\n</section>';
return new String($out);
});