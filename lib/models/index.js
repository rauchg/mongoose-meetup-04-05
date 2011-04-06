
/**
 * Module dependencies.
 */

const mongoose = require('mongoose');

/**
 * Require models
 */

mongoose.model('User', require('./user'));

mongoose.model('BlogPost', require('./blogpost'));
