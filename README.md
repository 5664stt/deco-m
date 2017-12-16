# deco-m

> 绿色装修网

> #技术点

##### JS/Vue/MUI

##### html/html5

##### CSS/CSS3 预处理器用的CASS 布局用百分比加flex 以100%来做 目的是微信APP一套

## Build Setup

安装sass的依赖包

```
npm install --save-dev sass-loader
//sass-loader依赖于node-sass
npm install --save-dev node-sass
```
安装vue-swiper的依赖包

```
npm install vue-awesome-swiper --save
```

安装vue-resource的依赖包

```
npm install vue-resource --save
```

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


#基本结构

```
├── build                                     //构建脚本目录
├── config                                    //构建配置目录
│   ├── dev.env.js
│   ├── index.js                              //配置文件
│   ├── prod.env.js
│   └── test.env.js
├── node_modules                              //依赖的node工具包目录
├── src                                       //源码目录
│   ├── assets                                //资源目录（存放图片）
│   ├── components                            //组件目录（存放组件）
│   │   ├── hotNew                            //头条页面 和 头条下的子页面
│   │   │   └── hotNew.vue && details
│   │   ├── demo                              //头条页面 和 头条下的子页面
│   │   │   └── demo.vue && demo
│   │   ├── pageHeader.vue                     //页面通用底部组件
│   │   └── appFooter.vue                     //页面通用底部组件
│   ├── router                                //配置路由
│   ├── home.vue                              //页面级Vue组件 主页
│   └── main.js                               //页面入口JS文件（页面配置）
├── static                                    //静态文件目录
├── test                                      //测试文件目录
├── .babelrc
├── .editorconfig
├── .gitignore
├── .postcssrc.js
├── index.html                                //入口页面
├── package.json
├── README.md
└── decoration-m
```

> #基本规范

- 文件命名：

	`html、css、js、font`文件命名方式：采用驼峰命名。

	`图片`文件命名方式：单词与单词之间用`-`连接。

- class命名：

	`css`用到的class：单词与单词之间用`-`连接。（该命名的class可能同时包含样式和行为）

	`js`用到的class：以`J_`为前缀。（该命名方式不包含样式，只包含行为，也不可以为该class赋予样式）
