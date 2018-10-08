
$(document).ready(function() {

// checking this to see if the javascript is running
console.log("here") 


$(".before").click(function(){
	// checking to make sure this is running
	console.log("clicked")
	$(".before").fadeOut(2000);


});

	$(".after").click(function(){
	console.log("clicked")
	$(".before").fadeIn(2000);


});

  // by default we need to overlap the images

  // when any image is clicked, fade out AND fade the other one in

  // when the graphic is clicked fade the top image out
    
});
