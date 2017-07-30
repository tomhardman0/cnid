const slug = require('slugify');

module.exports = (article) => {
    article.slug = slug(article.title);
    return article;
};
