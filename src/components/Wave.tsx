'use client';

import type p5 from 'p5';
import { useEffect, useRef } from 'react';

const INC = 0.2;
const SCL = 30;
const SCLTP = 40;

function isDarkTheme() {
  const theme = document.documentElement.getAttribute('data-theme');
  if (theme === 'dark') return true;
  if (theme === 'light') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export function Wave() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotion.matches) return;

    let instance: p5 | null = null;
    let cols = 0;
    let rows = 0;
    let w = 0;
    let h = 0;
    let flying = 0;
    const terrain: number[][] = [];

    const resizeTerrain = (p: p5) => {
      w = window.innerWidth * 2;
      h = window.innerHeight * 0.75;
      cols = Math.max(1, Math.floor(w / SCL));
      rows = Math.max(1, Math.floor(h / SCL));
      p.resizeCanvas(window.innerWidth, window.innerHeight);
    };

    const sketch = (p: p5) => {
      p.setup = () => {
        p.createCanvas(window.innerWidth, window.innerHeight, p.WEBGL);
        p.angleMode(p.DEGREES);
        p.colorMode(p.HSL);
        p.frameRate(30);
        resizeTerrain(p);
      };

      p.windowResized = () => {
        resizeTerrain(p);
      };

      p.draw = () => {
        const isDark = isDarkTheme();

        if (isDark) {
          p.background(229, 84, 5, 1);
        } else {
          p.background(210, 40, 98, 1);
        }

        flying -= 0.02;
        let yoff = 0;

        for (let x = 0; x < cols; x++) {
          terrain[x] = [];
          let xoff = flying;
          for (let y = 0; y < rows; y++) {
            terrain[x][y] = p.map(p.noise(xoff, yoff), 0, 1, -SCLTP, SCLTP);
            xoff += INC;
          }
          yoff += INC;
        }

        p.translate(0, 120);
        p.rotateX(90);
        p.translate(-w / 2, 0);

        for (let y = 0; y < rows - 1; y++) {
          p.beginShape(p.TRIANGLE_STRIP);
          for (let x = 0; x < cols; x++) {
            if (isDark) {
              p.fill(229, 84, 5, 1);
              p.stroke(196, 89, 62, 1);
            } else {
              p.fill(210, 40, 98, 1);
              p.stroke(229, 84, 5, 1);
            }
            p.strokeWeight(0.75);
            p.vertex(x * SCL, y * SCL, terrain[x][y]);
            p.vertex(x * SCL, (y + 1) * SCL, terrain[x][y + 1]);
          }
          p.endShape();
        }
      };
    };

    const start = async () => {
      const P5 = (await import('p5')).default;
      instance = new P5(sketch, container);
    };

    const onVisibility = () => {
      if (!instance) return;
      if (document.hidden) instance.noLoop();
      else instance.loop();
    };

    const themeObserver = new MutationObserver(() => {
      instance?.redraw();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    void start();
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      document.removeEventListener('visibilitychange', onVisibility);
      themeObserver.disconnect();
      instance?.remove();
    };
  }, []);

  return <div ref={containerRef} className="wave-canvas" aria-hidden="true" />;
}
