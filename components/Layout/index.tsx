import { ReactNode, useState } from 'react';
import { Header } from '../Header';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main id="content">{children}</main>
      {/* <Footer /> */}
    </>
  );
};
