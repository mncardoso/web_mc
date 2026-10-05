import { redirect } from 'next/navigation';

/** Japan details live on About — keep URL for old links. */
export default function JapanPage() {
  redirect('/about#japan');
}
