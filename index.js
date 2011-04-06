
/**
 * Bootstrap.
 */

require.paths = require.paths.unshift(__dirname + '/../node_modules');

/**
 * Require app
 */

var app = require('./lib/mongoose-meetup')();

/**
 * Listen on port 80.
 */

app.listen(80);
