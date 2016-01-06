/*TMODJS:{"version":5,"md5":"df847d451649ad4ccc1ca6c7075d5471"}*/
template('enterprise/more/apply',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$string=$utils.$string,view=$helpers.view,title=$data.title,goback=$data.goback,$out='';$out+='<!-- 头部 -->\n';
$out+=$string(view('mods/header', {title:'费用申请', goback:false}));
$out+='\n\n<!-- 内容 -->\n<section class="page-main main-enterprise-more-apply">\n  <div class="content">\n    xx\n  </div>\n</section>\n\n<!-- 底部 -->\n';
$out+=$string(view('mods/footer'));
return new String($out);
});