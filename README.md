vuepress-plugin-rss
-----------

The feed for vuepress

Support Atom; RSS2; Itunes podcast. 

Install

```bash
npm install vuepress-plugin-rss --save-dev 
```

.vuepress/config.js

```js
module.exports = {
  "plugins": [
      ['rss', {
        type:['atom','rss2','podcast'],
        limit: 20,
        feedOptions : {
          title: 'site title',
          description: 'description',
          site_url: 'https://note.ifuture.pro',
          image_url: 'https://note.ifuture.pro/head.png',
          author: 'author',
          managingEditor: 'author',
          webMaster: 'author',
          copyright: 'author',
          language: 'en'
        }
      }]
    ]
}
```