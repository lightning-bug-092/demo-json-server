var express = require('express');
var app = express();
var port = 9029;
var bodyParser = require('body-parser');
var userRouter = require('./routes/users.route.js');
var db = require('./db')


app.set('view engine', 'pug');
app.set('views','./views');
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));
// app.get('/',function(request,response){
//     response.send('<h2>Hello world!</h2><a href="/users">user</a>');
// });
// var users =[
//     {id:1, name:'hius'},
//     {id:2, name:'muc'},
//     {id:3, name:'manh'},
//     {id:4, name:'long'}
// ];
app.get('/',function(req,res){
    res.render('index.pug',{
        name: 'hius',
        users: db.get('users').value()
    })
});
app.use('/users',userRouter);
app.listen(port,function(){
    console.log("sever started....")
})