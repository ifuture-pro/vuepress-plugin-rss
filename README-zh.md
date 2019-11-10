vuepress-plugin-rss
------------------

想搭建一个自己的博客，发现好好多优秀可生成静态站点的项目
hexo; gatsby; docsify
https://www.staticgen.com/中列举了非常多的优秀项目，非常值得学习

由于本来需要设计部分前端开发，选用了VUE，所以选用了vuepress来生成静态站点。以进一步学习VUE
现在的前端技术也在飞速的发展，特别是在NODEJS诞生后，诸如vue这类的前端框架非常值得学习，完全颠覆了之前的纯js的开发模式，结构化，效率，生态都非常完善

本项目还学习使用了
* yarn publish --access=public
 > 当发布是发现已经有一样包名的项目，可以使用 @ifuture/vuepress-plugin-rss 这种加前缀的方式，但这一般是发布私有项目的，可以在后面添加参数--access=public 发布公有包
* yarn lerna
 > 在vuepress 项目中发现了lerna，是一个管理node项目的工具，可以在本地开发多个依赖模块  
 
 package.json
 ```json
"workspaces": [
    "packages/@vuepress/*",
    "packages/vuepress",
    "packages/docs"
  ],
```

最简单的是使用yarn 即可直接安装包含在packages/other-module/package.js的依赖，非常方便

* 尝试体验 github actions workflow CI/CD