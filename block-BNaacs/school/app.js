var express = require('express');
var mongoose = require('mongoose')

var path = require('path')
var app = express();

//middilewares
app.set('View engine' ,'ejs');
app.set('views', path.join(__dirname, "views"))

//routes
app.get('/' ,(req,res) => {
res.render('index.ejs')
})

//port
app.listen(3000, () => {
    console.log('Server is listning on port 3000');
});