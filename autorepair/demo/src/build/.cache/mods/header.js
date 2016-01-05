/*TMODJS:{"version":5,"md5":"1d8959b6a71a057c32311806784b38f7"}*/
template('mods/header',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,goback=$data.goback,$escape=$utils.$escape,title=$data.title,test=$data.test,$out='';$out+='<header class="page-header">\n  <div class="content">\n    <h3 ';
if(goback != false){
$out+='class="noback"';
}
$out+='>';
$out+=$escape(title);
$out+=$escape(test.a);
$out+='</h3>\n\n    <div class="left">\n      ';
if(goback != false){
$out+='\n      <a href="javascript:window.history.back()" class="icon-arrow-left go-back"></a>\n      ';
}
$out+='\n    </div>\n    <div class="right"></div>\n  </div>\n</header>';
return new String($out);
});