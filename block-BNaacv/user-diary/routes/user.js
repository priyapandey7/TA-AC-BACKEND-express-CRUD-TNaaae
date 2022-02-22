const { Router } = require('express');
var express = require('express');
var routes = express.routes


router.get('/',(req,res)=>{
//handle action
res.render('users.ejs')
})

router.get('/new',(req,res)=>{
    //render the create form
    res.render('usersForm.ejs')
})

router.post('/',(req,res)=>{
    //capture form data
})

router.get('/:id',(req,res) => {
    //single user details
    res.render('singleUser.ejs')
})



module.exports = Router;