import { ReactNode } from 'react';
import { Sidebar } from '../Sidebar';
import classes from './Layout.module.scss';
import { MenuProvider } from '../../hooks/useMenu';
import { MenuOpenButton } from './MenuOpenButton';
import { UnderConstruction } from '../UnderConstruction';
import localFont from '@next/font/local';

const centuryGothicFont = localFont({
  src: [
    {
      path: '../../assets/fonts/CenturyGothic-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/CenturyGothic-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const isUnderConstruction = false;

  return isUnderConstruction ? (
    <UnderConstruction />
  ) : (
    <MenuProvider>
      <div className={`${classes.layout} ${centuryGothicFont.className}`}>
        <Sidebar />
        <MenuOpenButton />
        <main className={classes.layout_main}>{children}</main>
      </div>
    </MenuProvider>
  );
};
