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
          <h3>
            <I18n id="text.text01" />
          </h3>
          <h2>
            <I18n id="text.text02" />
          </h2>
        </div>
        <div className={classes.home_mainInfo}>
          <div className={classes.home_mainInfoItem}>
            <span>100%</span>
            <p>
              <I18n id="text.text03" />
            </p>
          </div>
          <div className={classes.home_mainInfoItem}>
            <span>200</span>
            <p>
              <I18n id="text.text04" />
            </p>
          </div>
        </div>
        {isMobile ? (
          <div className={classes.home_mainImgContainer}>
            <Image src={mainImgMobile} alt="main image" className={classes.home_mainImg} />
          </div>
        ) : (
          <div className={classes.home_mainImgContainer}>
            <Image src={mainImgDesktop} alt="main image" />
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Home;
