import Link from 'next/link';

export default function Home() {
  return (
    <div className={`main-container code`}>
      <p>Hello 🖖 My name is Miguel</p>
      <p>Please choose your experience</p>
      <div className="flex-row links">
        <p>
          [ <Link href="/about">Traditional</Link> ]
        </p>
        <p>
          [ <Link href="https://graphicallyundefined.com">Immersive</Link> ]
        </p>
      </div>
    </div>
  );
}
