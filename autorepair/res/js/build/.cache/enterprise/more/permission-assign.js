/*TMODJS:{"version":25,"md5":"0fac1bf402eea836d42b65b879155328"}*/
template('enterprise/more/permission-assign',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$string=$utils.$string,view=$helpers.view,title=$data.title,$out='';$out+='<!-- 头部 -->\n';
$out+=$string(view('mods/header', {title:'用户权限'}));
$out+='\n\n<!-- 内容 -->\n<section class="page-main main-enterprise-more-permission-assign">\n  <div class="content">\n    <ul class="forms-list2">\n      <li class="clearfix">\n        <label>姓名：</label>\n        <span>丁泉城</span>\n      </li>\n      <li class="clearfix">\n        <label>类型：</label>\n        <span class="forms-select">\n          <span>未分配</span>\n          <img src="../../../res/img/icon/26.png"/>\n        </span>\n      </li>\n    </ul>\n\n    <div class="action">\n      <a href="javascript:void(0)" class="button button-important">设置</a>\n    </div>\n  </div>\n</section>';
return new String($out);
});