var express = require('express');
var app = express();
var port = 9029;
app.get('/',function(request,response){
    response.send('<h2>Hello world!</h2>');
});
app.listen(port,function(){
    console.log("sever started....")
})