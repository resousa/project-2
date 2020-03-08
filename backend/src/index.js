const express = require('express');
const session = require('express-session');
const app = express();
const User = require('../config/user');
const PORT = process.env.PORT || 3001;

// const cors = require('cors');
// const helmet = require('helmet');
// const morgan = require('morgan');

// for body parser. to collect data that sent from the client.
app.use(express.urlencoded({ extended: false }));
// app.use(helmet());
// app.use(cors());
// app.use(morgan('combined'));

// session
app.use(
  session({
    secret: 'Username-Password-Validation',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 1000 * 30
    }
  })
);

// create an object from the class User in the file core/user.js
const user = new User();

// Get the index page
app.get('/', (req, res) => {
  let user = req.session.user;
  // If there is a session named user that means the use is logged in. so we redirect him to home page by using /home route below
  if (user) {
    res.redirect('/dashboard');
    return;
  }
  // IF not we just send the index page.
  res.render('index', { title: 'Project-2' });
});

// Get home page
app.get('/dashboard', (req, res) => {
  let user = req.session.user;

  if (user) {
    res.render('/dashboard', { opp: req.session.opp, name: user.fullname });
    return;
  }
  res.redirect('/');
});

// Post login data
app.post('/login', (req, res) => {
  // The data sent from the user are stored in the req.body object.
  // call our login function and it will return the result(the user data).
  user.login(req.body.username, req.body.password, function(result) {
    if (result) {
      // Store the user data in a session.
      req.session.user = result;
      req.session.opp = 1;
      // redirect the user to the home page.
      res.redirect('/dashboard');
    } else {
      // if the login function returns null send this error message back to the user.
      res.send('Username/Password incorrect!');
    }
  });
});

// Post register data
app.post('/register', (req, res, next) => {
  // prepare an object containing all user inputs.
  let userInput = {
    username: req.body.username,
    fullname: req.body.fullname,
    password: req.body.password
  };
  // call create function. to create a new user. if there is no error this function will return it's id.
  user.create(userInput, function(lastId) {
    // if the creation of the user goes well we should get an integer (id of the inserted user)
    if (lastId) {
      // Get the user data by it's id. and store it in a session.
      user.find(lastId, function(result) {
        req.session.user = result;
        req.session.opp = 0;
        res.redirect('/home');
      });
    } else {
      console.log('Error creating a new user ...');
    }
  });
});

// Get loggout page
app.get('/loggout', (req, res, next) => {
  // Check if the session is exist
  if (req.session.user) {
      // destroy the session and redirect the user to the index page.
      req.session.destroy(function () {
          res.redirect('/');
      });
  }
});

// Errors => page not found 404
app.use((req, res, next) => {
  var err = new Error('Page not found');
  err.status = 404;
  next(err);
});

// Handling errors (send them to the client)
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err.message);
});

// Setting up the server
app.listen(PORT, function() {
  console.log('Server listening on: http://localhost:' + PORT);
});

module.exports = app;
