/*TMODJS:{"version":6,"md5":"8ff03df09b33d8f00a1e7e601f92d5f7"}*/
template('enterprise/more/permission',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$string=$utils.$string,view=$helpers.view,title=$data.title,goback=$data.goback,$out='';$out+='<!-- 头部 -->\n';
$out+=$string(view('mods/header', {title:'用户权限', goback:false}));
$out+='\n\n<!-- 内容 -->\n<section class="page-main main-enterprise-more-permission">\n  <div class="content">\n    xx\n  </div>\n</section>\n\n<!-- 底部 -->\n';
$out+=$string(view('mods/footer'));
return new String($out);
});