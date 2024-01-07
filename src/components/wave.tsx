import p5 from 'p5';
import { type Sketch } from '@p5-wrapper/react';
import { NextReactP5Wrapper } from '@p5-wrapper/next';

let increment = 0.2;
let scale = 30;
let sculpt = 40;
let columns: number;
let rows: number;
let width: number;
let height: number;
let canvas;
let flying = 0;
let terrain: (number | undefined)[][] = [];

const Wave: Sketch = (p: p5) => {
  p.setup = () => {
    width = window.innerWidth * 2;
    height = window.innerHeight * 0.75;
    canvas = p.createCanvas(window.innerWidth, window.innerHeight, p.WEBGL);
    p.angleMode(p.DEGREES);
    p.colorMode(p.HSL);
    columns = width / scale;
    rows = height / scale;
    p.frameRate(30);
    // }
  };

  p.draw = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      p.background(0, 0, 10, 1);
    } else {
      p.background(0, 0, 90, 1);
    }
    flying -= 0.02;
    let yOffset = 0;
    for (let x = 0; x < columns; x++) {
      terrain[x] = [] as number[];
      let xOffset = flying;
      for (let y = 0; y < rows; y++) {
        let drawX = terrain[x];
        if (!drawX) continue;
        drawX[y] = p.map(p.noise(xOffset, yOffset), 0, 1, -sculpt, sculpt);
        terrain[x] = drawX;
        xOffset += increment;
      }
      yOffset += increment;
    }
    p.translate(0, 120);
    p.rotateX(90);
    p.translate(-width / 2, 0);
    for (let y = 0; y < rows - 1; y++) {
      p.beginShape(p.TRIANGLE_STRIP);
      for (let x = 0; x < columns; x++) {
        p.smooth();
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          p.fill(0, 0, 10, 1);
          p.stroke(0, 0, 90, 1);
          // p.stroke(195, 90, p.map(x, 0, columns, 0, 62));
        } else {
          p.fill(0, 0, 90, 1);
          p.stroke(0, 0, 10, 1);
          // p.stroke(195, 90, p.map(x, 0, columns, 0, 62));
        }
        p.strokeWeight(0.5);
        let readX = terrain[x];
        if (!readX) continue;
        p.vertex(x * scale, y * scale, readX[y]);
        p.vertex(x * scale, (y + 1) * scale, readX[y + 1]);
      }
      p.endShape();
    }
    window.addEventListener('resize', p.resizeCanvas(window.innerWidth, window.innerHeight) as any);
  };
};
const Canvas = () => {
  return <NextReactP5Wrapper sketch={Wave} />;
};

export default Canvas;
