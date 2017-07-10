$(document).ready(function()
{
	// Display the Navbar
	globalNavbar();

	// Delay variable for fading in or out objects
	var delay=600;

	// Sets the run interval of the openClose function to every 60 seconds
	setInterval(openClose, 60000);
	// Sets the start button to open (8:00-16:30) or closed
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


// Reads buff onecard and grabs the UUID
function buffSwipe()
{
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
			// Temp way of activating next page
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
	// Grabs current minutes from the computer's clock
	var minutes = new Date().getMinutes();

	// Grabs the UTC hours and subtracts 6 hours
	var hours = new Date().getUTCHours() - 6;

	// Grabs current hour form the computer's clock
	// var hours = new Date().getHours();

	// Grabs the current day of the week from the computer
	var day = new Date().getDay();

	// If between monday and friday
	if (day >= 1 && day <= 5)
	{
		// If hours is 16 or higher and 30 minutes or higher
		if (hours >= 16 && minutes >= 30)
		{
			// Sets element start to disabled
			document.getElementById('start').setAttribute('disabled', 'true');
			// Sets the text in  element start to Closed
			document.getElementById('start').innerHTML = 'Closed';
			// Displasys "Closed: wrong hours" and the hours, minutes variables to the console log
			console.log("Closed: wrong hours", hours, minutes);
		}
		// If hours is greater than 
		else if (hours > 16)
		{
			// Sets element start to disabled
			document.getElementById('start').setAttribute('disabled', 'true');
			// Sets the text in  element start to Closed
			document.getElementById('start').innerHTML = 'Closed';
			// Displasys "Closed: wrong hours" and the hours, minutes variables to the console log
			console.log("Closed: wrong hours", hours, minutes);
		}
		// If hours is less than 8
		else if (hours < 8)
		{
			// Sets element start to disabled
			document.getElementById('start').setAttribute('disabled', 'true');
			// Sets the text in  element start to Closed
			document.getElementById('start').innerHTML = 'Closed';
			// Displasys "Closed: wrong hours" and the hours, minutes variables to the console log
			console.log("Closed: wrong hours", hours, minutes);
		}
		// If during open hours: 8:00-16:30
		else
		{
			// Removes attribute disabled from element start
			document.getElementById('start').removeAttribute('disabled');
			// Sets the text in element start to Start
			document.getElementById('start').innerHTML = 'Start';
			// Displasys "Open: right hours" and the hours, minutes variables to the console log
			console.log("Open: right hours", hours, minutes);
		}
	}
	// If during the weekend
	else
	{
		// Sets element start to disabled
			document.getElementById('start').setAttribute('disabled', 'true');
			// Sets the text in  element start to Closed
			document.getElementById('start').innerHTML = 'Closed';
			// Displasys "Closed: weekend" and the hours, minutes variables to the console log
			console.log("Closed: weekend", hours, minutes);
	}
}

// Function to create a navbar that is global to all html pages
function globalNavbar()
{
	var bar = `
	<div class="row">
			<!-- Top bar with the CU Buffs logo on it -->
			<nav class="navbar navbar-fixed-top">
				<div class="container-fluid">
					<div class="navbar-header">
						<!-- CU Buffs logo -->
						<a class="navbar-brand" href="admin.html">
							<img src="CU-Buffs.png">
						</a>
					</div>
					<!-- Title for the navbar -->
					<h3>Walk-In Computer Support</h3>
				</div>
			</nav>
		</div>`;
	// At the beginning of the body display the navbar
	$('body').prepend(bar);
}

// function setHours()
// {
// 	var now = new Date();
// 	var weekday = new Array(7);
// 	weekday[0] = "Sunday";
// 	weekday[1] = "Monday";
// 	weekday[2] = "Tuesday";
// 	weekday[3] = "Wednesday";
// 	weekday[4] = "Thursday";
// 	weekday[5] = "Friday";
// 	weekday[6] = "Saturday";


// }

function getTimes()
{
	var mh = document.getElementById("m-selHour").value;
	var th = document.getElementById("t-selHour").value;
	var wh = document.getElementById("w-selHour").value;
	var thh = document.getElementById("th-selHour").value;
	var fh = document.getElementById("f-selHour").value;
	var sah = document.getElementById("sa-selHour").value;
	var suh = document.getElementById("su-selHour").value;

	var mm = document.getElementById("m-selMin").value;
	var tm = document.getElementById("t-selMin").value;
	var wm = document.getElementById("w-selMin").value;
	var thm = document.getElementById("th-selMin").value;
	var fm = document.getElementById("f-selMin").value;
	var sam = document.getElementById("sa-selMin").value;
	var sum = document.getElementById("su-selMin").value;
}

function setTimes()
{
	var t = ['mh','mm','th','tm','wh','wm','thh','thm','fh','fm','sah','sam','suh','sum'];
	for (i = 0; i < arguments.length; i+2) {
		document.getElementById(t[i]).value = arguments[i];
		document.getElementById(t[i+1]).value = arguments[i+1];
	}
}