'use client';

import { useSyncExternalStore } from 'react';

import { clamp01 } from '@/features/presence/protocol';
import type { NormPoint } from '@/features/presence/types';

let cursorPoint: NormPoint = { x: 0.5, y: 0.5 };
/** Stable identity — useSyncExternalStore requires cached getServerSnapshot. */
const serverCursorPoint: NormPoint = { x: 0.5, y: 0.5 };
const listeners = new Set<() => void>();
let attached = false;
let raf = 0;
let pending: NormPoint | null = null;

function getCursorSnapshot() {
  return cursorPoint;
}

function getServerCursorSnapshot() {
  return serverCursorPoint;
}

function getUserAgentSnapshot() {
  return navigator.userAgent;
}

function getServerUserAgentSnapshot() {
  return '';
}

function subscribeUserAgent() {
  return () => undefined;
}

function flush() {
  raf = 0;
  if (!pending) return;
  cursorPoint = pending;
  pending = null;
  for (const listener of listeners) listener();
}

function onPointer(event: PointerEvent) {
  const w = window.innerWidth || 1;
  const h = window.innerHeight || 1;
  pending = {
    x: clamp01(event.clientX / w),
    y: clamp01(event.clientY / h),
  };
  if (!raf) raf = requestAnimationFrame(flush);
}

function ensureListeners() {
  if (attached || typeof window === 'undefined') return;
  attached = true;
  window.addEventListener('pointermove', onPointer, { passive: true });
  window.addEventListener('pointerdown', onPointer, { passive: true });
}

function subscribe(onStoreChange: () => void) {
  ensureListeners();
  listeners.add(onStoreChange);
  return () => {
    listeners.delete(onStoreChange);
  };
}

export function useLocalCursor() {
  const point = useSyncExternalStore(
    subscribe,
    getCursorSnapshot,
    getServerCursorSnapshot,
  );

  const userAgent = useSyncExternalStore(
    subscribeUserAgent,
    getUserAgentSnapshot,
    getServerUserAgentSnapshot,
  );

  return { point, userAgent };
}
