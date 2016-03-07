var theTime;
var counter = 0;
var position = 1;

function clock()	{
	theTime = new Date();
	document.getElementById("time").innerHTML = theTime;
	counter++ ;
	if((counter % 10) == 0)	{
		position++ ;
		if(position === 5)	{
			position = 1;
		}
	changePosition();	
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

var startClock = setInterval(clock, 1000);