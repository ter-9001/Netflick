var mover;
var i;
var pos;
var dropdown_aparecer=1;
//var a,index, termo;





document.addEventListener("DOMContentLoaded", function(event) {


    
  $("#filmes").click(function(){
     
   if((dropdown_aparecer%2)) 
    $('#dropdown_inicio').css('display','flex')
   else
    $('#dropdown_inicio').css('display','none')

    dropdown_aparecer++;
  })


  

    $("#carrosel").mouseover(function(){
      
       $("#left").css("visibility","visible");
       $("#right").css("visibility","visible");

    })


    $("#right").mouseover(function(){
      
      $("#left").css("visibility","visible");
      $("#right").css("visibility","visible");

   })


   $("#left").mouseover(function(){
      
    $("#left").css("visibility","visible");
    $("#right").css("visibility","visible");

 })


    
    $("#carrosel").mouseout(function(){
      
      $("#left").css("visibility","hidden");
      $("#right").css("visibility","hidden");

   })




     $("#left").click(function (){

     

       for( i =1; i<= 8; i++ ) {
            
        pos = parseInt($("#poster"+i).position().left)


        if( pos <= 260){

            mover = pos + 50 

            $("#poster"+i).animate({
              left: mover + "px"
         })




        }
        else{
          $("#poster"+i).css({left: 15});
         
        }

      }


      })

      $("#right").click(function (){

        for( i =1; i<= 8; i++ ) {
             
         pos = parseInt($("#poster"+i).position().left)

         mover = pos - 50 

       
     
 
        if( pos >= -186){
 
             mover = pos - 50 
 
             $("#poster"+i).animate({
               left: mover + "px"
          })
 
 
 
 
         }
         else{
           $("#poster"+i).css({left: 15});
          
         }
 
       }
 
 
       }) 


})



