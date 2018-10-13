'use strict';

const express = require('express'),
  app = express(),
  morgan = require('morgan'),
  router = require('./routes'),
  mongoose = require('mongoose');

// Connection to database
mongoose.connect('mongodb://localhost/dbusers')
  .then(database => console.log('Database connected'))
  .catch(error => console.log(error));

// Settings
app
  .set('port', process.env.PORT || 3000)
  .set('views', 'views')
  .set('view engine', 'ejs');

// Middlewares
app
  .use(morgan('dev'))
  .use(express.urlencoded({ extended: false }));

// Routes
app
  .use('/', router)
  .use(express.static('assets'));

// Starting server
app.listen(app.get('port'), () => {
  console.log(`Server running on ${app.get('port')}`);
});