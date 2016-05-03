# Moving Clock

### Simple Clock that moves around the screen

## Summary

#### Simple clock using native javascript to get the date time from the local computer and moves it around the corners of the screen. The code also allows the user to press a button to randomize the location of the data and time.

### Author: Tristan Lobaugh 
+ Github - https://github.com/TristanLobaugh
+ Homepage - http://tristanlobaugh.com

## Screenshots

### Main page:
![alt text](https://raw.githubusercontent.com/TristanLobaugh/moving_clock/master/img/screen_shot.png)


##Code Examples

### Creates a random location for the clock info to appear on the screen.
```
function randomPosition()	{
	document.getElementById("box").className = "top-left";
	var topPos = parseInt(Math.random() * 90) + "%";
	var leftPos = parseInt(Math.random() * 78) + "%";
	document.getElementById("box").style.top = topPos;
	document.getElementById("box").style.left = leftPos;
}
```