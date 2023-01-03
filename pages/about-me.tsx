import Image from 'next/image';
import { Layout } from '../components/Layout';
import { I18n } from '../translations/I18n';
import classes from '../styles/AboutMe.module.scss';
import { Title } from '../components/Title';
import { useIntl } from 'react-intl';
import MeImg from '../assets/images/me.jpg';

const AboutMe = () => {
  const intl = useIntl();

  return (
    <Layout>
      <section className={classes.aboutMe}>
        <Title
          className={classes.aboutMe_title}
          title={intl.formatMessage({ id: 'text.text05' })}
        />
        <Image className={classes.aboutMe_photo} src={MeImg} alt="me" priority />
        <article className={classes.article}>
          <p>
            <strong>Solo Architekt </strong>
            <I18n id="text.aboutMe01" />
          </p>
          <p>
            <I18n id="text.aboutMe02" />
          </p>
          <p>
            <I18n id="text.aboutMe03" />
          </p>
        </article>
      </section>
    </Layout>
  );
};

export default AboutMe;
