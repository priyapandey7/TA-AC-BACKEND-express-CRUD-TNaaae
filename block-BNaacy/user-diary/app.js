var express = require('express');
var path = require('path');
var userRouter = require('./routes/users')

//connect to mongoo db
mongoose.connect('mongodb://localhost/user-diary',{
 useNewUrlParser:true,
 useUnifiedTopology:true 
},
(err) => {
console.log(err ? "connected: false":"connected true");
})

//instantiate express app
var app = express();

//middleware
//setup view engine
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

app.use(express.urlencoded({ extended : false}))

//
router.get('/',(req,res) => {
    res.render('index.ejs');
})

app.use('/users',userRouter);

//handle err
app.use((req,res,next) => {
    res.status(404).send('page  not found')
})



//Adding listner
app.listen(3000,() => {
    console.log('server is listening on port 3000k');
})