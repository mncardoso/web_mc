import React from 'react';

import Button from '@/components/Button';
import SubMenu from '@/components/SubMenu';

export default function Home() {
  return (
    <>
      <div className="top-spacer" />
      <div className="container">
        <h1>Little Emperor&apos;s</h1>
        <p>
          Developed and built and styled an email system both for marketing and
          transition emails. Built several key features simultaneously in three
          client facing products including web and mobile applications. Helped
          with the onboarding of new team members and documentation of existing
          and new tools.
        </p>
      </div>
      <SubMenu>
        <ul>
          <li>
            <Button newTab href="https://littleemperors.com/">
              Little Emperor&apos;s website
            </Button>
          </li>
        </ul>
      </SubMenu>
      <div className="top-spacer" />
    </>
  );
}
