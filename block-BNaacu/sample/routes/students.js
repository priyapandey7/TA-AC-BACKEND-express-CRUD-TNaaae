var express = require('express');

var router = express.Router()

router.get('/new', (req,res) => {
    res.render('studentsForm')
})

router.post('/' , (req,res) => {
    res.send(req.body)
})

router.get('/' ,(req,res) =>{
    res.render('list',{ list: ["ankit", "suraj", "prashant", "ravi"] })
})

router.get('/:id',(req,res) => {
    res.render('studentdetails', {
        student: { name: "rahul", email: "rahul@altcampus.io" },
      })
})

module.exports = router;