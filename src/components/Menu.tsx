import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import menu from '@/data/menu.json';

import styles from './Menu.module.css';

const Menu = () => {
  const year = new Date().getFullYear();
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <div className={styles.logo}>
          <Image src={'/logo.svg'} alt="Logo" width={40} height={40} />
        </div>
        <div className={styles.spacer} />
        <menu className={styles.options}>
          <ul>
            {menu.map((item, index) => (
              <li key={index}>
                <Link href={item.url} className={styles.button}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </menu>
        <div className={styles.spacer} />
        <div className={styles.footnote}>
          <small>v5.0 - {year}</small>
        </div>
      </div>
    </div>
  );
};

export default Menu;
