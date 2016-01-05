/*TMODJS:{"version":2,"md5":"c86b09746a92b32d4585585cda22f4a7"}*/
template('enterprise/reception/dispatch',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$string=$utils.$string,view=$helpers.view,title=$data.title,$out='';$out+='<!-- 头部 -->\n';
$out+=$string(view('mods/header', {title:'发派工人'}));
$out+='\n\n<!-- 内容 -->\n<section class="page-main main-enterprise-reception-dispatch bg03">\n  <div class="content">\n    <!-- 列表 -->\n    <ul class="list-emp">\n      <li>\n        <span class="icon-touxiang"></span>\n        <span class="text">001号 - 黄友沙</span>\n      </li>\n      <li class="curr">\n        <span class="icon-touxiang"></span>\n        <span class="text">002号 - 黄沙</span>\n      </li>\n      <li>\n        <span class="icon-touxiang"></span>\n        <span class="text">003号 - 黄友沙</span>\n      </li>\n      <li>\n        <span class="icon-touxiang"></span>\n        <span class="text">004号 - 黄友沙</span>\n      </li>\n      <li>\n        <span class="icon-touxiang"></span>\n        <span class="text">005号 - 黄友沙</span>\n      </li>\n    </ul>\n\n    <div class="action">\n      <a href="javascript:void(0)" class="button">确定</a>\n    </div>\n  </div>\n</section>\n\n<!-- 底部 -->\n';
$out+=$string(view('mods/footer'));
return new String($out);
});