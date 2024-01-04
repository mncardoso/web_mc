import Link from 'next/link';

import styles from './MiniButton.module.css';

const MiniButton = ({ href, label, newTab = false }: { href: string; label: string; newTab?: boolean }) => {
  return (
    <Link href={href} className={styles.button} target={newTab ? '_blank' : '_self'} rel="noreferrer">
      {label}
    </Link>
  );
};

export default MiniButton;
