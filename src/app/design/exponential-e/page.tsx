import Image from 'next/image';
import React from 'react';

import PictureGallery from '@/components/PictureGallery';
import VideoGallery from '@/components/VideoGallery';

export default function Home() {
  return (
    <>
      <div className="top-spacer" />
      <div className="container">
        <h1>Exponential-e</h1>
        <p>
          Work done for a managed service provider based in London with global
          reach.
        </p>
      </div>
      <div className="container">
        <h2>Videos</h2>
        <VideoGallery>
          <div>
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6595710526259625984?compact=1"
              allowFullScreen
            />
          </div>
          <div>
            <iframe
              src="https://www.youtube.com/embed/ozDSRZOZ9JY"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="video_wrapper">
            <iframe
              src="https://www.youtube.com/embed/VDYcdfZUYeI"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video_wrapper">
            <iframe
              src="https://www.youtube.com/embed/xrrbDZcfwlY"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video_wrapper">
            <iframe
              src="https://www.youtube.com/embed/Neo_DbnjMr8"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </VideoGallery>
      </div>
      <div className="container">
        <h2>Motion Design</h2>
        <VideoGallery>
          <div className="video_wrapper">
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6586974639623286784?compact=1"
              allowFullScreen
            />
          </div>
          <div>
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6575741189096644608?compact=1"
              allowFullScreen
            />
          </div>
        </VideoGallery>
      </div>
      <div className="container">
        <h2>Print</h2>
        <PictureGallery>
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/exponential.e/print/poster_001.jpg"
            alt="poster 01"
            //
            width="1191"
            height="1684"
          />
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/exponential.e/print/poster_002.jpg"
            alt="poster 02"
            //
            width="1191"
            height="1685"
          />
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/exponential.e/print/poster_003.jpg"
            alt="poster 03"
            //
            width="1191"
            height="1685"
          />
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/exponential.e/print/poster_004.jpg"
            alt="poster 04"
            //
            width="1191"
            height="1684"
          />
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/exponential.e/print/poster_005.jpg"
            alt="poster 05"
            //
            width="1191"
            height="1685"
          />
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/exponential.e/print/poster_006.jpg"
            alt="poster 06"
            //
            width="1191"
            height="1685"
          />
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/exponential.e/print/uc-flyer_001.png"
            alt="UC Flyer 1"
            //
            width="1749"
            height="2481"
          />
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/exponential.e/print/uc-flyer_002.png"
            alt="UC Flyer 2"
            //
            width="1749"
            height="2481"
          />
        </PictureGallery>
      </div>
      <div className="container">
        <h2>Graphic Design</h2>
        <PictureGallery>
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/exponential.e/social/001.jpg"
            alt="social 001"
            width="800"
            height="418"
          />
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/exponential.e/social/002.jpg"
            alt="social 002"
            width="800"
            height="418"
          />
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/exponential.e/social/003.jpg"
            alt="social 003"
            width="800"
            height="418"
          />
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/exponential.e/social/004.jpg"
            alt="social 004"
            width="800"
            height="418"
          />
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/exponential.e/social/005.jpg"
            alt="social 005"
            width="800"
            height="418"
          />
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/exponential.e/social/006.jpg"
            alt="social 006"
            width="800"
            height="418"
          />
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/exponential.e/social/007.jpg"
            alt="social 007"
            width="800"
            height="418"
          />
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/exponential.e/social/008.jpg"
            alt="social 008"
            width="800"
            height="418"
          />
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/exponential.e/social/009.jpg"
            alt="social 009"
            width="800"
            height="418"
          />
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/exponential.e/social/010.jpg"
            alt="social 010"
            width="800"
            height="418"
          />
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/exponential.e/social/011.jpg"
            alt="social 011"
            width="800"
            height="418"
          />
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/exponential.e/social/012.jpg"
            alt="social 012"
            width="800"
            height="418"
          />
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/exponential.e/social/013.jpg"
            alt="social 013"
            width="800"
            height="418"
          />
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/exponential.e/social/014.jpg"
            alt="social 014"
            width="800"
            height="450"
          />
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/exponential.e/social/015.jpg"
            alt="social 015"
            width="800"
            height="418"
          />
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/exponential.e/social/016.jpg"
            alt="social 016"
            width="800"
            height="533"
          />
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/exponential.e/social/017.jpg"
            alt="social 017"
            width="800"
            height="418"
          />
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/exponential.e/social/018.jpg"
            alt="social 018"
            width="800"
            height="418"
          />
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/exponential.e/social/019.jpg"
            alt="social 019"
            width="800"
            height="418"
          />
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/exponential.e/social/020.jpg"
            alt="social 020"
            width="800"
            height="533"
          />
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/exponential.e/social/021.jpg"
            alt="social 021"
            width="800"
            height="418"
          />
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/exponential.e/social/022.jpg"
            alt="social 022"
            width="800"
            height="533"
          />
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/exponential.e/social/023.jpg"
            alt="social 023"
            width="800"
            height="450"
          />
        </PictureGallery>
      </div>
      <div className="top-spacer" />
    </>
  );
}
