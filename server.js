var express = require("express");
var app     = express();
var path    = require("path");
var fetch   = require("./connect.js");


app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});


app.get('/fetchdata',function(req,res){
	fetch.fetchQuestions().then(function(data){
	console.log("data", data);
 	res.send(data);	

 	});
 
});


//app.use('/#feed', fetch);

// app.get('/#feed', function(req, res)){
//    res.sendFile(path.join(__dirname+'/index.html'));
// });




app.listen(8000);

console.log("Running at Port 8000");