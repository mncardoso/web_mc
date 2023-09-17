import Link from 'next/link';

import styles from '@/styles/layout/footer.module.css';

export let Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Miguel Cardoso - 2022 [</p>
      <Link
        href="https://github.com/mncardoso"
        target="_blank"
        rel="noreferrer"
        title="Open my GitHub page in a new tab"
      >
        GitHub
      </Link>
      <p> / </p>
      <Link href="../cv" title="Open my CV" replace>
        CV
      </Link>
      <p>]</p>
    </footer>
  );
};
