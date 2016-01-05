/*TMODJS:{"version":4,"md5":"3bbe49547428a26b1a4e451774eb5868"}*/
template('mods/header',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,goback=$data.goback,$escape=$utils.$escape,title=$data.title,$out='';$out+='<header class="page-header">\n  <div class="content">\n    <h3 ';
if(goback != false){
$out+='class="noback"';
}
$out+='>';
$out+=$escape(title);
$out+='</h3>\n\n    <div class="left">\n      ';
if(goback != false){
$out+='\n      <a href="javascript:window.history.back()" class="icon-arrow-left go-back"></a>\n      ';
}
$out+='\n    </div>\n    <div class="right"></div>\n  </div>\n</header>';
return new String($out);
});