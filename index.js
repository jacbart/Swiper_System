$(document).ready(function()
{
	var delay=500;

	// Initial fade in of start button
	$("#start").show("fold");
	setTimeout(function(){
		$("#qpan").show("fold");
	}, delay);
	setTimeout(function(){
		$("#cusinfo").show("fold");
	}, delay+210);

	$("#start").click(function()
	{
		$("#qpan").hide("blind");
		$("#cusinfo").hide("blind");
		$("#start").hide("blind");
		setTimeout(function(){
			//Fade in OS selection buttons
			$("#mac").show("blind");
			$("#win").show("blind");
			$("#otheros").show("blind");
		}, delay)
	});

	$("#mac").click(function(){
		$("#mac").hide("blind");
		$("#win").hide("blind");
		$("#otheros").hide("blind");
		setTimeout(function(){
			$("#virus").show("blind");
			$("#email").show("blind");
			$("#otherissue").show("blind");
		}, delay);
	});

	$("#win").click(function(){
		$("#mac").hide("blind");
		$("#win").hide("blind");
		$("#otheros").hide("blind");
		setTimeout(function(){
			$("#virus").show("blind");
			$("#email").show("blind");
			$("#otherissue").show("blind");
		}, delay);
	});

	$("#otheros").click(function(){
		$("#mac").hide("blind");
		$("#win").hide("blind");
		$("#otheros").hide("blind");
		setTimeout(function(){
			$("#virus").show("blind");
			$("#email").show("blind");
			$("#otherissue").show("blind");
		}, delay);
	});
});