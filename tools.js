let config = {
  limit: 20
};
module.exports = {
  getValues: function (options = {} ,ctx) {
    config  = Object.assign(config,options);
    let posts = ctx.pages
      .filter(page => page.frontmatter.publish !== false)
      .filter(page => page.title)
      .filter(page => !page.frontmatter.home)
      .map(page => {

        const frontmatter = JSON.parse(JSON.stringify(page.frontmatter));
        const content = page._context.markdown.render(page._strippedContent).html;

        frontmatter.content = frontmatter.content || content;
        frontmatter.description = frontmatter.description || content;
        frontmatter.permalink = page.path;
        return frontmatter
      })
      .sort((a,b) => {return a.date < b.date})
      .slice(0,config.limit);
    return posts;
  }
}
