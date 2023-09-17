import Link from 'next/link';

import styles from '../../styles/interface/button.module.css';

export let Button = ({ action, lable, title, newTab = false }) => {
  if (newTab) {
    return (
      <Link href={action} className={styles.button} target="_blank" rel="noreferrer" title={title}>
        {lable}
      </Link>
    );
  } else {
    return (
      <Link href={action} className={styles.button} title={title} replace>
        {lable}
      </Link>
    );
  }
};
