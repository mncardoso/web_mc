import React from 'react';

import ButtonLink from '@/components/ButtonLink';

export default function NotFound() {
  return (
    <>
      <div className="top-spacer" />
      <div className="container">
        <h1>404 | Page not found</h1>
        <h3>Hi there!</h3>
        <p>
          It seems you&apos;ve reached a page that doesn&apos;t exist.
          <br />
          <br />
          <span>
            Please check the URL or go back to{' '}
            <ButtonLink href="/">Home</ButtonLink>
          </span>
        </p>
      </div>
      <div className="top-spacer" />
    </>
  );
}
