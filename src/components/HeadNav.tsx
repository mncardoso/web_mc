import React, { useState, useEffect } from 'react';

import Button from '@/interface/Button';
import ButtonMenu from '@/interface/ButtonMenu';
import Logo from '@/interface/Logo';

import styles from './HeadNav.module.css';

const HeadNav = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 600) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    }
  }, []);

  if (typeof window !== 'undefined') {
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 600) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    });
  }

  return (
    <div className="container">
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <hr className="line" />
        <div className={styles.menuToggle}>
          <ButtonMenu onClick={() => setIsOpen(!isOpen)} />
        </div>
        <div className={`${styles.menu} ${!isOpen ? 'hidden' : ''}`}>
          <ul>
            <li>
              <Button href="/">Home</Button>
            </li>
            <li>
              <Button href="https://graphicallyundefined.com/">Graphically Undefined</Button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default HeadNav;
