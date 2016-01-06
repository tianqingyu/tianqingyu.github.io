/*TMODJS:{"version":9,"md5":"c78cec1e22ba2f9124888af7eb713888"}*/
template('enterprise/more/permission',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$string=$utils.$string,view=$helpers.view,title=$data.title,$out='';$out+='<!-- 头部 -->\n';
$out+=$string(view('mods/header', {title:'用户权限'}));
$out+='\n\n<!-- 内容 -->\n<section class="page-main main-enterprise-more-permission">\n  <div class="content">\n\n  </div>\n</section>\n\n<!-- 底部 -->\n';
$out+=$string(view('mods/footer'));
return new String($out);
});