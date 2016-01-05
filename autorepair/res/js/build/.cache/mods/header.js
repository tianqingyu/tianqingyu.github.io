/*TMODJS:{"version":9,"md5":"0a33e138445442d1741e66dc77a5cba8"}*/
template('mods/header',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,goback=$data.goback,$escape=$utils.$escape,title=$data.title,exist=$data.exist,$out='';$out+='<header class="page-header">\n  <div class="content">\n    <h3 ';
if(goback != false){
$out+='class="noback"';
}
$out+='>';
$out+=$escape(title);
$out+='</h3>\n\n    <div class="left">\n      ';
if(goback != false){
$out+='\n      <a href="javascript:window.history.back()" class="icon-arrow-left go-back"></a>\n      ';
}
$out+='\n    </div>\n    <div class="right">\n      ';
if(exist == true){
$out+='\n      <a href="../../account/login/index.html">退出</a>\n      ';
}
$out+='\n    </div>\n  </div>\n</header>';
return new String($out);
});