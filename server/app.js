const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();
const port = process.env.PORT || process.env.NODE_PORT || 4500;

app.use('/assets', express.static(path.join(__dirname, '..', 'client', 'dist')));
app.set('views', path.join(__dirname, '..', 'client', 'content', 'views'));
app.set('view engine', 'pug');

// parse given data and add to app locals. we know this is unusual as it
// would usually come from a db / an api somewhere
const articles = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'data.json')));
// make sure all articles have a slug - i would also assume data like this would have
// a slug prop in more typical circumstances - this *would* be unique
const slugHelper = require('./data/slugify');
app.locals.articles = articles.map(slugHelper);

require('./routes')(app);
app.listen(port, () => console.log(`CNID Test now running on ${port}`));

// export app for testing
module.exports = app;
