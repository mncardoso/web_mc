import { ReactNode } from 'react';

import styles from './SubMenu.module.css';

const SubMenu = ({ children }: { children: ReactNode }) => {
  return <div className={styles.menu}>{children}</div>;
};

export default SubMenu;
