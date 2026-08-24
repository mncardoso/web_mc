import { cn } from '@/lib/cn';

export const segmentedControlClass =
  'inline-flex items-center gap-1 rounded-full border border-border bg-surface p-1 shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)]';

export const segmentedButtonClass =
  'segmented-btn inline-flex h-8 min-h-8 min-w-8 cursor-pointer items-center justify-center rounded-full border border-transparent bg-transparent px-2.5 text-xs font-medium text-secondary opacity-70 transition-all duration-150 hover:opacity-100 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-1';

export const segmentedButtonActiveClass =
  'segmented-btn-active border-accent/30 bg-accent text-background opacity-100 shadow-[0_1px_4px_hsla(196,89%,42%,0.25)] font-semibold';

export const navLinkClass =
  'nav-link inline-flex min-h-9 shrink-0 items-center justify-center rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm font-medium text-primary no-underline transition-all duration-150 hover:-translate-y-px hover:border-accent/40 hover:bg-accent-soft hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 max-md:min-h-8 max-md:px-3 max-[480px]:min-h-8 max-[480px]:px-2.5';

export const navLinkActiveClass =
  'nav-link-active border-accent/35 bg-accent-soft text-accent shadow-[inset_0_0_0_1px_hsla(196,89%,42%,0.2)] font-semibold';

export const actionButtonBaseClass =
  'action-btn inline-flex min-h-10 shrink-0 items-center justify-center rounded-full border px-4 py-2.5 text-sm font-medium leading-tight no-underline transition-all duration-150 hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 sm:px-5';

export const actionButtonGhostClass =
  'action-btn-ghost border-border bg-surface text-primary hover:border-accent/40 hover:bg-accent-soft hover:text-accent';

export const actionButtonPrimaryClass =
  'action-btn-primary border-accent/35 bg-accent text-background shadow-[0_2px_8px_hsla(196,89%,42%,0.22)] hover:border-accent hover:bg-[hsl(196,89%,38%)] hover:text-background';

export function actionButtonClass(variant: 'primary' | 'ghost' = 'ghost') {
  return cn(
    actionButtonBaseClass,
    variant === 'primary' ? actionButtonPrimaryClass : actionButtonGhostClass,
  );
}

export function segmentedButtonState(isActive: boolean) {
  return cn(segmentedButtonClass, isActive && segmentedButtonActiveClass);
}
