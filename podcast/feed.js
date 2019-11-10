const Podcast = require('podcast');

function buildItems (defaultOptions, itemOptions) {
  const result = {}

  Object.keys(defaultOptions).forEach(defaultOptKey => {
    if (typeof itemOptions[defaultOptKey] !== 'undefined') {
      result[defaultOptKey] = itemOptions[defaultOptKey]
    } else {
      if (defaultOptions[defaultOptKey].required === true) {
        throw new Error(`Podcast option **${defaultOptKey}** not provided!`)
      }
    }
  })

  return result;
}

module.exports = function({feedOptions, pages}) {
  const feed = new Podcast(feedOptions)
  const defaultOptions = require('./defaultOptions')
  const podcastPagesFrontmatter = pages
    .map(page => {
      page.url = feedOptions.site_url + page.permalink;
      page.guid = page.permalink;
      return page;
    })


  const podcastItems = podcastPagesFrontmatter
    .map(frontmatter => buildItems(defaultOptions.itemOptions, frontmatter));


  podcastItems.forEach(item => feed.addItem(item));


  return feed.buildXml();
};




