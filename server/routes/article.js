const _ = require('lodash');

const articleRoute = (app) => {
	app.get('/:slug', (req, res) => {
        const article = _.find(app.locals.articles, (a) => a.slug == req.params.slug);
		res.render('article', {
			article: article,
			title: article ? article.title : 'No article'
		});
	});
};

module.exports = articleRoute;
