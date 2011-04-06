
/*!
 * mongoose-meetup
 * Copyright(c) 2011 Guillermo Rauch <guillermo@learnboost.com>
 * MIT Licensed
 */

/**
 * Library version.
 */

exports.version = '0.0.1';

/**
 * Module dependencies.
 */

const express = require('express')
    , stylus = require('stylus')
    , mongoose = require('mongoose');

// models

require('./models');

/**
 * Exports.
 */

module.exports = function () {

  /**
   * Create app. Allows for easy spawning of multiple apps for testing.
   */

  const app = express.createServer()
      , db = mongoose.createConnection('mongodb://localhost/meetup');

  /**
   * Models.
   */
  
  const User = db.model('User')
      , BlogPost = db.model('BlogPost');

  /**
   * Middleware.
   */
  
  app.configure(function () {
    // general
    app.use(express.cookieParser());
    app.use(express.bodyParser());
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }))
    app.use(express.session({ secret: 'imnotwearingunderwear' }));

    // stylus
    app.use(stylus.middleware({
          src: __dirname + '/../views'
        , dest: __dirname + '/../public'
    }));

    // static
    app.use(express.static(__dirname + '/../public'));
  });

  /**
   * Settings
   */

  app.configure(function () {
    app.set('views', __dirname + '/../views');
    app.set('view engine', 'jade');
  });
  
  /**
   * Save reference to mongoose connection.
   */
  
  app.configure(function () {
    app.set('db', db);
  });

  /**
   * Dynamic helpers.
   *
   * @param text
   */
  
  app.dynamicHelpers({
    messages: require('express-messages')
  });

  /**
   * Main route.
   */
  
  app.get('/', function (req, res, next) {
    BlogPost.find({}, function (err, posts) {
      if (err) return next(err);

      res.render('index', {
          posts: posts
      });
    });
  });

  /**
   * Search page.
   */
  
  app.get('/search', function (req, res, next) {
    res.render('search');
  });

  /**
   * Search blog posts.
   */
  
  app.get('/search/do', function (req, res, next) {
    // 1: add an index
    // 2: perform regexp search
  });

  /**
   * Create blog post
   */

  app.post('/create', function (req, res, next) {
    var post = new BlogPost(req.param('post'));
    post.save(function (err) {
      if (err) return next(err);

      req.flash('info', 'Created!');

      res.redirect('/');
    });
  });

  /**
   * Delete blog post.
   */
  
  app.get('/delete/:id', function (req, res, next) {
    // 1: find blog post
    // 2: remove
  });
  
  /**
   * Create comment.
   */
  
  app.post('/comment/:id', function (req, res, next) {
    // 1: define schema
    // 2: retrieve blog post
    // 3: insert embedded doc
    // 4: fun, fun, fun, fun!
  });

  /**
   * Return app. 
   */
  
  return app;

};
