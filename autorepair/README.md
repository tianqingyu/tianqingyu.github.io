
## 目录结构

+ config
    - 存放 seajs 的配置文件
    - 存放 TmodJS 预编译工具的配置文件
    
+ page
    - 存放直接运行的html文件，每个html文件都对应一个入口，比如登录页面入口（login.html）
    
+ res
    - 该目录存放 css、js、img等资源文件
    - res/js/build/template.js 文件，是所有模板文件，编译后的打包到一起的文件
    
+ templates
    - 该目录存放所有模板文件，类似后端vm文件，模板文件包含了业务逻辑，和数据渲染
    - 该模板文件的语法，参考 artTemplate
    - 使用了 TmodJS 预编译工具，来编译所有的模板文件，编译后的文件打包到一个js文件中，即 res/js/build/template.js

# TmodJS 预编译工具

+ 安装
    - npm install -g tmodjs，mac电脑可能需要sudo命令（ sudo npm install -g tmodjs ）
    
+ 使用
    - 命令行下进到 templates 目录
    - 输入 tmod ，回车即可编译
    - 可编辑 templates 目录下的 package.json 文件，里面的配置信息，参考 TmodJS 的配置说明
    