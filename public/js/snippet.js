


$("#fet").click(function(){
  $.get('http://localhost:8000/fetchdata', {}, function(data){

        function loadQues(i){
        	console.log("called");
        	$("#q").html(data[i]);
        }



        $(document).ready(function(){

		for (var i = 1, q = 0 ; i<6; i++) {
		
		var selectid = "qabox" + i;
		// qData = data[q];
		// console.log("q = "+q);
		$()

		$("#"+selectid).load( "cardsnippet.html", function(data){
			console.log(data[0]);
			// $("#"+selectid+".q").html("data new");
		});

		$("div.q").html("data new");
		
		// , data, function() {
		// 	console.log("kq = "+data[q]);

		// 	$("#q").html(data[q]) ;   
  //       });

        
        
     }

        for (var i = 1; i<4; i++) {
		
		var selectid = "invitebox" + i;
		console.log(selectid);

		$("#"+selectid).load( "invitesnippet.html", function() {
        console.log( "Load was performed." );
     
        });
     
     }  

    }); 



});

});






