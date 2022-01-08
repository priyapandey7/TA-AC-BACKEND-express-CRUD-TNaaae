var express = require('express');
var path = require('path')
var app = express();

app.set('View engine' ,'ejs');
app.set('views', path.join(__dirname, "views"))

app.get('/' ,(req,res) => {
res.render('index.ejs')
})

app.listen(3000, () => {
    console.log('Server is listning on port 3000');
});