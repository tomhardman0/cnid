const home = require('./home');
const article = require('./article');

const routes = [
    home,
    article
];

module.exports = (app) => routes.forEach(route => route(app));
