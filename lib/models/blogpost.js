
/**
 * Module dependencies.
 */

const Schema = require('mongoose').Schema
    , ObjectId = Schema.ObjectId;

/**
 * Comment Schema.
 */

var Comment = new Schema({
    title   : Date
  , body    : String
});

/**
 * Schema.
 */

var BlogPost = module.exports = new Schema ({
    title     : String
  , content   : String
  , comments  : [Comment]
  , updated   : Date
  , created   : Date
});

/**
 * Dates middleware.
 */

BlogPost.pre('save', function (next) {
  if (this.isNew)
    this.created = Date.now();

  this.updated = Date.now();

  next();
});
