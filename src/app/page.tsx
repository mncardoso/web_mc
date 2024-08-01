import React from 'react';

import Button from '@/components/Button';
import SubMenu from '@/components/SubMenu';

export default function Home() {
  return (
    <>
      <div className="top-spacer" />
      <div className="container">
        <h3>Hi there!</h3>
        <h1>I&apos;m Miguel Cardoso</h1>
        <p>
          Software engineer with 4 years of experience in front-end and 4 years
          as a graphic designer. I have had the privilege to work with renowned
          companies such as Nespresso, Seat, and Coca-Cola, demonstrating my
          professionalism, adaptability, and leadership skills across diverse
          environments and teams. Passionate about graphical interfaces and the
          visual potential of programming, I am committed to creating engaging
          and user-friendly web experiences. Fluent in both Portuguese and
          English. Eager to leverage my expertise and multi-faceted skill set, I
          am seeking opportunities to contribute to innovative projects, lead
          teams, and drive visual excellence in a dynamic setting.
        </p>
      </div>
      <SubMenu>
        <ul>
          <li>
            <Button href="mailto:m.n.cardoso@me.com">Email</Button>
          </li>
          <li>
            <Button newTab href="https://www.linkedin.com/in/miguelncardoso/">
              LinkedIn
            </Button>
          </li>
          <li>
            <Button newTab href="https://www.github.com/mncardoso">
              GitHub
            </Button>
          </li>
          <li>
            <Button
              newTab
              href="https://s3.eu-north-1.amazonaws.com/web.mc/assets/MiguelCardoso.pdf"
            >
              Resume
            </Button>
          </li>
        </ul>
      </SubMenu>
      <div className="top-spacer" />
    </>
  );
}
