const { logger, fs, path } = require('@vuepress/shared-utils');
const {getValues} = require("./tools");
const podcast = require("./podcast/feed");
const atom = require('./atom');


async function writeFile ({outDir, filename, xml})
{
  const feedFilePath = path.resolve(outDir, filename);
  fs.writeFile(feedFilePath, xml);
  logger.success('Podcast ' + filename +' has been generated!');
}

module.exports = (options = {}, ctx) => ({
  name: "vuepress-plugin-rss",
  generated(){
    let posts = getValues({},ctx);
    options.type.forEach(type => {
      type = type.toLowerCase();
      let filename = type + '.xml';
      options.feedOptions.feed_url = options.feedOptions.site_url + '/' + filename;
      if (type === 'atom' || type === 'rss2') {
        options.type = type;
        writeFile({
          outDir: ctx.outDir,
          filename: filename,
          xml: atom({atomOptions:options.feedOptions,posts:posts})
        });
      }else if (type === 'podcast') {
        writeFile({
          outDir: ctx.outDir,
          filename: filename,
          xml: podcast({feedOptions: options.feedOptions, pages: posts})
        })
      }
    });

  }
})
