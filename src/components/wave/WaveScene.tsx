'use client';

import { useEffect, useRef, useState } from 'react';
import type { Mesh, WebGLRenderer } from 'three';

type Quality = {
  cell: number;
  maxCols: number;
  maxRows: number;
  pixelRatio: number;
  antialias: boolean;
  fps: number;
};

function readQuality(): Quality {
  const width = window.innerWidth;
  const saveData = Boolean(
    (navigator as Navigator & { connection?: { saveData?: boolean } })
      .connection?.saveData,
  );
  const cores = navigator.hardwareConcurrency || 4;
  const coarse = window.matchMedia('(pointer: coarse)').matches;
  const constrained = saveData || cores <= 4 || width < 768 || coarse;

  if (constrained) {
    return {
      cell: 44,
      maxCols: 34,
      maxRows: 20,
      pixelRatio: 1,
      antialias: false,
      fps: 24,
    };
  }

  return {
    cell: 34,
    maxCols: 52,
    maxRows: 30,
    pixelRatio: Math.min(window.devicePixelRatio || 1, 1.5),
    antialias: true,
    fps: 30,
  };
}

/** Clear = ink/paper keys; wire = fixed --grad-start. */
function readThemeColors() {
  const light =
    document.documentElement.getAttribute('data-theme') === 'light';
  return {
    clear: light ? 0xf7f9fc : 0x020717,
    wire: 0x66cc99,
  };
}

function hash(ix: number, iy: number) {
  const s = Math.sin(ix * 127.1 + iy * 311.7) * 43758.5453;
  return s - Math.floor(s);
}

function noise(x: number, y: number) {
  const x0 = Math.floor(x);
  const y0 = Math.floor(y);
  const fx = x - x0;
  const fy = y - y0;
  const u = fx * fx * (3 - 2 * fx);
  const v = fy * fy * (3 - 2 * fy);
  return (
    hash(x0, y0) * (1 - u) * (1 - v) +
    hash(x0 + 1, y0) * u * (1 - v) +
    hash(x0, y0 + 1) * (1 - u) * v +
    hash(x0 + 1, y0 + 1) * u * v
  );
}

/**
 * Deferred Coding-Train terrain. Hero HTML paints first; mesh/DPR/FPS
 * scale down on phones, Save-Data, and low-core devices.
 */
export function WaveScene() {
  const hostRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let cancelled = false;
    const enable = () => {
      if (!cancelled) setEnabled(true);
    };

    const idle = (
      window as Window & {
        requestIdleCallback?: (
          cb: () => void,
          opts?: { timeout: number },
        ) => number;
        cancelIdleCallback?: (id: number) => void;
      }
    ).requestIdleCallback;

    if (typeof idle === 'function') {
      const id = idle(enable, { timeout: 1200 });
      return () => {
        cancelled = true;
        window.cancelIdleCallback?.(id);
      };
    }

    const timer = window.setTimeout(enable, 200);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const host = hostRef.current;
    if (!host) return;

    let disposed = false;
    let renderer: WebGLRenderer | null = null;
    let mesh: Mesh | null = null;
    let animationId = 0;
    let cols = 0;
    let rows = 0;
    let flying = 0;
    let lastFrame = 0;
    let onScreen = true;
    let quality = readQuality();
    let detachResize: (() => void) | undefined;

    const boot = async () => {
      const THREE = await import('three');
      if (disposed) return;

      const theme = readThemeColors();
      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(theme.clear, 0.0018);

      const camera = new THREE.PerspectiveCamera(
        58,
        window.innerWidth / Math.max(window.innerHeight, 1),
        1,
        2500,
      );
      camera.position.set(0, 160, 280);
      camera.lookAt(0, 0, -60);

      const gpu = new THREE.WebGLRenderer({
        antialias: quality.antialias,
        alpha: false,
        powerPreference: 'high-performance',
        stencil: false,
        depth: true,
      });
      gpu.setClearColor(theme.clear, 1);
      gpu.domElement.style.display = 'block';
      host.appendChild(gpu.domElement);
      renderer = gpu;

      const material = new THREE.MeshBasicMaterial({
        color: theme.wire,
        wireframe: true,
        transparent: true,
        opacity: 0.9,
      });
      mesh = new THREE.Mesh(new THREE.BufferGeometry(), material);
      mesh.rotation.x = -Math.PI / 2.15;
      mesh.position.y = -36;
      scene.add(mesh);

      const applyThemeColors = () => {
        const next = readThemeColors();
        if (scene.fog && 'color' in scene.fog) {
          (scene.fog as { color: { setHex: (n: number) => void } }).color.setHex(
            next.clear,
          );
        }
        gpu.setClearColor(next.clear, 1);
        material.color.setHex(next.wire);
      };

      const rebuildGeometry = () => {
        if (!mesh) return;
        const cell = quality.cell;
        const positions = new Float32Array(cols * rows * 3);
        const indices = new Uint16Array(
          Math.max(0, (cols - 1) * (rows - 1) * 6),
        );

        for (let y = 0; y < rows; y++) {
          for (let x = 0; x < cols; x++) {
            const i = (y * cols + x) * 3;
            positions[i] = x * cell - (cols * cell) / 2;
            positions[i + 1] = y * cell - (rows * cell) / 2;
            positions[i + 2] = 0;
          }
        }

        let cursor = 0;
        for (let y = 0; y < rows - 1; y++) {
          for (let x = 0; x < cols - 1; x++) {
            const a = y * cols + x;
            const b = a + 1;
            const c = a + cols;
            const d = c + 1;
            indices[cursor++] = a;
            indices[cursor++] = c;
            indices[cursor++] = b;
            indices[cursor++] = b;
            indices[cursor++] = c;
            indices[cursor++] = d;
          }
        }

        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geo.setIndex(new THREE.BufferAttribute(indices, 1));
        mesh.geometry.dispose();
        mesh.geometry = geo;
      };

      const applySize = () => {
        if (!renderer || !mesh) return;
        quality = readQuality();
        const w = window.innerWidth;
        const h = Math.max(window.innerHeight, 1);
        renderer.setPixelRatio(quality.pixelRatio);
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        cols = Math.min(
          quality.maxCols,
          Math.max(8, Math.floor((w * 2.1) / quality.cell)),
        );
        rows = Math.min(
          quality.maxRows,
          Math.max(6, Math.floor((h * 0.85) / quality.cell)),
        );
        rebuildGeometry();
      };

      applySize();

      let resizeTimer = 0;
      const onResize = () => {
        window.clearTimeout(resizeTimer);
        resizeTimer = window.setTimeout(applySize, 120);
      };
      window.addEventListener('resize', onResize);
      window.addEventListener('theme-change', applyThemeColors);
      detachResize = () => {
        window.clearTimeout(resizeTimer);
        window.removeEventListener('resize', onResize);
        window.removeEventListener('theme-change', applyThemeColors);
      };

      const amp = 34;
      const inc = 0.18;

      const tick = (now: number) => {
        if (disposed || !mesh || !renderer) return;
        animationId = requestAnimationFrame(tick);

        if (document.hidden || !onScreen) return;
        if (now - lastFrame < 1000 / quality.fps) return;
        lastFrame = now;

        flying -= 0.04;
        let yoff = flying;
        const pos = mesh.geometry.getAttribute('position');
        const arr = pos.array as Float32Array;

        for (let y = 0; y < rows; y++) {
          let xoff = 0;
          for (let x = 0; x < cols; x++) {
            arr[(y * cols + x) * 3 + 2] = (noise(xoff, yoff) - 0.5) * 2 * amp;
            xoff += inc;
          }
          yoff += inc;
        }

        pos.needsUpdate = true;
        renderer.render(scene, camera);
      };

      animationId = requestAnimationFrame(tick);
    };

    void boot();

    const io = new IntersectionObserver(
      ([entry]) => {
        onScreen = Boolean(entry?.isIntersecting);
      },
      { threshold: 0.05 },
    );
    io.observe(host);

    return () => {
      disposed = true;
      io.disconnect();
      cancelAnimationFrame(animationId);
      detachResize?.();
      if (mesh) {
        mesh.geometry.dispose();
        (mesh.material as { dispose: () => void }).dispose();
      }
      renderer?.dispose();
      if (renderer?.domElement.parentElement === host) {
        host.removeChild(renderer.domElement);
      }
    };
  }, [enabled]);

  return (
    <div
      ref={hostRef}
      className={`wave-host${enabled ? '' : ' wave-host--pending'}`}
      aria-hidden="true"
    />
  );
}
