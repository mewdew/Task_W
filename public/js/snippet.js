$("#fet").click(function(){
  $.get('http://localhost:8000/fetchdata', {}, function(data){

      $(document).ready(function(){

        /* Function to render Data on qCards */
        function renderQcards(indx, dIndx){
          if(indx > 5)
            return;
          var selectid = "qabox" + indx;
          var ques = data[dIndx];
          $("#"+selectid).load( "cardsnippet.html", function(){
            /* Question for each card from data obtained */
            $(this).find(".q").html("<h4><b>" + data[dIndx] + "</b></h4>"); 
            /* Answer for the above rendered question */
            $(this).find(".ansBlock").html(data[dIndx+1]);
            /* User who answered the question */
            $(this).find(".uName").html( " " + data[dIndx+2] );
            renderQcards(indx+1, dIndx+3);
           });
        }

        renderQcards(1,0);


        for (var i = 1; i<4; i++) {
    
          var selectId = "invitebox" + i;
          $("#"+selectId).load("invitesnippet.html");

        }

    });

});

});
