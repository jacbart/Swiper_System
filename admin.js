$(document).ready(function()
{
	
});

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

	setTimes(mh,);
}
// redis database/ mongo
function setTimes()
{
	var t = ['mh','mm','th','tm','wh','wm','thh','thm','fh','fm','sah','sam','suh','sum'];
	for (i = 0; i < arguments.length; i+2) {
		document.getElementById(t[i]).value = arguments[i];
		document.getElementById(t[i+1]).value = arguments[i+1];
	}
}