var express = require('express');
var path = require('path');
var studentsRouter = require('./routes/students')
const { send } = require('process');

var app =  express();

//middleware
app.set('view engine', 'ejs');
app.set('views', path.join("views"))

app.use(express.urlencoded({ extended: false}))

//routes

app.get('/', (req, res) => {
  res.render("index.ejs")
})

app.use('/students', studentsRouter);

//handle err
app.use((req,res,next) => {
 res.status(404).send('Page not found')
})


//listner

app.listen(3000, () => {
 console.log('server is listen on port 3k');
});