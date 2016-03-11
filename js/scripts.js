var theTime;
var counter = 0;
var position = 1;
var random = 0;

function addRandom(){
	random = 1;
	document.getElementById("random-question").style.background = "green";
}

function clock()	{
	theTime = new Date();
	document.getElementById("time").innerHTML = theTime;
	counter++ ;
		if((counter % 10) == 0)	{
			position++ ;
			if(position === 5)	{
				position = 1;
			}
		if(random === 0)	{	
		changePosition();
		}
		else	{
			randomPosition();
		}
	}
}

function changePosition()	{
	if(position === 1)	{
	document.getElementById("box").className = "top-left";
	}
	else if (position === 2) {
		document.getElementById("box").className = "top-right";
	}
	else if (position === 3) {
		document.getElementById("box").className = "bottom-right";
	}
	else if (position === 4) {
		document.getElementById("box").className = "bottom-left";
	}
}

function randomPosition()	{
	document.getElementById("box").className = "top-left";
	var topPos = parseInt(Math.random() * 90) + "%";
	var leftPos = parseInt(Math.random() * 78) + "%";
	document.getElementById("box").style.top = topPos;
	document.getElementById("box").style.left = leftPos;


}

var startClock = setInterval(clock, 500);