/*TMODJS:{"version":6,"md5":"3a9538b0bbdde4c6eb1017869d806bd0"}*/
template('enterprise/more/approve',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$string=$utils.$string,view=$helpers.view,title=$data.title,goback=$data.goback,$out='';$out+='<!-- 头部 -->\n';
$out+=$string(view('mods/header', {title:'费用审批', goback:false}));
$out+='\n\n<!-- 内容 -->\n<section class="page-main main-enterprise-more-approve">\n  <div class="content">\n    xx\n  </div>\n</section>\n\n<!-- 底部 -->\n';
$out+=$string(view('mods/footer'));
return new String($out);
});