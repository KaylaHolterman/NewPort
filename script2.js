function openNav() {
    document.getElementById("navi").style.width = "90%";
}

function closeNav() {
    document.getElementById("navi").style.width = "0%";
}

 
   $(document).ready(function() {
	$("img").on("click", function(){
	});
	
	$("a").on("click",function(){

		
var imageLink = $(this).data("img-url");

   	$("#lightbox-img").attr('src', imageLink);

  	$(".lightboxEx").show();

  	$(".lightboxEx").on("click",function(){
      $(".lightboxEx").hide();
 });
   });
     });

