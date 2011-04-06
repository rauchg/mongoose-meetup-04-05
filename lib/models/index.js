
/**
 * Module dependencies.
 */

const mongoose = require('mongoose');

var UserSchema = require('./user')
  , User;
var mongooseAuth = require('mongoose-auth');

UserSchema.plugin(mongooseAuth, {
    facebook: {
      everyauth: {
          myHostname: 'http://local.host:3000'
        , appId: '111565172259433'
        , appSecret: '85f7e0a0cc804886180b887c1f04a3c1'
        , redirectPath: '/'
        , User: function () {
            return User;
          }
      }
    }
  , password: {
        everyauth: {
            getLoginPath: '/login'
          , postLoginPath: '/login'
          , loginView: 'login.jade'
          , getRegisterPath: '/register'
          , postRegisterPath: '/register'
          , registerView: 'register.jade'
          , redirectPath: '/'
          , User: function () {
              return User;
            }
        }
    }
});

exports.mongooseAuth = mongooseAuth;

User.mongooseAuth = mongooseAuth;
/**
 * Require models
 */

mongoose.model('User', UserSchema);
User = mongoose.model('User');

mongoose.model('BlogPost', require('./blogpost'));

