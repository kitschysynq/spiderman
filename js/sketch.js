var r;
var n;

function setup() {
	createCanvas(640, 480);
	r = height * 0.45;
	n = 10;
}

function draw() {
	var count;
	background(0);
	translate(width/2, height/2);
	ellipseMode(CENTER);
	noStroke();
	fill(200);
	for(count = 0; count < n; count++) {
		theta = ((2 * Math.PI) / n) * count;
		var x = r * cos(theta);
		var y = r * sin(theta);
		ellipse(x, y, 32, 32);
	}
}
