var segmentCount = 12;
var segments = [];
var primes = [ 1, 2, 3, 5, 7, 11, 13, 17 ];

function setup() {
	createCanvas(windowWidth, windowHeight);
	newSegments();
}

var offset = 0;

function draw() {
	var r = min(width, height) * 0.05;
	background(0);
	translate(width/2, height/2);
	ellipseMode(CENTER);
	noStroke();
	fill(200);
	for (var i = segments.length; i > segments.length / 2; i--) {
		var n = primes[segments[i]];
		var arcl = TWO_PI / n;
		for (var j = 0; j < n; j++) {
			var color = 200 * (j % 2);
			fill(color);
			arc(0, 0, r * i, r * i, (arcl * j) + HALF_PI, (arcl * (j +  1)) + HALF_PI);
		}
	}
	fill(0);
	ellipse(0, 0, r * segments.length / 2, r * segments.length / 2);
}

function mouseClicked() {
	newSegments();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function newSegments() {
	for(var i = 0; i < segmentCount; i++) {
		segments[i] = floor(random(0, primes.length));
	}
}
