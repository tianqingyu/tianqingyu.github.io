/*TMODJS:{"version":28,"md5":"69c82498812e933d1115cae92ebc4194"}*/
template('enterprise/more/apply',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$string=$utils.$string,view=$helpers.view,title=$data.title,$out='';$out+='<!-- 头部 -->\n';
$out+=$string(view('mods/header', {title:'费用申请'}));
$out+='\n\n<!-- 内容 -->\n<section class="page-main main-enterprise-more-apply">\n  <div class="content">\n    <!-- 表单 -->\n    <ul class="forms-list">\n      <li class="clearfix">\n        <label>部门</label>\n        <span class="forms-select">\n          <span>请选择</span>\n          <img src="../../../res/img/icon/26.png"/>\n        </span>\n      </li>\n      <li class="clearfix">\n        <label>类型</label>\n        <span class="forms-select">\n          <span>请选择</span>\n          <img src="../../../res/img/icon/26.png"/>\n        </span>\n      </li>\n      <li class="clearfix">\n        <label>名称</label>\n        <span class="forms-select">\n          <span>请选择</span>\n          <img src="../../../res/img/icon/26.png"/>\n        </span>\n      </li>\n      <li class="clearfix">\n        <label>金额</label>\n        <input type="text" placeholder="请输入..."/>\n      </li>\n      <li class="clearfix">\n        <label>备注</label>\n        <input type="text" placeholder="请输入..."/>\n      </li>\n      <li class="clearfix">\n        <label>付款日期</label>\n        <span class="forms-calendar">\n          <span>请选择</span>\n          <img src="../../../res/img/icon/27.png"/>\n        </span>\n      </li>\n    </ul>\n\n    <!-- action -->\n    <div class="action">\n      <a href="javascript:void(0)" class="button">提交</a>\n    </div>\n  </div>\n</section>\n\n<!-- 底部 -->\n';
$out+=$string(view('mods/footer'));
return new String($out);
});