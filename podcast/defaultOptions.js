module.exports = {
  feedOptions: {
    title: {
      required: true,
      type: String,
      description: 'Title of your site or feed'
    },
    description: {
      required: false,
      type: String,
      description: 'A short description of the feed.'
    },
    generator: {
      required: false,
      type: String,
      description: 'Feed generator.'
    },
    feedUrl: {
      required: true,
      type: String,
      description: 'Url to the rss feed.'
    },
    siteUrl: {
      required: true,
      type: String,
      description: 'Url to the site that the feed is for.'
    },
    imageUrl: {
      required: false,
      type: String,
      description: 'Small image for feed readers to use.'
    },
    docs: {
      required: false,
      type: String,
      description: 'Url to documentation on this feed.'
    },
    author: {
      required: true,
      type: String,
      description: 'Who owns this feed.'
    },
    managingEditor: {
      required: false,
      type: String,
      description: 'Who manages content in this feed.'
    },
    webMaster: {
      required: false,
      type: String,
      description: 'Who manages feed availability and technical support.'
    },
    copyright: {
      required: false,
      type: String,
      description: 'Copyright information for this feed.'
    },
    language: {
      required: false,
      type: String,
      description: 'The language of the content of this feed.'
    },
    categories: {
      required: false,
      type: Array,
      description: 'One or more categories this feed belongs to.'
    },
    pubDate: {
      required: false,
      type: Date,
      description: 'The publication date for content in the feed'
    },
    ttl: {
      required: false,
      type: Number,
      description: 'Number of minutes feed can be cached before refreshing from source.'
    },
    itunesAuthor: {
      required: false,
      type: String,
      description: '(iTunes specific) author of the podcast'
    },
    itunesSubtitle: {
      required: false,
      type: String,
      description: '(iTunes specific) subtitle for iTunes listing'
    },
    itunesSummary: {
      required: false,
      type: String,
      description: '(iTunes specific) summary for iTunes listing'
    },
    itunesOwner: {
      required: false,
      type: Object,
      description: '(iTunes specific) owner of the podcast ( {name:String, email:String} )'
    },
    itunesExplicit: {
      required: false,
      type: Boolean,
      description: '(iTunes specific) specifies if the podcast contains explicit content'
    },
    itunesCategory: {
      required: false,
      type: Array,
      description: '(iTunes specific) Categories for iTunes ( [{text:String, subcats:[{text:String, subcats:Array}]}] )'
    },
    itunesImage: {
      required: false,
      type: String,
      description: '(iTunes specific) link to an image for the podcast'
    },
    itunesType: {
      required: false,
      type: String,
      description: '(iTunes specific) type of podcast (episodic or serial)'
    },
    customNamespaces: {
      required: false,
      type: Object,
      description: 'Put additional namespaces in element (without "xmlns:" prefix)'
    },
    customElements: {
      required: false,
      type: Array,
      description: 'Put additional elements in the feed (node-xml syntax)'
    },
  },
  itemOptions: {
    title: {
      required: true,
      type: String,
      description: 'Title of this particular item.',
    },
    description: {
      required: true,
      type: String,
      description: 'Content for the item. Can contain html but link and image urls must be absolute path including hostname.'
    },
    url: {
      required: true,
      type: String,
      description: 'Url to the item. This could be a blog entry.'
    },
    guid: {
      required: true,
      type: String,
      description: "A unique string feed readers use to know if an item is new or has already been seen. If you use a guid never change it. If you don't provide a guid then your item urls must be unique."
    },
    categories: {
      required: false,
      type: Array,
      description: 'If provided, each array item will be added as a category element'
    },
    author: {
      required: false,
      type: String,
      description: "If included it is the name of the item's creator. If not provided the item author will be the same as the feed author. This is typical except on multi-author blogs."
    },
    date: {
      required: true,
      type: Date,
      description: "The date and time of when the item was created. Feed readers use this to determine the sort order. Some readers will also use it to determine if the content should be presented as unread."
    },
    lat: {
      required: false,
      type: Number,
      description: 'The latitude coordinate of the item.'
    },
    long: {
      required: false,
      type: Number,
      description: 'The longitude coordinate of the item.'
    },
    enclosure: {
      required: false,
      type: Object,
      description: 'Attach a multimedia file to this item.',
      url: {
        required: true,
        type: String,
        description: 'Url to the related file.'
      },
      file: {
        required: false,
        type: String,
        description: 'Path to the related file on the filesystem. Used to fill out size and mime information.',
      },
      size: {
        required: false,
        type: Number,
        description: 'Number of bytes in the file. The length field will defualt to 0 if the size or file fields have not been set.'
      },
      type: {
        required: false,
        type: String,
        description: 'Mime type of the file. Will be guessed from the url if this parameter is not set.'
      },
    },
    itunesAuthor: {
      required: false,
      type: String,
      description: '(iTunes specific) author of the podcast'
    },
    itunesExplicit: {
      required: false,
      type: Boolean,
      description: '(iTunes specific) specifies if the podcast contains explicit content'
    },
    itunesSubtitle: {
      required: false,
      type: String,
      description: '(iTunes specific) subtitle for iTunes listing'
    },
    itunesSummary: {
      required: false,
      type: String,
      description: '(iTunes specific) summary for iTunes listing'
    },
    itunesDuration: {
      required: false,
      type: Number,
      description: '(iTunes specific) duration of the podcast item in seconds'
    },
    itunesKeywords: {
      required: false,
      type: Array,
      description: '(iTunes specific) keywords of the podcast'
    },
    itunesImage: {
      required: false,
      type: String,
      description: '(iTunes specific) link to an image for the item'
    },
    itunesSeason: {
      required: false,
      type: Number,
      description: '(iTunes specific) season number (non-zero integer)'
    },
    itunesEpisode: {
      required: false,
      type: Number,
      description: '(iTunes specific) episode number (non-zero integer)'
    },
    itunesTitle: {
      required: false,
      type: String,
      description: '(iTunes specific) episode title'
    },
    itunesEpisodeType: {
      required: false,
      type: String,
      description: '(iTunes specific) the type of episode (full (default), trailer, bonus)'
    },
    customElements: {
      required: false,
      type: Array,
      description: 'Put additional elements in the item (node-xml syntax)'
    }
  }
}
