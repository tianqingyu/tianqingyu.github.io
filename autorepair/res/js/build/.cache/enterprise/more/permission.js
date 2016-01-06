/*TMODJS:{"version":27,"md5":"f176f04b7420da7bd44d3baadbc71456"}*/
template('enterprise/more/permission',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$string=$utils.$string,view=$helpers.view,title=$data.title,$out='';$out+='<!-- 头部 -->\n';
$out+=$string(view('mods/header', {title:'用户权限分配'}));
$out+='\n\n<!-- 内容 -->\n<section class="page-main main-enterprise-more-permission">\n  <div class="content">\n    <div class="lists">\n      <a href="permission-assign.html">\n        <ul class="list2">\n          <li>\n            <span>客户：</span>\n            <span>刘大山</span>\n          </li>\n          <li>\n            <span>权限：</span>\n            <span>未分配</span>\n          </li>\n        </ul>\n      </a>\n      <a href="permission-assign.html">\n        <ul class="list2 assigned">\n          <li>\n            <span>客户：</span>\n            <span>刘大山</span>\n          </li>\n          <li>\n            <span>权限：</span>\n            <span class="text-stress">汽修工</span>\n          </li>\n        </ul>\n      </a>\n    </div>\n  </div>\n</section>\n\n<!-- 底部 -->\n';
$out+=$string(view('mods/footer'));
return new String($out);
});