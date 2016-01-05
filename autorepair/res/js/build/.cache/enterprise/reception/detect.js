/*TMODJS:{"version":2,"md5":"d42e14f83d494884d977cbf83c437bb9"}*/
template('enterprise/reception/detect',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$string=$utils.$string,view=$helpers.view,title=$data.title,$out='';$out+='<!-- 头部 -->\n';
$out+=$string(view('mods/header', {title:'车辆检查'}));
$out+='\n\n<!-- 内容 -->\n<section class="page-main main-enterprise-reception-detect bg03">\n  <div class="content">\n    <!-- 列表 -->\n    <fieldset class="list-set">\n      <legend>外部</legend>\n      <ul>\n        <li><span>萨嘎</span></li>\n        <li><span>萨嘎</span></li>\n        <li><span>萨嘎</span></li>\n      </ul>\n    </fieldset>\n\n    <fieldset class="list-set">\n      <legend>内部</legend>\n      <ul>\n        <li><span>萨嘎</span></li>\n        <li><span>萨嘎</span></li>\n        <li><span>萨嘎</span></li>\n        <li><span>萨嘎</span></li>\n        <li><span>萨嘎</span></li>\n        <li><span>萨嘎</span></li>\n        <li><span>萨嘎</span></li>\n        <li><span>萨嘎</span></li>\n        <li><span>萨嘎</span></li>\n        <li><span>萨嘎</span></li>\n        <li><span>萨嘎</span></li>\n        <li><span>萨嘎</span></li>\n      </ul>\n    </fieldset>\n\n    <div class="action">\n      <a href="dispatch.html" class="button">发派工人</a>\n    </div>\n  </div>\n</section>\n\n<!-- 底部 -->\n';
$out+=$string(view('mods/footer'));
return new String($out);
});