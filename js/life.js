var gridSize = 40;
var grid = [];

var xgrid, ygrid;
var xbox, ybox;
var aspectRatio = 0.8;

function setup() {
	createCanvas(windowWidth, windowHeight);
	grid = makeGrid();
	xgrid = width / gridSize;
	ygrid = height / gridSize;
	xbox = xgrid * aspectRatio;
	ybox = ygrid * aspectRatio;
}

function draw() {
	clear();
	for(let i = 0; i < gridSize; i++) {
		for(let j = 0; j < gridSize; j++) {
			fill((1 - grid[i][j]) * 255);
			rect(i * xgrid, j * ygrid, xbox, ybox);
		}
	}
	nextGeneration();
}

function nextGeneration() {
	newGrid = makeGrid();
	for(let i = 0; i < gridSize; i++) {
		newGrid[i][0] = grid[i][0];
		newGrid[i][gridSize - 1] = grid[i][gridSize - 1];
	}
	for(let j = 0; j < gridSize; j++) {
		newGrid[0][j] = grid[0][j];
		newGrid[gridSize - 1][j] = grid[gridSize - 1][j];
	}
	for(let i = 1; i < gridSize - 1; i++) {
		for(let j = 1; j < gridSize - 1; j++) {
			let n = 0;
			for (let a = -1; a <= 1; a++) {
				for(let b = -1; b <= 1; b++) {
					n += grid[i+a][j+b];
				}
			}
			n -= grid[i][j];
			if(grid[i][j] == 1 && (n < 2 || n > 3)) {
				newGrid[i][j] = 0;
			} else if(grid[i][j] == 0 && n ==3) {
				newGrid[i][j] = 1;
			} else {
				newGrid[i][j] = grid[i][j];
			}
		}
	}
	grid = newGrid;
}

function mouseClicked() {
	draw();
}

function makeGrid() {
	let g = [];
	for(let i = 0; i < gridSize; i++) {
		g[i] = [];
		for(let j = 0; j < gridSize; j++) {
			g[i][j] = floor(random(2));
		}
	}
	return g;
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	xgrid = width / gridSize;
	ygrid = height / gridSize;
	xbox = xgrid * aspectRatio;
	ybox = ygrid * aspectRatio;
}
