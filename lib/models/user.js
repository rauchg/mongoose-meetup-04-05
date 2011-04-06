
/**
 * Module dependencies.
 */

const Schema = require('mongoose').Schema
    , ObjectId = Schema.ObjectId;

/**
 * Schema.
 */

var User = module.exports = new Schema ({
    name    : {
        first   : String
      , last    : String
    }
  , account : {
        email     : String
      , password  : String
    }
  , created : Date
});
