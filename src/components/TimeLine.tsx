import Image from 'next/image';
import styles from './TimeLine.module.css';
import { type ReactNode } from 'react';

const TimeLine = ({ title, image, children }: { title: string; image: string; children: ReactNode }) => {
  return (
    <div className={`${styles.main} grid`}>
      <div className={styles.title}>
        <h2>{title}</h2>
      </div>
      <div className={`${styles.body} grid`}>
        <div className={styles.photo}>
          <img src={image} alt={`Photo of ${title}`} width={512} height={512} />
        </div>
        <div className={styles.text}>{children}</div>
      </div>
    </div>
  );
};

export default TimeLine;
