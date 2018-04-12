var r;
var n;
var minorR;
var slider;
var thetaStep;

function setup() {
	createCanvas(640, 480);
	r = height * 0.45;
	n = 10;
	minorR = ((2 * Math.PI * r) / n) * 0.8;
	// thetaStep is half the delta of theta from the center of a detent
	thetaStep = (Math.PI / n);

	slider = createSlider(-thetaStep, (2 * Math.PI) + thetaStep, 0, 0.0001);
	slider.position(20, 20);
}

function draw() {
	var count;
	background(0);
	translate(width/2, height/2);
	ellipseMode(CENTER);
	noStroke();
	fill(200);
	for(count = 0; count < n; count++) {
		var theta = 2 * thetaStep * count;
		var x = r * cos(theta);
		var y = r * sin(theta);
		var fillColor = (Math.tanh((slider.value() - theta) / thetaStep) + 1) * 128;
		fill(fillColor);
		ellipse(x, y, minorR, minorR);
	}
}
