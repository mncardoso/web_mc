import { ReactNode } from 'react';

import styles from './VideoGallery.module.css';

const VideoGallery = ({ children }: { children: ReactNode }) => {
  return <div className={styles.gallery}>{children}</div>;
};

export default VideoGallery;
