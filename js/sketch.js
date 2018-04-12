var r;
var n;
var minorR;
var slider;
var thetaStep;
var thetaOffset;
var thetaOffsetSlider;

function setup() {
	createCanvas(640, 480);
	r = height * 0.45;
	n = 10;
	minorR = ((2 * Math.PI * r) / n) * 0.8;
	// thetaStep is half the delta of theta from the center of a detent
	thetaStep = (Math.PI / n);
	thetaOffset = (3 * Math.PI) / 4;

	slider = createSlider(-thetaStep, (2 * Math.PI) - thetaStep, -thetaStep, 0.00001);
	slider.position(20, 20);
	thetaOffsetSlider = createSlider(0, (2 * Math.PI), (Math.PI / 2), 0.00001);
	thetaOffsetSlider.position(20, 50);
}

function draw() {
	var count;
	background(0);
	translate(width/2, height/2);
	ellipseMode(CENTER);
	noStroke();
	fill(200);
	thetaOffset = thetaOffsetSlider.value();
	var x1 = (r - minorR) * cos(slider.value() + thetaOffset);
	var y1 = (r - minorR) * sin(slider.value() + thetaOffset);
	var x2 = (r + minorR) * cos(slider.value() + thetaOffset);
	var y2 = (r + minorR) * sin(slider.value() + thetaOffset);
	stroke(128);
	line(x1, y1, x2, y2);
	noStroke();
	for(count = 0; count < n; count++) {
		var theta = 2 * thetaStep * count;
		var x = r * cos(theta + thetaOffset);
		var y = r * sin(theta + thetaOffset);
		var fillColor = (Math.tanh((slider.value() - theta) / thetaStep) + 1) * 128;
		fill(fillColor);
		ellipse(x, y, minorR, minorR);
	}
}
