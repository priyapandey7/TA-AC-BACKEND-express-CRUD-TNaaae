var express = require('express');
const res = require('express/lib/response');
var path  = require('path');
var usersRouter = require('./routes/users')

var app = express();


//Middileware

app.set('view engine' ,'ejs')
app.set('views' ,path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false}))

app.get('/',(req,res) => {
    res.render('index.ejs')
})
app.use('/users' , usersRouter);

//handle error

app.use (( req,res,next) => {
 res.status(404).send('page not found');
})

//listner
app.listen(3000 , () => {
 console.log('server is listning on port 3k');
});
