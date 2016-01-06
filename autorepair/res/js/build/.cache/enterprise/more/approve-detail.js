/*TMODJS:{"version":25,"md5":"988a1bd9db486dfb20b69ce186597937"}*/
template('enterprise/more/approve-detail',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$string=$utils.$string,view=$helpers.view,title=$data.title,$out='';$out+='<!-- 头部 -->\n';
$out+=$string(view('mods/header', {title:'费用详情'}));
$out+='\n\n<!-- 内容 -->\n<section class="page-main main-enterprise-more-approve-detail">\n  <div class="content">\n    <ul class="list3">\n      <li>\n        <span>部门</span>\n        <span>汽修车间</span>\n      </li>\n      <li>\n        <span>类型</span>\n        <span>保养</span>\n      </li>\n      <li>\n        <span>名称</span>\n        <span>测试</span>\n      </li>\n      <li>\n        <span>金额</span>\n        <span>1000</span>\n      </li>\n      <li>\n        <span>备注</span>\n        <span>的嘎斯嘎斯撒旦噶萨嘎</span>\n      </li>\n      <li>\n        <span>付款日期</span>\n        <span>2016-01-06</span>\n      </li>\n    </ul>\n\n    <div class="action-cloum">\n      <a href="javascript:void(0)" class="button">同意</a>\n      <a href="javascript:void(0)" class="button button-important">不同意</a>\n    </div>\n  </div>\n</section>\n\n<!-- 底部 -->\n';
$out+=$string(view('mods/footer'));
return new String($out);
});