import Image from 'next/image';
import React from 'react';

import PictureGallery from '@/components/PictureGallery';

import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <div className="top-spacer" />
      <div className="container">
        <h1>Casa Rústica</h1>
      </div>
      <div className="container">
        <h2>How I helped a lodging business launch from the ground up!</h2>
        <p>
          A lodging business needed an identity package to stand out from the
          competition
        </p>
      </div>
      <div className="container">
        <h2>Briefing</h2>
        <p>
          The client needed an identity package that included a logo, templates
          for stationary and photos for social and booking websites
        </p>
      </div>
      <div className="container">
        <h2>Logo Requirements</h2>
        <p>
          Name “Casa Rústica” logo to be used as stamp for an old country house
          in the tourism lodging business
        </p>
      </div>
      <div className="container">
        <h3>Mood board</h3>
        <Image
          src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/rustic.house/mood_board.png"
          alt="Mood bard"
          className={styles.image}
          width="888"
          height="606"
        />
      </div>
      <div className="container">
        <h2>Logo Process</h2>
        <p>
          First I studied the business and the location. Then based on the mood
          board, started with the shape of the old house and added some of its
          most characteristic elements, such as ivy branches, window frames and
          front wall colors. The font chosen was a paintbrush style suggesting
          the old age and style the place but with a brand new look. The choice
          of the color respected the predominant regional tones.
        </p>

        <Image
          src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/rustic.house/process.png"
          alt="Process"
          className={styles.image}
          width="1192"
          height="731"
        />
      </div>
      <div className="container">
        <h2>Stationary</h2>
        <Image
          src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/rustic.house/stationary.png"
          alt="Process"
          className={styles.image}
          width="1286"
          height="804"
        />
      </div>
      <div className="container">
        <h2>Pictures</h2>
        <p>
          All the pictures were taken on location and edited to keep the vintage
          look and feel (no retouch done, as the client wanted a realistic look
          so that the guests wouldn&apos;t be deceived)
        </p>
        <PictureGallery>
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/rustic.house/photos/001.png"
            alt="photo 01"
            width="160"
            height="106"
          />
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/rustic.house/photos/002.png"
            alt="photo 02"
            width="161"
            height="109"
          />
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/rustic.house/photos/003.png"
            alt="photo 03"
            width="160"
            height="105"
          />
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/rustic.house/photos/004.png"
            alt="photo 04"
            width="161"
            height="107"
          />
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/rustic.house/photos/005.png"
            alt="photo 05"
            width="160"
            height="106"
          />
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/rustic.house/photos/006.png"
            alt="photo 06"
            width="161"
            height="106"
          />
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/rustic.house/photos/007.png"
            alt="photo 07"
            width="161"
            height="109"
          />
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/rustic.house/photos/008.png"
            alt="photo 08"
            width="160"
            height="107"
          />
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/rustic.house/photos/009.png"
            alt="photo 09"
            width="160"
            height="108"
          />
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/rustic.house/photos/010.png"
            alt="photo 10"
            width="160"
            height="108"
          />
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/rustic.house/photos/011.png"
            alt="photo 11"
            width="161"
            height="106"
          />
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/rustic.house/photos/012.png"
            alt="photo 12"
            width="160"
            height="105"
          />
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/rustic.house/photos/013.png"
            alt="photo 13"
            width="161"
            height="108"
          />
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/rustic.house/photos/014.png"
            alt="photo 14"
            width="160"
            height="107"
          />
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/rustic.house/photos/015.png"
            alt="photo 15"
            width="161"
            height="106"
          />
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/rustic.house/photos/016.png"
            alt="photo 16"
            width="160"
            height="108"
          />
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/rustic.house/photos/017.png"
            alt="photo 17"
            width="161"
            height="108"
          />
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/rustic.house/photos/018.png"
            alt="photo 18"
            width="161"
            height="106"
          />
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/rustic.house/photos/019.png"
            alt="photo 19"
            width="161"
            height="109"
          />
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/rustic.house/photos/020.png"
            alt="photo 20"
            width="161"
            height="109"
          />
        </PictureGallery>
      </div>
      <div className="container">
        <h2>Online</h2>
        <div className={styles.webImage}>
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/rustic.house/online.png"
            alt="online"
            width="1056"
            height="2008"
          />
        </div>
      </div>
      <div className="container">
        <h2>Result</h2>
        <p>
          The client was happy with the result and the business has been
          successful.
        </p>
      </div>
      <div className="container">
        <h2>Comment</h2>
        <p>
          “I am very happy with the result of Miguel&apos;s work! In a very
          competitive business as house lodging we have to stand out, so that we
          can stay in business for long than one year and keep growing.
          Miguel&apos;s work helped us achieve that! Not only our logo reflects
          the spirit of Casa Rústica, but also the pictures are appealing and
          realistic, not defrauding guests, which results in more good reviews
          and more bookings each year!” Susana N. CEO of Casa Rústica
        </p>
      </div>
      <div className="top-spacer" />
    </>
  );
}
