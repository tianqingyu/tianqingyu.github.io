/*TMODJS:{"version":2,"md5":"d1291358c45c86882d822be4ba3c7539"}*/
template('enterprise/more/orders-search',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$string=$utils.$string,view=$helpers.view,title=$data.title,$out='';$out+='<!-- 头部 -->\n';
$out+=$string(view('mods/header', {title:'订单查询'}));
$out+='\n\n<!-- 内容 -->\n<section class="page-main main-enterprise-orders-search">\n  <div class="content">\n    <!-- 表单 -->\n    <ul class="forms-list">\n      <li class="clearfix">\n        <label>姓名</label>\n        <input type="text" placeholder=""/>\n      </li>\n      <li class="clearfix">\n        <label>车牌号</label>\n        <input type="text" placeholder=""/>\n      </li>\n      <li class="clearfix">\n        <label>开始时间</label>\n        <input type="text" placeholder=""/>\n      </li>\n      <li class="clearfix">\n        <label>结束时间</label>\n        <input type="text" placeholder=""/>\n      </li>\n    </ul>\n\n    <!-- action -->\n    <div class="action">\n      <a href="orders.html" class="button">查询</a>\n    </div>\n  </div>\n</section>\n\n<!-- 底部 -->\n';
$out+=$string(view('mods/footer'));
return new String($out);
});