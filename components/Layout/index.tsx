import { ReactNode } from 'react';
import { Sidebar } from '../Sidebar';
import classes from './Layout.module.scss';
import { MenuProvider } from '../../hooks/useMenu';
import { MenuOpenButton } from './MenuOpenButton';
import { UnderConstruction } from '../UnderConstruction';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const isUnderConstruction = false;

  return isUnderConstruction ? (
    <UnderConstruction />
  ) : (
    <MenuProvider>
      <div className={classes.layout}>
        <Sidebar />
        <MenuOpenButton />
        <main className={classes.layout_main}>{children}</main>
      </div>
    </MenuProvider>
  );
};
