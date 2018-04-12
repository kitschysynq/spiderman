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
	thetaStep = ((2 * Math.PI) / n);

	slider = createSlider(0, 2 * Math.PI, 0, 0.001);
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
		var theta = thetaStep * count;
		var x = r * cos(theta);
		var y = r * sin(theta);
		var fillColor = (Math.tanh((slider.value() - theta) / thetaStep) + 1) * 128;
		fill(fillColor);
		ellipse(x, y, minorR, minorR);
	}
}
