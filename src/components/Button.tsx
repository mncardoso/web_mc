import Link from 'next/link';
import { ReactNode } from 'react';

import styles from './Button.module.css';

const Button = ({
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
      <Link
        href={href}
        className={styles.button}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </Link>
    );
  }
  return (
    <Link href={href} className={styles.button}>
      {children}
    </Link>
  );
};

export default Button;
