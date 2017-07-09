$(document).ready(function()
{
	// delay variable for fading in or out objects
	var delay=600;

	setInterval(openClose, 60000);
	openClose();

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
			// Fade in the Swipe page
			$("#swipe").show("blind");
			buffSwipe();
		}, delay);
	});

	// Swipe Buff Onecard page - don't have card button
	$("#identikey").click(function()
	{
		// Fade out swipe
		$("#swipe").hide("blind");
		// Updating progress of theprogressbar
		$('#theprogressbar').attr('aria-valuenow', '25%').css('width','25%');
		setTimeout(function(){
			// Fade in the EULA
			$("#eula").show("blind");
		}, delay);
	});


	// Next button for the EULA
	$("#eulaNext").click(function(){
		// Fade out EULA
		$("#eula").hide("blind");
		// Updating progress of theprogressbar
		$('#theprogressbar').attr('aria-valuenow', '50%').css('width','50%');
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
		// Updating progress of theprogressbar
		$('#theprogressbar').attr('aria-valuenow', '75%').css('width','75%');
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
		// Updating progress of theprogressbar
		$('#theprogressbar').attr('aria-valuenow', '75%').css('width','75%');
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
		// Updating progress of theprogressbar
		$('#theprogressbar').attr('aria-valuenow', '75%').css('width','75%');
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
		// Updating progress of theprogressbar
		$('#theprogressbar').attr('aria-valuenow', '100%').css('width','100%');
		setTimeout(function(){
			// Fade in fin button
			$("#fin").show("blind");
			finTimer();
		}, delay);
	});

	// Email button
	$("#email").click(function(){
		// Fade out virus, email, bootfailure, and otherissue buttons
		$("#virus").hide("blind");
		$("#email").hide("blind");
		$("#bootfailure").hide("blind");
		$("#otherIssue").hide("blind");
		// Updating progress of theprogressbar
		$('#theprogressbar').attr('aria-valuenow', '100%').css('width','100%');
		setTimeout(function(){
			// Fade in fin button
			$("#fin").show("blind");
			finTimer();
		}, delay);
	});

	// Boot Failure button
	$("#bootfailure").click(function(){
		// Fade out virus, email, bootfailure, and otherissue buttons
		$("#virus").hide("blind");
		$("#bootfailure").hide("blind");
		$("#email").hide("blind");
		$("#otherIssue").hide("blind");
		// Updating progress of theprogressbar
		$('#theprogressbar').attr('aria-valuenow', '100%').css('width','100%');
		setTimeout(function(){
			//Fade in fin button
			$("#fin").show("blind");
			finTimer();
		}), delay;
	});

	// Other issue button
	$("#otherIssue").click(function(){
		// Fade out virus, email, bootfailure, and otherissue buttons
		$("#virus").hide("blind");
		$("#email").hide("blind");
		$("#bootfailure").hide("blind");
		$("#otherIssue").hide("blind");
		// Updating progress of theprogressbar
		$('#theprogressbar').attr('aria-valuenow', '100%').css('width','100%');
		setTimeout(function(){
			// Fade in fin button
			$("#fin").show("blind");
			finTimer();
		}, delay);
	});

	// Finish button: returns to start page
	$("#fin").click(function(){
		// Fade out fin button
		$("#fin").hide("blind");
		// Updating progress of theprogressbar
		$('#theprogressbar').attr('aria-valuenow', '0%').css('width','0%');
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

function buffSwipe(){
	var uuid = "";
	document.onkeydown = function(event)
	{
		var key_code = event.keyCode;

		if (95 < key_code)
		{
			key_code = key_code-48;
		}	
	
		if (key_code == 13)
		{
			uuid += "-Done";
			document.getElementById('id_out').innerHTML = uuid;
			$("#identikey").click();
		}
		else
		{
			uuid += String.fromCharCode(key_code);
		}
	}
}

// If finish button is not pushed then after the set time it will auto click
function finTimer()
{
	setTimeout(function()
	{
		$("#fin").click();
	}, 15000); // 15 second timer
}

function openClose()
{
	var minutes = new Date().getMinutes();
	// var hours = new Date().getUTCHours() - 6;
	var hours = new Date().getHours();
	var day = new Date().getDay();

	if (day >= 1 && day <= 5)
	{
		if (hours >= 16 && minutes >= 30)
		{
			document.getElementById('start').setAttribute('disabled', 'true');
			document.getElementById('start').innerHTML = 'Closed';
			console.log("Closed: wrong hours", hours, minutes);
		}
		else if (hours < 8)
		{
			document.getElementById('start').setAttribute('disabled', 'true');
			document.getElementById('start').innerHTML = 'Closed';
			console.log("Closed: wrong hours", hours, minutes);
		}
		else
		{
			document.getElementById('start').removeAttribute('disabled');
			document.getElementById('start').innerHTML = 'Start';
			console.log("Open: right hours", hours, minutes);
		}
	}
	else
	{
		document.getElementById('start').setAttribute('disabled', 'true');
		document.getElementById('start').innerHTML = 'Closed';
		console.log("Closed: weekend", hours, minutes);
	}
}