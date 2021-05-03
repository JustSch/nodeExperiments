//const { response } = require('express');
var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer = require('multer');

var urlEncodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp'}).any());

app.get('/indexu.htm', function (req, res) {
    res.sendFile( __dirname + "/" + "indexu.htm" );
 })

app.post('/file_upload', function (req, res) {
    console.log(req.files);
    console.log(req.files[0].originalname);
    console.log(req.files[0].path);
    console.log(req.files[0].mimetype);
    var file = __dirname + "/" + req.files[0].originalname;
    
    fs.readFile( req.files[0].path, function (err, data) {
       fs.writeFile(file, data, function (err) {
          if( err ) {
             console.log( err );
             } else {
                var response = {
                   message:'File uploaded successfully',
                   filename:req.files[0].originalname
                };
             }
          
          console.log( response );
          res.end( JSON.stringify( response ) );
       });
    });
})
 

app.get('/index.htm',function(req, res){
    res.sendFile(__dirname + "/" + "index.htm");
})

app.get('/process_get', function(req,res) {
    let response = {
        first_name:req.query.first_name,
        last_name:req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

app.get('/indexp.htm',function(req, res){
    res.sendFile(__dirname + "/" + "indexp.htm");
})

app.post('/process_post', urlEncodedParser,function(req,res) {
    let response = {
        first_name:req.body.first_name,
        last_name:req.body.last_name        
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

app.get('/',function(req,res) {
    console.log("Got a GET request for the homepage");
    res.send('Hello, World!');
})

app.post('/',function(req, res) {
    console.log("Got a POST request for the homepage");
    res.send('Hello POST');
})

app.delete('/del_user',function(req, res){
    console.log("Got a DELETE request for /del_user");
    res.send('Hello Delete');
})


app.get('/list_user', function (req, res) {
    console.log("Got a GET request for /list_user");
    res.send('Page Listing');
})

app.get('/ab*cd', function(req, res) {   
    console.log("Got a GET request for /ab*cd");
    res.send('Page Pattern Match');
})
var server = app.listen(8081, "127.0.0.1",function (){
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listen at http://%s:%s", host, port);
})