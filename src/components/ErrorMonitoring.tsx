'use client';

import { useEffect } from 'react';

/**
 * Optional anonymous client errors → NEXT_PUBLIC_ERROR_WEBHOOK.
 * // ponytail: webhook beacon; Sentry SDK if you need stack grouping
 */
export function ErrorMonitoring() {
  useEffect(() => {
    const webhook = process.env.NEXT_PUBLIC_ERROR_WEBHOOK;
    if (!webhook) return;

    const send = (payload: Record<string, unknown>) => {
      try {
        void fetch(webhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...payload,
            href: window.location.href,
            ts: Date.now(),
          }),
          keepalive: true,
          mode: 'no-cors',
        });
      } catch {
        // Soft-fail.
      }
    };

    const onError = (event: ErrorEvent) => {
      send({
        type: 'error',
        message: event.message,
        source: event.filename,
        line: event.lineno,
      });
    };
    const onRejection = (event: PromiseRejectionEvent) => {
      send({
        type: 'unhandledrejection',
        message: String(event.reason),
      });
    };

    window.addEventListener('error', onError);
    window.addEventListener('unhandledrejection', onRejection);
    return () => {
      window.removeEventListener('error', onError);
      window.removeEventListener('unhandledrejection', onRejection);
    };
  }, []);

  return null;
}
