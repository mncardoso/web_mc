'use client';

import Sketch from 'react-p5';

let inc = 0.2;
let scl = 30;
let scltp = 40;
let cols: number, rows: number, w: number, h, canvas;
let flying = 0;
let terrain: number[][] = [];

export let Wave = () => {
  const setup = (
    p5: import('p5'),
    canvasParentRef: React.RefObject<HTMLDivElement>
  ) => {
    w = window.innerWidth * 2;
    h = window.innerHeight * 0.75;
    canvas = p5
      .createCanvas(window.innerWidth, window.innerHeight, p5.WEBGL)
      .parent(canvasParentRef);
    p5.angleMode(p5.DEGREES);
    p5.colorMode(p5.HSL);
    cols = w / scl;
    rows = h / scl;
    p5.frameRate(30);
  };

  const draw = (p5: import('p5')) => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      p5.background(229, 84, 5, 1);
    } else {
      p5.background(210, 40, 98, 1);
    }
    flying -= 0.02;
    let yoff = 0;
    for (let x = 0; x < cols; x++) {
      terrain[x] = [];
      let xoff = flying;
      for (let y = 0; y < rows; y++) {
        terrain[x][y] = p5.map(p5.noise(xoff, yoff), 0, 1, -scltp, scltp);
        xoff += inc;
      }
      yoff += inc;
    }

    p5.translate(0, 120);
    p5.rotateX(90);
    p5.translate(-w / 2, 0);
    for (let y = 0; y < rows - 1; y++) {
      p5.beginShape(p5.TRIANGLE_STRIP);
      for (let x = 0; x < cols; x++) {
        p5.smooth();
        if (
          window.matchMedia &&
          window.matchMedia('(prefers-color-scheme: dark)').matches
        ) {
          p5.fill(229, 84, 5, 1);
          p5.stroke(196, 89, 62, 1);
        } else {
          p5.fill(210, 40, 98, 1);
          p5.stroke(229, 84, 5, 1);
        }
        p5.strokeWeight(0.75);
        p5.vertex(x * scl, y * scl, terrain[x][y]);
        p5.vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
      }
      p5.endShape();
    }
    window.addEventListener('resize', () => {
      p5.resizeCanvas(window.innerWidth, window.innerHeight);
    });
  };

  return (
    <div className="background" id="background">
      {/* @ts-ignore */}
      <Sketch setup={setup} draw={draw} />
    </div>
  );
};
// windowResized={windowResized}
