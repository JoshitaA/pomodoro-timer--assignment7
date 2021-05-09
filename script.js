var startButton = document.getElementById("start");
var stopButton = document.getElementById("stop");
var resetButton = document.getElementById("reset");
var minsLeft = document.getElementById("mins-left");
var secsLeft = document.getElementById("secs-left");

var startTimer = function(){ //**** */
	console.log("Start");

    begin = setInterval(countdown, 1000); // Call countdown function every 1000 milliseconds
	startButton.disabled=true;
	stopButton.disabled=false;
}

var stopTimer = function(){
	console.log("Stop");
	window.clearInterval(begin) // clear the timer and so stop the clock
	stopButton.disabled=true;
	startButton.disabled=false;
}

var resetTimer = function(){
	console.log("Reset");
	window.clearInterval(begin) // clear the timer and so stop the clock
	secsLeft.innerText=00;
	minsLeft.innerText=document.getElementById("mins").innerText;
	stopButton.disabled=true;
	startButton.disabled=false;
}

// This is what makes the clock tick downwards
var countdown = function(){
	console.log("countdown");
	if(secsLeft.innerText<=0){
		secsLeft.innerText=60;
		minsLeft.innerText--;		
	};
	secsLeft.innerText--;
	
	if(secsLeft.innerText<=0 && minsLeft.innerText<=0){
		window.clearInterval(begin);   // clear the timer and so stop the clock
		var audio = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/11525/alarm.wav');
		audio.play();	
	};
}

var more = function(){
	document.getElementById("mins").innerText++;
	minsLeft.innerText = document.getElementById("mins").innerText;   //mins increment
}

var less = function(){
	document.getElementById("mins").innerText--;
	
	if(document.getElementById("mins").innerText<=1){
		document.getElementById("mins").innerText=1
	};
	minsLeft.innerText = document.getElementById("mins").innerText;
}