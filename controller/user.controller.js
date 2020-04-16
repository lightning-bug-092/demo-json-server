var shortId = require('shortid');
var db = require('../db');

module.exports.index = function(req,res){
    res.render('./users/users.pug',{
        users: db.get('users').value()
    })
}
module.exports.search = function(req,res){
    var searchValue = req.query.q;
    var userSearch = db.get('users').value().filter(function(user){
        return user.name.toLowerCase().indexOf(searchValue.toLowerCase())!==-1;
    })
    res.render('./users/users.pug',{
        users: userSearch
    })
}
module.exports.view = function(req,res){
    var userId = req.params.userId;
    var userFind = db.get('users').find({id:userId}).value();
    res.render('./users/view.pug',{
        user: userFind
    });
}
module.exports.create = function(req,res){
    res.render('./users/create.pug');
}


module.exports.postCreate = function(req,res){
    req.body.id = shortId.generate();
    db.get('users').push(req.body).write();
    res.redirect('/');
}