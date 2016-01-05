/*TMODJS:{"version":2,"md5":"28a87f8eb80101ec7c5df40f1f368fa1"}*/
template('enterprise/more/orders-stock',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$string=$utils.$string,view=$helpers.view,title=$data.title,$out='';$out+='<!-- 头部 -->\n';
$out+=$string(view('mods/header', {title:'库存选择'}));
$out+='\n\n<!-- 内容 -->\n<section class="page-main main-enterprise-more-orders-stock">\n  <div class="content">\n    <!-- 搜索 -->\n    <div class="search">\n      <div class="user-input clearfix">\n        <label>选择</label>\n        <input type="text" placeholder="请输入..."/>\n      </div>\n      <div class="action">\n        <a href="javascript:void(0)" class="button">搜索</a>\n      </div>\n    </div>\n\n    <!-- 列表 -->\n    <ul class="results">\n      <li>\n        <span class="img"></span>\n        <span>米其林255/40 R18 99Y</span>\n      </li>\n      <li>\n        <span class="img"></span>\n        <span>精轴传动轴厂家汽车配件EQ140</span>\n      </li>\n      <li>\n        <span class="img"></span>\n        <span>通福奔宝汽配 奔驰宝马配件 汽车</span>\n      </li>\n      <li>\n        <span class="img"></span>\n        <span>江苏冠顺三相异步电动机</span>\n      </li>\n      <li>\n        <span class="img"></span>\n        <span>精轴传动轴厂家汽车配件EQ140</span>\n      </li>\n      <li>\n        <span class="img"></span>\n        <span>精轴传动轴厂家汽车配件EQ140</span>\n      </li>\n    </ul>\n  </div>\n</section>\n\n<!-- 底部 -->\n';
$out+=$string(view('mods/footer'));
return new String($out);
});