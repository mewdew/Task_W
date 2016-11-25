

$(function (){

	$(document).ready(function (event){

		for (var i = 1; i<6; i++) {
		
		var selectid = "qabox" + i;
		console.log(selectid);

		$("#"+selectid).load( "cardsnippet.html", function() {
        console.log( "Load was performed." );
     
        });

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


