var express = require('express');
var router = express.Router();
var User = require('../models/User');

router.post('/', (req, res, next) => {
  let data = req.body;
  User.create(data, (err, createdUser) => {
    if (err) return next(err);
    console.log(createdUser);
    res.redirect('/users');
  });
});

router.get('/', (req, res) => {
  User.find({}, (err, users) => {
    if (err) return next(err);
    res.render('usersList', { users: users });
  });
});

router.get('/:id', (req, res, next) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    console.log(user);
    res.render('singleUser', { user: user });
  });
});

router.put('/:id', (req, res, next) => {
  var id = req.params.id;
  var data = req.body;
  User.findByIdAndUpdate(id, data, (err, updatedUser) => {
    if (err) return next(err);
    res.redirect('/singleUser');
  });
});

router.delete('/:id', (req, res, next) => {
  let id = req.params.id;
  let data = req.body;
  User.findByIdAndDElete(id, data, (err, updatedUser) => {
    if (err) return next(err);
    res.redirect('/usersList');
  });
});

module.exports = router;