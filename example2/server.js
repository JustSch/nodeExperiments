var express = require('express');
var app = express();
var fs = require('fs');

app.get('/listUsers',function (req, res){
    fs.readFile(__dirname + '/' + "users.json", 'utf-8',function(err, data){
        console.log(data);
        res.end(data);
    })
})


app.get('/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      var users = JSON.parse( data );
      var user = users["user" + req.params.id] 
      //console.log( user.name );
      res.end(user.name);
   });
})

var server = app.listen(8081, "127.0.0.1", function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("app listening at http://%s:%s", host, port);
})