import Link from 'next/link';
import { ReactNode } from 'react';

const ButtonLink = ({
  children,
  href,
  newTab = false,
}: {
  children: ReactNode;
  href: string;
  newTab?: boolean;
}) => {
  if (newTab) {
    return (
      <Link href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </Link>
    );
  }
  return <Link href={href}>{children}</Link>;
};

export default ButtonLink;
