const nunjucks = require('nunjucks');
const env = new nunjucks.Environment();
const { join,extname } = require('path');
const { readFileSync } = require('fs');
const { logger, fs, path } = require('@vuepress/shared-utils')





const atomTmplSrc = join(__dirname, '../atom.xml');
const atomTmpl = nunjucks.compile(readFileSync(atomTmplSrc, 'utf8'), env);
const rss2TmplSrc = join(__dirname, '../rss2.xml');
const rss2Tmpl = nunjucks.compile(readFileSync(rss2TmplSrc, 'utf8'), env);


let config = {
  type: 'atom',
  hub: '',
  content: true,
  content_limit: 140,
  content_limit_delim: '',
  autodiscovery: true
};





module.exports = function({atomOptions, posts}) {

  config  = Object.assign(config,atomOptions);

  const template = config.type === 'rss2' ? rss2Tmpl : atomTmpl;

  let url = config.site_url;
  let icon = config.image_url;

  let obj = {
    config,
    url,
    icon,
    posts,
    feed_url: config.feed_url
  }

  return template.render(obj);
};
