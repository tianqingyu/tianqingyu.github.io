/*TMODJS:{"version":2,"md5":"9f5ada539e4c408fc01a142da4218650"}*/
template('enterprise/more/orders-make',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$string=$utils.$string,view=$helpers.view,title=$data.title,$out='';$out+='<!-- 头部 -->\n';
$out+=$string(view('mods/header', {title:'销售开单'}));
$out+='\n\n<!-- 内容 -->\n<section class="page-main main-enterprise-more-orders-make">\n  <div class="content">\n    <!-- 信息 -->\n    <ul class="list3">\n      <li>\n        <span>客户</span>\n        <span>丁泉城</span>\n      </li>\n      <li>\n        <span>编码</span>\n        <span>30000692</span>\n      </li>\n    </ul>\n\n    <!-- 表单 -->\n    <ul class="forms-list">\n      <li class="clearfix">\n        <label>项目</label>\n        <input type="text" placeholder="请输入..."/>\n      </li>\n      <li class="clearfix">\n        <label>价格</label>\n        <input type="text" placeholder="请输入..."/>\n      </li>\n      <li class="clearfix">\n        <label>数量</label>\n        <input type="text" placeholder="请输入..."/>\n      </li>\n    </ul>\n\n    <div class="links">\n      <a href="javascript:void(0)" class="button button-link clearfix">\n        <span class="left">添中项目</span>\n        <span class="right iconfont">&#xe603;</span>\n      </a>\n      <a href="javascript:void(0)" class="button button-link clearfix">\n        <span class="left">生成订单</span>\n        <span class="right iconfont">&#xe603;</span>\n      </a>\n    </div>\n  </div>\n</section>\n\n<!-- 底部 -->\n';
$out+=$string(view('mods/footer'));
return new String($out);
});