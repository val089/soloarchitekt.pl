import Image from 'next/image';
import { useMediaQuery } from '../hooks/useMediaQuery';

import { Layout } from '../components/Layout';
import mainImgDesktop from '../assets/images/img-desktop.jpg';
import mainImgMobile from '../assets/images/img-mobile.jpg';
import { I18n } from '../translations/I18n';
import classes from '../styles/HomePage.module.scss';

const Home = () => {
  const isMobile = useMediaQuery('(max-width: 1024px)');
  return (
    <Layout>
      <section className={classes.home_introSection}>
        <div className={classes.home_mainText}>
          <figure className={classes.home_quote}>
            <blockquote>
              &quot; <I18n id="text.quote" />
              &quot;
            </blockquote>
            <figcaption>Frank Lloyd Wright</figcaption>
          </figure>
        </div>
        {isMobile ? (
          <div className={classes.home_mainImgContainer}>
            <Image src={mainImgMobile} alt="main image" className={classes.home_mainImg} priority />
          </div>
        ) : (
          <div className={classes.home_mainImgContainer}>
            <Image src={mainImgDesktop} alt="main image" priority />
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Home;
