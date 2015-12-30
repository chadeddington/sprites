// Global id for canceling the animation
var animationId;
var myImage
var canvas
var context
var frameCount
var currentFrame 
var sx
var sy
var ticks 
var maxTicks
var width; 

function start() {
	myImage = new Image();
	myImage.onload = function() {
		context.drawImage(myImage, sx, sy, 35, 35, 150, 100, 105, 105);
	}
	myImage.src = "linkSprites.png";
	canvas = document.getElementById('canvas');
	context = canvas.getContext('2d');
	frameCount = 7;
	currentFrame = 0;
	sx = 0;
	sy = 0;
	// Because frame per frame is way too fast
	ticks = 0;
	maxTicks = 5;
	width = 35;
	context.clearRect(0,0,canvas.width,canvas.height);
	context.fillStyle="green";
	context.fillRect(0,0,canvas.width, canvas.height);
}

function draw() {
	context.clearRect(0,0,canvas.width,canvas.height);
	context.fillStyle="green";
	context.fillRect(0,0,canvas.width, canvas.height);
	sx = width * currentFrame;

	context.drawImage(myImage, sx, sy, 35, 35, 150, 100, 105, 105);
	if (currentFrame == frameCount - 1) {
		currentFrame = 1;
		sx = 0 - width;
		//If we just want one iteration;
		context.clearRect(0,0,canvas.width,canvas.height);
		context.fillRect(0,0,canvas.width, canvas.height);
		context.drawImage(myImage, 0, 0, 35, 35,150, 100, 105, 105);
		return;
	}
	if (ticks > maxTicks) {
		ticks = 0;
		currentFrame++;
	}
	ticks++;
	animationId = requestAnimationFrame(draw);
}

function stop() {
	cancelAnimationFrame(animationId);
}