const homeRoute = (app) => {
	app.get('/', (req, res) => {
		res.render('index', {
			title: 'CNID Test - Contents',
			articles: app.locals.articles
		});
	});
};
module.exports = homeRoute;
