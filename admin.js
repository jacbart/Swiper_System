$(document).ready(function()
{
	
});

function formatting()
{
	var f = `
		<div class="row">
			<input type="checkbox" id="" class="weekday" />
			<label for="weekday-mon">M</label>
			<font color="#dddddd">From:</font>
			<select id="">
				<option selected="selected" value="">Hour</option>
				<option value="00">00</option>
				<option value="01">01</option>
				<option value="02">02</option>
				<option value="03">03</option>
				<option value="04">04</option>
				<option value="05">05</option>
				<option value="06">06</option>
				<option value="07">07</option>
				<option value="08">08</option>
				<option value="09">09</option>
				<option value="10">10</option>
				<option value="11">11</option>
				<option value="12">12</option>
				<option value="13">13</option>
				<option value="14">14</option>
				<option value="15">15</option>
				<option value="16">16</option>
				<option value="17">17</option>
				<option value="18">18</option>
				<option value="19">19</option>
				<option value="20">20</option>
				<option value="21">21</option>
				<option value="22">22</option>
				<option value="23">23</option>
			</select>
			<font color="#dddddd">:</font>
			<select id="">
				<option selected="selected" value="">Minute</option>
				<option value="00">00</option>
				<option value="15">15</option>
				<option value="30">30</option>
				<option value="45">45</option>
			</select>
			<font color="#dddddd">To:</font>
			<select id="">
				<option selected="selected" value="">Hour</option>
				<option value="00">00</option>
				<option value="01">01</option>
				<option value="02">02</option>
				<option value="03">03</option>
				<option value="04">04</option>
				<option value="05">05</option>
				<option value="06">06</option>
				<option value="07">07</option>
				<option value="08">08</option>
				<option value="09">09</option>
				<option value="10">10</option>
				<option value="11">11</option>
				<option value="12">12</option>
				<option value="13">13</option>
				<option value="14">14</option>
				<option value="15">15</option>
				<option value="16">16</option>
				<option value="17">17</option>
				<option value="18">18</option>
				<option value="19">19</option>
				<option value="20">20</option>
				<option value="21">21</option>
				<option value="22">22</option>
				<option value="23">23</option>
			</select>
			<font color="#dddddd">:</font>
			<select id="">
				<option selected="selected" value="">Minute</option>
				<option value="00">00</option>
				<option value="15">15</option>
				<option value="30">30</option>
				<option value="45">45</option>
			</select>
		</div>`;
}

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

function setTimes()
{
	var t = ['mh','mm','th','tm','wh','wm','thh','thm','fh','fm','sah','sam','suh','sum'];
	for (i = 0; i < arguments.length; i+2) {
		document.getElementById(t[i]).value = arguments[i];
		document.getElementById(t[i+1]).value = arguments[i+1];
	}
}