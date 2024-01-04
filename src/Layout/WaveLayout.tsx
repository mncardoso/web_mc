import Wave from '@/components/wave';
import Head from 'next/head';

import React, { ReactNode } from 'react';

const WaveLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <title>Miguel Cardoso</title>
        <meta
          name="description"
          content="Miguel Cardoso, a Software Engineer with an analytical eye for details and design."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {children}
        <Wave />
      </main>
    </>
  );
};

export default WaveLayout;
