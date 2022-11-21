import Image from 'next/image';
import { useMediaQuery } from '../hooks/useMediaQuery';

import { Layout } from '../components/Layout';
import mainImgDesktop from '../assets/images/img-desktop.jpg';
import classes from '../styles/HomePage.module.scss';

const Home = () => {
  return (
    <Layout>
      <section className={classes.home_introSection}>
        <div className={classes.home_mainText}>
          <h3>PRACOWNIA ARCHITEKTONICZNA</h3>
          <h2>Pomagam Tobie Budować Marzenia i Daję Więcej niż oczekujesz</h2>
        </div>
        <div className={classes.home_mainInfo}>
          <div className={classes.home_mainInfoItem}>
            <span>100%</span>
            <p>ZADOWOLONYCH KLIENTWÓW</p>
          </div>
          <div className={classes.home_mainInfoItem}>
            <span>200</span>
            <p>ZAKOŃCZONYCH PROJEKTÓW</p>
          </div>
        </div>
        <Image src={mainImgDesktop} alt="main image" className={classes.home_mainImg} />
      </section>
    </Layout>
  );
};

export default Home;
