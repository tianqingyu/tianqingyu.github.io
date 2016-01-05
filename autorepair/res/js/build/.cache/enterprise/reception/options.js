/*TMODJS:{"version":2,"md5":"0b95dcf98c265a0eb2f08293b148497b"}*/
template('enterprise/reception/options',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$string=$utils.$string,view=$helpers.view,title=$data.title,$out='';$out+='<!-- 头部 -->\n';
$out+=$string(view('mods/header', {title:'项目选择'}));
$out+='\n\n<!-- 内容 -->\n<section class="page-main main-enterprise-reception-options bg03">\n  <div class="content">\n    <!-- 列表 -->\n    <fieldset class="list-set">\n      <legend>推荐</legend>\n      <ul>\n        <li><span class="color-1">四轮定位</span></li>\n        <li><span class="color-2">换刹车片</span></li>\n        <li><span class="color-3">气门清洗</span></li>\n      </ul>\n    </fieldset>\n\n    <fieldset class="list-set">\n      <legend>其他</legend>\n      <ul>\n        <li><span>美容</span></li>\n        <li><span>装潢</span></li>\n        <li><span>&nbsp;</span></li>\n        <li><span>&nbsp;</span></li>\n        <li><span>&nbsp;</span></li>\n        <li><span>&nbsp;</span></li>\n        <li><span>&nbsp;</span></li>\n        <li><span>&nbsp;</span></li>\n        <li><span>&nbsp;</span></li>\n        <li><span>&nbsp;</span></li>\n        <li><span>&nbsp;</span></li>\n        <li><span>&nbsp;</span></li>\n      </ul>\n    </fieldset>\n\n    <div class="action">\n      <a href="dispatch.html" class="button">发派工人</a>\n    </div>\n  </div>\n</section>\n\n<!-- 底部 -->\n';
$out+=$string(view('mods/footer'));
return new String($out);
});