var express = require('express');
var path = require('path')
var usersRouter = require('./routes/users')
var mongoose = require('mongoose');

//connect to  database
mongoose.connect('mongodb://localhost/user-diary' ,{
    useNewUrlParser :true,
    useUnifiedTopology:true
},
(err) => {
    console.log(err ? 'connected false' : 'connected true');
})

var app = express();

//middlewares

app.set('view engine', 'ejs')
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded({extended : false}));

//routes
app.get('/',(req,res) => {
    res.render('index.ejs')
})

// routing middleware 
//if req comes in /users it take us to usersRouter
app.use("/users",usersRouter);

//Handle err
app.use((req,res,next) => {
 res.status(404).send('page not found')
})
//custom err handler
app.use((err,req,res,next) => {
    res.send(err);
})


app.listen(3000,() =>{
    console.log('Server is listening on port 3k');
});
