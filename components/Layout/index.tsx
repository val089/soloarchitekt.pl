import { NextSeo } from 'next-seo';
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
        <NextSeo
          title="Solo Architekt"
          description="Solo Architekt to pracownia architektoniczna, którą stworzyłem z wrażliwości do oryginalności a jednocześnie funkcjonalności przestrzennej, celem szeroko pojętego tworzenia projektów budynków mieszkalnych i usługowych."
          canonical="https://soloarchitekt.pl/"
          openGraph={{
            url: 'https://soloarchitekt.pl/',
            title: 'Solo Architekt',
            description:
              'Solo Architekt to pracownia architektoniczna, którą stworzyłem z wrażliwości do oryginalności a jednocześnie funkcjonalności przestrzennej, celem szeroko pojętego tworzenia projektów budynków mieszkalnych i usługowych.',
            images: [
              {
                url: '../../assets/images/img-desktop.jpg',
                type: 'image/jpeg',
                alt: 'architectural image',
              },
              {
                url: '../../assets/images/img-mobile.jpg',
                type: 'image/jpeg',
                alt: 'architectural image',
              },
            ],
            siteName: 'Solo Architekt',
          }}
        />
        <Sidebar />
        <MenuOpenButton />
        <main className={classes.layout_main}>{children}</main>
      </div>
    </MenuProvider>
  );
};
