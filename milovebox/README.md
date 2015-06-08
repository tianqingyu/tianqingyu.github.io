
## CSS3新特性使用
> 大量使用了H5的CSS3新特性，因此不兼容哪些低版本浏览器，包括部分手机浏览器

1. calc()方法
2. :last-child
3. :only-child
4. border-radius
5. background-size
6. transform: rotate(), translate()
7. flex 弹性框布局

## PNG24图片的使用
> 现代浏览器几乎都支持PNG24，但还是有部分浏览器不支持；而有些支持程度不够，尤其表现在对PNG半透明渲染，出现白色毛边等现象

## 浏览器兼容性列表
1. Chrome
2. Safari
3. Firefox（最新的firefox不支持 line-height: calc(100% - 10px)的写法）
4. IE11+
5. 手机Chrome（android4.4+都支持）
6. 手机Safari（IOS7+都支持）
7. ios版微信6.1
8. Nexus4+的微信6.1

**不支持：**

1. 有些android版微信6.1内置了QQ浏览器X5内核（比如MX4  PRO），X5内核是基于Webkit内核，但是对CSS3的支持程度太低，所以不兼容
2. 手机或PC浏览器版本太低，对css3支持程度太少，都不支持

## PC上如何运行DEMO
1. 打开浏览器（这里推荐最新版Chrome），访问：http://tianqingyu.github.io/milovebox/
2. 打开开发者工具，如图

   ![screenshot](http://img1.tbcdn.cn/L1/461/1/1cf90360c794bf42a0b889f3ba5e78fd4d07c807)
3. 面板置于右侧 ![screenshot](http://img4.tbcdn.cn/L1/461/1/5db3d964067cefebc0f9fe7b8f8b88dcd607fc96)
4. 点击该按钮，开启手机调试模式 ![screenshot](http://img2.tbcdn.cn/L1/461/1/521309106b4b45a3c6be966713cf2e903453b47a)
5. 模拟手机，选择**HTC One X，EVO LTE**，该手机分辨率是标准的360x640

   ![screenshot](http://img1.tbcdn.cn/L1/461/1/1ebdaa8cb622c25d070875d30ad3449dcd0758ea)
6. done!

## 手机微信上如何运行该DEMO
1. iphone或Nexus，打开微信
2. 点击微信右侧的**+**号，选择**扫一扫**
3. 扫描该二维码：
   
   ![screenshot](http://img2.tbcdn.cn/L1/461/1/1386cc51b1e9ce9edcd2d7f48e73404ae3736ca7)
4. done!

## 页面效果图
![screenshot](http://img4.tbcdn.cn/L1/461/1/b84c3bf238cca64c8709db349639f17d1b536771)
