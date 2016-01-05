/*TMODJS:{"version":3,"md5":"2c49ad3610fc47b19f696b829561fb22"}*/
template('enterprise/reception/index',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$string=$utils.$string,view=$helpers.view,title=$data.title,goback=$data.goback,$out='';$out+='<!-- 头部 -->\n';
$out+=$string(view('mods/header', {title:'接车', goback:false}));
$out+='\n\n<!-- 内容 -->\n<section class="page-main main-enterprise-reception bg03">\n  <div class="content">\n    <!-- 拍照 -->\n    <div class="photo">\n      <div class="action">\n        <img src="../../../res/img/icon/11.png"/>\n        <div>拍照或上传待修车辆</div>\n      </div>\n      <div class="view"></div>\n    </div>\n\n    <!-- 表单 -->\n    <ul class="forms-list">\n      <li class="clearfix">\n        <label>送修人</label>\n        <input type="text" placeholder="4S店请用真实姓名"/>\n      </li>\n      <li class="clearfix">\n        <label>车型</label>\n        <input type="text" placeholder="请用注明类别"/>\n      </li>\n      <li class="clearfix">\n        <label>公里数</label>\n        <input type="text" placeholder="单位是km/h(公里/小时)"/>\n      </li>\n      <li class="clearfix">\n        <label>车牌号</label>\n        <input type="text" placeholder="例：京A12345"/>\n      </li>\n      <li class="clearfix">\n        <label>故障描述</label>\n        <input type="text" placeholder="请简单概述目前情况"/>\n      </li>\n    </ul>\n\n    <!-- action -->\n    <div class="action">\n      <a href="nav.html" class="button">接车</a>\n    </div>\n  </div>\n</section>\n\n<!-- 底部 -->\n';
$out+=$string(view('mods/footer'));
return new String($out);
});