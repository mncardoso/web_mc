import React, { type ReactNode } from 'react';
import HeadNav from '@/components/HeadNav';
import Footer from '@/components/Footer';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <HeadNav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
