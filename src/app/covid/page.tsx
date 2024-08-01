import React from 'react';

import Button from '@/components/Button';
import ButtonLink from '@/components/ButtonLink';
import SubMenu from '@/components/SubMenu';

export default function Home() {
  return (
    <>
      <div className="top-spacer" />
      <div className="container">
        <h1>Covid Dashboard</h1>
        <p>
          With the pandemic never stopping I wanted to keep myself informed and
          build a way of reading the data in a way that I could understand how
          every country was handling cases and vaccinations. Getting my
          information from{' '}
          <ButtonLink
            newTab
            href="https://ourworldindata.org/explorers/coronavirus-data-explorer"
          >
            Our World in Data
          </ButtonLink>
          , I managed to represent vaccination percentages for any country. This
          project was done in React.js with D3.js for the graphs. You can{' '}
          <ButtonLink newTab href="https://covid.miguel-cardoso.com/">
            try it
          </ButtonLink>{' '}
          in a new window. The{' '}
          <ButtonLink
            newTab
            href="https://github.com/mncardoso/covid19_dashboard"
          >
            code
          </ButtonLink>{' '}
          is available on my GitHub page.
        </p>
      </div>
      <SubMenu>
        <ul>
          <li>
            <Button newTab href="https://covid.miguel-cardoso.com/">
              try it
            </Button>
          </li>
          <li>
            <Button
              newTab
              href="https://github.com/mncardoso/covid19_dashboard"
            >
              code
            </Button>
          </li>
        </ul>
      </SubMenu>
      <div className="top-spacer" />
    </>
  );
}
