$(document).ready(function()
{
	// delay variable for fading in or out objects
	var delay=600;

	// Initial fade in of start button
	$("#start").show("fold");

	// Delayed fade in of customer queue
	setTimeout(function(){
		$("#qpan").show("fold");
	}, delay);

	// Delayed fade in of customer information
	setTimeout(function(){
		$("#cusinfo").show("fold");
	}, delay+200);

	// Start button trigger
	$("#start").click(function()
	{
		// Fade out qpan, cusinfo, and start
		$("#qpan").hide("blind");
		$("#cusinfo").hide("blind");
		$("#start").hide("blind");
		setTimeout(function(){
			// Fade in the EULA
			$("#eula").show("blind");
		}, delay);
	});

	// Next button for the EULA
	$("#eulaNext").click(function(){
		// Fade out EULA
		$("#eula").hide("blind");
		setTimeout(function(){
			//Fade in OS selection buttons
			$("#mac").show("blind");
			$("#win").show("blind");
			$("#otherOS").show("blind");
		}, delay);
	});

	// Nature of issue for MacOS
	$("#mac").click(function(){
		// Fade out mac, win, and otheros buttons
		$("#mac").hide("blind");
		$("#win").hide("blind");
		$("#otherOS").hide("blind");
		setTimeout(function(){
			// Fade in virus, email, bootfailure, and otherissue buttons
			$("#virus").show("blind");
			$("#email").show("blind");
			$("#bootfailure").show("blind");
			$("#otherIssue").show("blind");
		}, delay);
	});

	// Nature of issue for Windows
	$("#win").click(function(){
		// Fade out mac, win, and otheros buttons
		$("#mac").hide("blind");
		$("#win").hide("blind");
		$("#otherOS").hide("blind");
		setTimeout(function(){
			// Fade in virus, email, bootfailure, and otherissue buttons
			$("#virus").show("blind");
			$("#email").show("blind");
			$("#bootfailure").show("blind");
			$("#otherIssue").show("blind");
		}, delay);
	});

	// Nature of issue for Other OS
	$("#otherOS").click(function(){
		// Fade out mac, win, bootfailure, and otheros buttons
		$("#mac").hide("blind");
		$("#win").hide("blind");
		$("#otherOS").hide("blind");
		setTimeout(function(){
			// Fade in virus, email, bootfailure, and otherissue buttons
			$("#virus").show("blind");
			$("#email").show("blind");
			$("#bootfailure").show("blind");
			$("#otherIssue").show("blind");
		}, delay);
	});

	// Virus button
	$("#virus").click(function(){
		// Fade out virus, email, bootfailure, and otherissue buttons
		$("#virus").hide("blind");
		$("#bootfailure").hide("blind");
		$("#email").hide("blind");
		$("#otherIssue").hide("blind");
		setTimeout(function(){
			// Fade in fin button
			$("#fin").show("blind")
		}, delay);
	});

	// Email button
	$("#email").click(function(){
		// Fade out virus, email, bootfailure, and otherissue buttons
		$("#virus").hide("blind");
		$("#email").hide("blind");
		$("#bootfailure").hide("blind");
		$("#otherIssue").hide("blind");
		setTimeout(function(){
			// Fade in fin button
			$("#fin").show("blind")
		}, delay);
	});

	// Boot Failure button
	$("#bootfailure").click(function(){
		// Fade out virus, email, bootfailure, and otherissue buttons
		$("#virus").hide("blind");
		$("#bootfailure").hide("blind");
		$("#email").hide("blind");
		$("#otherIssue").hide("blind");
		setTimeout(function(){
			//Fade in fin button
			$("#fin").show("blind");
		}), delay;
	});

	// Other issue button
	$("#otherIssue").click(function(){
		// Fade out virus, email, bootfailure, and otherissue buttons
		$("#virus").hide("blind");
		$("#email").hide("blind");
		$("#bootfailure").hide("blind");
		$("#otherIssue").hide("blind");
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