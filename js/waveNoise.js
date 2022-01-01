let wave = (sketch) => {
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
	sketch.setup = () => {
		sketch.createCanvas(window.innerWidth, window.innerHeight, WEBGL);

		sketch.angleMode(DEGREES);
		sketch.colorMode(HSL);
		cols = w / scl;
		rows = h / scl;

		sketch.frameRate(30);
	};

	sketch.draw = () => {
		sketch.background(0);
		flying -= 0.02;
		let yoff = 0;
		for (let x = 0; x < cols; x++) {
			terrain[x] = [];
			let xoff = flying;
			for (let y = 0; y < rows; y++) {
				terrain[x][y] = sketch.map(
					sketch.noise(xoff, yoff),
					0,
					1,
					-scltp,
					scltp
				);

				xoff += inc;
			}
			yoff += inc;
		}

		sketch.translate(0, 120);
		sketch.rotateX(90);
		sketch.translate(-w / 2, 0);
		for (let y = 0; y < rows - 1; y++) {
			sketch.beginShape(TRIANGLE_STRIP);
			for (let x = 0; x < cols; x++) {
				sketch.smooth();
				sketch.fill(242, 90, map(x, 0, cols, 0, 8));
				sketch.stroke(195, 90, map(x, 0, cols, 0, 62));
				sketch.strokeWeight(0.5);
				sketch.vertex(x * scl, y * scl, terrain[x][y]);
				sketch.vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
			}
			sketch.endShape();
		}
	};

	sketch.windowResized = () => {
		sketch.resizeCanvas(windowWidth, windowHeight);
	};
};

let noise = (sketch) => {
	let inc = 0.01;

	sketch.setup = () => {
		sketch.createCanvas(window.innerWidth, windowHeight);
		sketch.pixelDensity(1);
	};

	sketch.draw = () => {
		sketch.noStroke();

		let yoff = 0;
		sketch.loadPixels();
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
		sketch.updatePixels();
	};
};

new p5(noise, "noise");
new p5(wave, "backdrop");
