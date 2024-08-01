import { ReactNode } from 'react';

import styles from './PictureGallery.module.css';

const PictureGallery = ({ children }: { children: ReactNode }) => {
  return <div className={styles.gallery}>{children}</div>;
};

export default PictureGallery;
