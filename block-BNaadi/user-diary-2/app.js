
var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

// Requiring the modules
let indexRouters = require('./routes/index');
let usersRouters = require('./routes/users');

// Connecting to Database
mongoose.connect(
  'mongodb://localhost/user-diary-2',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => {
    console.log(`Connected to database: `, error ? false : true);
  }
);

// Instantiating the Application
var app = express();

// Middlewares
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ exended: false }));
app.use(express.static(__dirname + `/assets`));

//  Handling Routing Middlewares
app.use('/', indexRouters);
app.use('/users', usersRouters);

// Error Handler Middlewares
app.use(`/`, (req, res) => {
  res.send('Page not found :(');
});

app.use(`/`, (err, req, res, next) => {
  res.send(err);
});

// Connecting to Server
app.listen(3000, 'localhost', () => {
  console.log(`Server connected to port 3000!`);
});
