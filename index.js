$(document).ready(function()
{
	// delay variable for fading in or out objects
	var delay=500;

	// Initial fade in of start button
	$("#start").show("fold");

	// Delayed fade in of customer queue
	setTimeout(function(){
		$("#qpan").show("fold");
	}, delay);

	// Delayed fade in of customer information
	setTimeout(function(){
		$("#cusinfo").show("fold");
	}, delay+210);

	// Start button trigger
	$("#start").click(function()
	{
		// Fade out qpan, cusinfo, and start
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

	// Nature of issue for MacOS
	$("#mac").click(function(){
		// Fade out mac, win, and otheros buttons
		$("#mac").hide("blind");
		$("#win").hide("blind");
		$("#otheros").hide("blind");
		setTimeout(function(){
			// Fade in virus, email, and otherissue buttons
			$("#virus").show("blind");
			$("#email").show("blind");
			$("#otherissue").show("blind");
		}, delay);
	});

	// Nature of issue for Windows
	$("#win").click(function(){
		// Fade out mac, win, and otheros buttons
		$("#mac").hide("blind");
		$("#win").hide("blind");
		$("#otheros").hide("blind");
		setTimeout(function(){
			// Fade in virus, email, and otherissue buttons
			$("#virus").show("blind");
			$("#email").show("blind");
			$("#otherissue").show("blind");
		}, delay);
	});

	// Nature of issue for Other OS
	$("#otheros").click(function(){
		// Fade out mac, win, and otheros buttons
		$("#mac").hide("blind");
		$("#win").hide("blind");
		$("#otheros").hide("blind");
		setTimeout(function(){
			// Fade in virus, email, and otherissue buttons
			$("#virus").show("blind");
			$("#email").show("blind");
			$("#otherissue").show("blind");
		}, delay);
	});
});