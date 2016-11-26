


$("#fet").click(function(){
  $.get('http://localhost:8000/fetchdata', {}, function(data){

        

        // for (var i = 1, i<6; i++) {
        // 	var qid = "q"+i;
        // 	var q   =  0;

        // 	$(qid).html(data[0]);


        // }

        var loadSnippet = function (selector,snippet) {
        	var q = 0;
        	$("#"+selector).load(snippet);
        	console.log(data[q]);
        	$("#q").html(data[q]);
        	q = q+3;

         };


     
      $(document).ready(function(){


      	 for (var i = 1, q= 0; i<6; i++) {
		
		var selectId = "qabox" + i;
		var snippet = "cardsnippet.html";
		console.log(selectId);

		loadSnippet(selectId,snippet);

        console.log( "Load was performed." );

    }


        for (var i = 1; i<4; i++) {
		
		var selectId = "invitebox" + i;
		$("#"+selectId).load("invitesnippet.html");
        console.log( "Load was performed." );

    }

    });




 

      

    // $(document).ready(function(){
    //     (function implRendering($){

    //     	console.log(indx);
    //     	if(indx < 6){
    //     		console.log("here");
    //     		var selectId = "qabox" + indx;
	   //      	$("#"+selectId).load("cardsnippet.html",qNo, function(){
	   //      	  $("#q").html(data[qNo]);
	   //      	  implRendering(0, qNo );
	   //      	  console.log("Qno: "+ qNo);
		  //       });
    //     	}
    //     })(0,0);

    // });

  //       $(document).ready(function(){

		// for (var i = 1, q = 0 ; i<6; i++, q=q+3) {
		// 	// (function (i,q){
		// 		var selectid = "qabox" + i;

  //      $("#"+selectid).load( "cardsnippet.html", function(res, status, xhr){
  //      	  var response = res;
  //      	  $("#q").html(response);
  //      });

  //    }

  //       for (var i = 1; i<4; i++) {
		
		// var selectid = "invitebox" + i;
		// console.log(selectid);

		// $("#"+selectid).load( "invitesnippet.html", function() {
  //       console.log( "Load was performed." );
  //   });

      
     
  //    }  

  //   }); 



});

});






