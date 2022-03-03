var express = require('express');
var router = express.Router();
var User = require('../models/User')

router.get('/',(req,res,next) => {
    //handle actions
    //.find method always return array of users
    User.find({},(err,users) => {
     if(err) return next(err)
     res.render('users.ejs',{users: users})
    })
});

//new user form create form
router.get('/new',(req,res) => {
//render the create form
res.render('userForm.ejs')
});

//once the create form is submmited we need to grab the data and save  it to the database.

router.post('/',(req,res) => {
    //capture the form data
    // console.log(req.body);
    User.create(req.body,(err, user) => {
         if(err) return res.redirect('/users/new')
         res.redirect('/');
    })
})

//getting a single user details
//id is placeholder value.its a variable ,its can capture anything so always put last in id.
router.get('/:id',(req,res,next) => {
    var id = req.params.id;
    User.findById(id,(err,user) => {
        if(err) return next(err)
        res.render('singleUser.ejs',{user: user})
    })
})

//to handle the update user we need 2 things 1st we need to render the form,so user is able to update the form
//2nd we submitted the updated data in capture on the server side
router.get('/:id/edit',(req,res,next) =>{
    // edit form
    var id = req.params.id;
    User.findById(id,(err,user) => {
        if(err) return next(err)
        res.render('editUser.ejs',{user: user})
    })
});
//crete form for the user we use post http method
//when we use to update the user we use put or patch http method

router.post('/:id',(req,res) => {
    //capture the data from the  update form
    var id = req.params.id;
    user.findByIdAndUpdate(id,req.body,(err, updatedUser) => {
        if(err) return next(err);
        res.redirect('/users')
    })
})
module.exports =router;