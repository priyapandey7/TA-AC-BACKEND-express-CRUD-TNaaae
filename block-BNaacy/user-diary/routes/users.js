var express = require('express');
const user = require('../models/user');
var router = express.router();
var users= require('../models/user')

router.get('/',(req,res) => {
    //handle action
    res.render('users.ejs')
})
router.get('/new',(req,res) => {
    //render the capture form
    res.render('userForm.ejs')
})
router.post('/:id',(req,res) => {
    // capture the forn data
    user.create(req.body,(err,user) => {
        if (err) return res.send(err)
        res.send(user)
    })
})
router.get('/:id',(req,res) => {
    //single  user details
})

router.get('/:id/edit',(req,res) => {
    //edit form
})
router.put('/:id',(req,res) => {
    // capture the data  from the update form
})
router.delete('/:id',(req,res) => {
    // delete the user
})

module.exports = router;