$(document).ready(function()
{
	var delay=1000;

	// Instructions popover menu call
	$("#instr").popover();

	// Initial fade in of buttons
	$("#start").fadeIn("slow");
	$("#start").click(function()
	{
		$("#start").effect("fade");
	});
});