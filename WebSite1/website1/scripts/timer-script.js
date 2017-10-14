﻿var timer;
function startTimer() {
	timer = setInterval(setTime, 1000);
}
function setTime() {
	var time = new Date();
	var hours = time.getHours();
	if (hours < 10) {
		hours = "0" + hours;
	}
	var minutes = time.getMinutes();
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	var seconds = time.getSeconds();
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	document.getElementById("timer").innerHTML = hours + ":" + minutes + ":" + seconds;

}
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
	
}
function myFunction2() {
    var popup = document.getElementById("myPopup2");
    popup.classList.toggle("show2");
}
