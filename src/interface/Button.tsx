import Link from 'next/link';

import styles from './Button.module.css';

const Button = ({ children, href, id }: { children: React.ReactNode; href: string; id?: string }) => {
  return (
    <Link id={id} href={href} className={styles.outline}>
      <div className={styles.area}>
        <div className={styles.label}>{children}</div>
      </div>
    </Link>
  );
};

export default Button;
