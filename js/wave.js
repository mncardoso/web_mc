let inc = 0.2;
let scl = 30;
let scltp = 40;
let cols, rows;
let t = 255 * 0.5;
let w = window.innerWidth * 2;
let h = window.innerHeight * 0.75;

let zoff = 0;
let flying = 0;
let terrain = [];
let canvas;

function setup() {
	canvas = createCanvas(window.innerWidth, window.innerHeight, WEBGL);
	canvas.parent("backdrop");
	angleMode(DEGREES);
	colorMode(HSL);
	cols = w / scl;
	rows = h / scl;

	frameRate(30);
}

function draw() {
	background(0);
	flying -= 0.02;
	let yoff = 0;
	for (let x = 0; x < cols; x++) {
		terrain[x] = [];
		let xoff = flying;
		for (let y = 0; y < rows; y++) {
			terrain[x][y] = map(noise(xoff, yoff), 0, 1, -scltp, scltp);

			xoff += inc;
		}
		yoff += inc;
	}

	translate(0, 120);
	rotateX(90);
	translate(-w / 2, 0);
	for (let y = 0; y < rows - 1; y++) {
		beginShape(TRIANGLE_STRIP);
		for (let x = 0; x < cols; x++) {
			smooth();
			fill(242, 90, map(x, 0, cols, 0, 8));
			stroke(195, 90, map(x, 0, cols, 0, 62));
			strokeWeight(0.5);
			vertex(x * scl, y * scl, terrain[x][y]);
			vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
		}
		endShape();
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
