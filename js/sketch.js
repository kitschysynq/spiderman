var r;
var n;
var minorR;
var slider;

function setup() {
	createCanvas(640, 480);
	r = height * 0.45;
	n = 10;
	minorR = ((2 * Math.PI * r) / n) * 0.8;

	slider = createSlider(0, 360, 0);
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
		var theta = ((2 * Math.PI) / n) * count;
		var x = r * cos(theta);
		var y = r * sin(theta);
		var sliderRad = (slider.value() / 180) * Math.PI;
		//var fillColor = (Math.tanh((sliderRad - theta) / minorR) + 1) * 128;
		var fillColor = (count / n) * 255;
		fill(fillColor);
		ellipse(x, y, minorR, minorR);
	}
}
