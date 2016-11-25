
//Connecting to DB

var express = require('express');
var router  = express.Router();
var Q= require("q");

var mysql = require("mysql"); 


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'winklDB'
});

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
  randomGeneration();
  // connection.query("Select * from questions", function(err, results){
  //   if(err) throw err
  //   console.log(results[0].qText);
  // });
  console.log()
//  fetchQuestions();
  });


// generate random index
var arr = [];
function randomGeneration(){
    while(arr.length < 5){
        var randomnumber = Math.ceil(Math.random()*10)
        if(arr.indexOf(randomnumber) > -1) continue;
        arr[arr.length] = randomnumber;
    }
    console.log(arr);
}


exports.temp = function(){

var defer =Q.defer()

    defer.resolve("dataasdasd");
    return defer.promise;
}


// get data corresponding to the number
exports.fetchQuestions = function(){

    randomGeneration();
var flag =0;
var defer =Q.defer()

var finalObj = [];
    for (var i =0; i < arr.length; i++) {
        
        var qIdx   = arr[i];
        var qQuery = "select * from questions where qId = ?";
        var aQuery = "select * from answers where qId = ?";
        var uQuery = "select * from users where uId = (select uId from answers where qId = ?)";
        
        var type   
        var tAns   
        var q      
        var tImg   
        var imgSrc 
        var uName  
        var tag    
        var a      

        connection.query(qQuery,qIdx, function(err, results){
            if(err) throw err
            ques = results[0].qText;
            finalObj.push(ques);
           // console.log(ques);
          
            
        });

        connection.query(aQuery,qIdx, function(err, results){
            if(err) throw err
            ans = results[0].aText;
            finalObj.push(ans);
           
           // console.log(ans);
            
        });

        connection.query(uQuery,qIdx, function(err, results){
            if(err) throw err
            usrF = results[0].firstName;
            usrL = results[0].lastName;
            usr = usrF+" "+usrL;
             finalObj.push(usr);
                 console.log(usr,i);
           
                       
            
        });


var check =  setInterval(function(){

if(finalObj.length==15){
    clearInterval(check);
   defer.resolve(finalObj);
//flag=1
}



},100);








        // document.getElemenetById(#type).innerHTML   = type;
        // document.getElemenetById(#tAns).innerHTML   = tAns;
        // document.getElemenetById(#q).innerHTML      = q;
        // document.getElemenetById(#imgSrc).innerHTML = imgSrc;
        // document.getElemenetById(#uName).innerHTML  = uName;
        // document.getElemenetById(#tag).innerHTML    = tag;
        // document.getElemenetById(#a).innerHTML      = a;
         
    }
    return defer.promise;

}

//insert data into HTML
// var insertHtml = function (selector, html) {
//   var targetElem = document.querySelector(selector);
//   targetElem.innerHTML = html;
// };


// var cardHTML = "cardsnippet.html";


//module.exports = router;






