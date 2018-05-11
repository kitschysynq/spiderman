var xRes = 20;
var yRes = 20;
var scaleFactor = 16;
var epsilon = 0.001;

function setup() {
	createCanvas(windowWidth, windowHeight);
	xStep = windowWidth / xRes;
	yStep = windowWidth / yRes;
}

function draw() {
	background(128);
	stroke(255);
	fill(0);
	//noStroke();
	timeStep = millis() / 1000;
	for (var i = 0; i < xRes; i++) {
		for (var j = 0; j < yRes; j++) {
			let a1 = noise(i/scaleFactor, j/scaleFactor+epsilon, timeStep);
			let a2 = noise(i/scaleFactor, j/scaleFactor-epsilon, timeStep);
			let a = (a1-a2)/(2*epsilon);

			let b1 = noise(i/scaleFactor+epsilon, j/scaleFactor, timeStep);
			let b2 = noise(i/scaleFactor-epsilon, j/scaleFactor, timeStep);
			let b = -(b1-b2)/(2*epsilon);

			push();
			translate((i)*xStep,(j)*yStep);
			line(0, 0, a*xStep, b*yStep);
			ellipse(a*xStep, b*yStep, xStep/10);
			pop();
		}
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	xStep = windowWidth / xRes;
	yStep = windowWidth / yRes;
}
