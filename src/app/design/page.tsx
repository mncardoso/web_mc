import Image from 'next/image';
import React from 'react';

import ButtonLink from '@/components/ButtonLink';

import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <div className="top-spacer" />
      <div className="container">
        <h1>Design Works</h1>
      </div>
      <div className="container">
        <h2>Casa Rústica</h2>
        <div className={styles.content}>
          <p>
            Brand building, logo and presentation for a lodging business in
            rural Portugal.{' '}
            <ButtonLink href="./design/rustic-house">
              Read the case-study
            </ButtonLink>
          </p>
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/rustic.house/rustic.svg"
            alt="Casa Rústica Logo"
            className={styles.image}
            width="382"
            height="434"
          />
        </div>
      </div>
      <div className="container">
        <h2>Exponential-e</h2>
        <div className={styles.content}>
          <p>
            A selection of work done when working for one of the biggest managed
            service providers in the United Kingdom.{' '}
            <ButtonLink href="./design/exponential-e">Have a look</ButtonLink>
          </p>
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/exponential.e/exponential_e_logo.svg"
            alt="Exponential-e Logo"
            className={styles.image}
            width="382"
            height="88"
          />
        </div>
      </div>
      <div className="container">
        <h2>Other</h2>
        <p>
          <ButtonLink href="./design/other">Here</ButtonLink>
          {' is a selection of other design works I did. :)'}
        </p>
      </div>
      <div className="top-spacer" />
    </>
  );
}
