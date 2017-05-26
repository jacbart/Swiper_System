$(document).ready(function()
{
	var delay=1000;

	// Initial fade in of start button
	$("#start").fadeIn("slow");
	$("#start").click(function()
	{
		$("#start").effect("fade");
		setTimeout(function(){
			//Fade in new buttons
			
		}, delay)
	});
});