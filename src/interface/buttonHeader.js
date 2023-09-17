import Link from 'next/link';

import styles from '../../styles/interface/buttonHeader.module.css';

export let ButtonHeader = ({ action, lable, shorLable, title, newTab = false }) => {
  if (newTab) {
    return (
      <div className={styles.button_outline}>
        <div className={styles.button_area}>
          <Link href={action} className={styles.button_lable} target="_blank" rel="noreferrer" title={title}>
            {lable}
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.button_outline}>
      <div className={styles.button_area}>
        <Link href={action} className={styles.button_lable} title={title} replace>
          {lable}
        </Link>
      </div>
    </div>
  );
};
