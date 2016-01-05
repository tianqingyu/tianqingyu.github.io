/*TMODJS:{"version":2,"md5":"99cfc36911297f41eb9ce3e35598f7c3"}*/
template('enterprise/more/orders-detail',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$string=$utils.$string,view=$helpers.view,title=$data.title,$out='';$out+='<!-- 头部 -->\n';
$out+=$string(view('mods/header', {title:'订单详情'}));
$out+='\n\n<!-- 内容 -->\n<section class="page-main main-enterprise-more-orders-detail">\n  <div class="content">\n    <ul class="list3">\n      <li>\n        <span>客户</span>\n        <span>丁泉城</span>\n      </li>\n      <li>\n        <span>编码</span>\n        <span>30000692</span>\n      </li>\n    </ul>\n\n    <div class="table">\n      <table>\n        <colgroup>\n          <col class="col-1"/>\n          <col class="col-2"/>\n          <col class="col-3"/>\n        </colgroup>\n        <thead>\n          <th>项目</th>\n          <th>数量/件</th>\n          <th>价格/元</th>\n        </thead>\n        <tbody>\n          <tr>\n            <td>四轮定位</td>\n            <td>1</td>\n            <td>1000</td>\n          </tr>\n          <tr>\n            <td>补胎</td>\n            <td>1</td>\n            <td>781</td>\n          </tr>\n          <tr>\n            <td>洗车</td>\n            <td>1</td>\n            <td>15</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <div class="action">\n      <a href="javascript:void(0)" class="button">接车</a>\n    </div>\n  </div>\n</section>\n\n<!-- 底部 -->\n';
$out+=$string(view('mods/footer'));
return new String($out);
});