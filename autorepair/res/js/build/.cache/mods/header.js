/*TMODJS:{"debug":true,"version":2,"md5":"3bbe49547428a26b1a4e451774eb5868"}*/
template('mods/header',function($data,$filename
/**/) {
try{'use strict';var $utils=this,$helpers=$utils.$helpers,$line=0,goback=$data.goback,$escape=$utils.$escape,title=$data.title,$out='';$out+='<header class="page-header">\n  <div class="content">\n    <h3 ';
$line=3;if(goback != false){
$out+='class="noback"';
$line=3;}
$out+='>';
$line=3;$out+=$escape(title);
$out+='</h3>\n\n    <div class="left">\n      ';
$line=6;if(goback != false){
$out+='\n      <a href="javascript:window.history.back()" class="icon-arrow-left go-back"></a>\n      ';
$line=8;}
$out+='\n    </div>\n    <div class="right"></div>\n  </div>\n</header>';
return new String($out);}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:'<header class="page-header">\n  <div class="content">\n    <h3 {{if goback != false}}class="noback"{{/if}}>{{title}}</h3>\n\n    <div class="left">\n      {{if goback != false}}\n      <a href="javascript:window.history.back()" class="icon-arrow-left go-back"></a>\n      {{/if}}\n    </div>\n    <div class="right"></div>\n  </div>\n</header>'.split(/\n/)[$line-1].replace(/^\s+/,'')};}
});