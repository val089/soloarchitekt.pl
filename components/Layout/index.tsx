import { ReactNode } from 'react';
import { Sidebar } from '../Sidebar';
import classes from './Layout.module.scss';
import { MenuProvider } from '../../hooks/useMenu';
import { MenuOpenButton } from './MenuOpenButton';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <MenuProvider>
      <div className={classes.layout}>
        <Sidebar />
        <main className={classes.layout_main}>
          <MenuOpenButton />
          {children}
        </main>
      </div>
    </MenuProvider>
  );
};
