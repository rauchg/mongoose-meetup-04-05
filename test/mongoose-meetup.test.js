
/**
 * Module dependencies.
 */

var mongoose-meetup = require('mongoose-meetup')
  , should = require('should');

module.exports = {
  'test .version': function(){
    mongoose-meetup.version.should.match(/^\d+\.\d+\.\d+$/);
  }
};