let inc = 0.01;
let canvas;

function setup() {
	canvas = createCanvas(window.innerWidth, windowHeight);
	canvas.parent("noise");
	pixelDensity(1);
}

function draw() {
	noStroke();

	let yoff = 0;
	loadPixels();
	for (let y = 0; y < height; y++) {
		let xoff = 0;
		for (let x = 0; x < width; x++) {
			let index = (x + y * width) * 4;
			let r = random(255);
			pixels[index + 0] = r;
			pixels[index + 1] = r;
			pixels[index + 2] = r;
			pixels[index + 3] = 25;

			xoff += inc;
		}
		yoff += inc;
	}
	updatePixels();
	for (let x = 0; x < width; x += 3) {
		fill(255, 0, 0, 25);
		rect(x, 0, 1, height);
		fill(0, 255, 0, 25);
		rect(x + 1, 0, 1, height);
		fill(0, 0, 255, 25);
		rect(x + 3, 0, 1, height);
	}

	for (let y = 0; y < height; y += 2) {
		fill(0, 0, 0, 25);
		rect(0, y, width, 1);
	}
}
