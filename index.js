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

	// Virus button
	$("#virus").click(function(){
		// Fade out virus, email, otherissue buttons
		$("#virus").hide("blind");
		$("#email").hide("blind");
		$("#otherissue").hide("blind");
		setTimeout(function(){
			// Fade in fin button
			$("#fin").show("blind")
		}, delay);
	});

	// Email button
	$("#email").click(function(){
		// Fade out virus, email, otherissue buttons
		$("#virus").hide("blind");
		$("#email").hide("blind");
		$("#otherissue").hide("blind");
		setTimeout(function(){
			// Fade in fin button
			$("#fin").show("blind")
		}, delay);
	});

	// Other issue button
	$("#otherissue").click(function(){
		// Fade out virus, email, otherissue buttons
		$("#virus").hide("blind");
		$("#email").hide("blind");
		$("#otherissue").hide("blind");
		setTimeout(function(){
			// Fade in fin button
			$("#fin").show("blind")
		}, delay);
	});

	// Finish button: returns to start page
	$("#fin").click(function(){
		// Fade out fin button
		$("#fin").hide("blind");
		setTimeout(function(){
			// Fade in start button
			$("#start").show("fold");
			// Delayed fade in of qpan list
			setTimeout(function(){
				$("#qpan").show("fold");
			}, delay);
			// Delayed fade in of cusinfo panel
			setTimeout(function(){
				$("#cusinfo").show("fold");
			}, delay+210);
		}, delay);
	});
});