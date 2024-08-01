import Image from 'next/image';
import React from 'react';

import Button from '@/components/Button';
import SubMenu from '@/components/SubMenu';

import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <div className="top-spacer" />
      <div className="container">
        <h1>Explorer App</h1>
        <p>
          App concept done as part of a competition by Adobe UK to use Adobe XD.
        </p>
        <Image
          src="https://s3.eu-north-1.amazonaws.com/web.mc/assets.explorer/design.png"
          alt="Explorer App"
          className={styles.image}
          width={1285}
          height={723}
        />
      </div>
      <SubMenu>
        <ul>
          <li>
            <Button newTab href="https://explorer.miguel-cardoso.com/">
              Open App
            </Button>
          </li>
          <li>
            <Button newTab href="https://explorer.miguel-cardoso.com/CaseStudy">
              Case Study
            </Button>
          </li>
        </ul>
      </SubMenu>
      <div className="top-spacer" />
    </>
  );
}
