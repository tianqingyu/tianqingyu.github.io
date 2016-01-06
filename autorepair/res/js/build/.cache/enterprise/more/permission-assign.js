/*TMODJS:{"version":3,"md5":"3895e1fc639e411cfa250e5b1fd65476"}*/
template('enterprise/more/permission-assign',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$string=$utils.$string,view=$helpers.view,title=$data.title,$out='';$out+='<!-- 头部 -->\n';
$out+=$string(view('mods/header', {title:'用户权限'}));
$out+='\n\n<!-- 内容 -->\n<section class="page-main main-enterprise-more-permission-assign">\n  <div class="content">\n    xx\n  </div>\n</section>\n\n<!-- 底部 -->\n';
$out+=$string(view('mods/footer'));
return new String($out);
});