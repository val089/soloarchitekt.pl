import { Layout } from '../components/Layout';
import { I18n } from '../translations/I18n';
import classes from '../styles/AboutMe.module.scss';
import { Title } from '../components/Title';
import { useIntl } from 'react-intl';

const AboutMe = () => {
  const intl = useIntl();

  return (
    <Layout>
      <section className={classes.aboutMe}>
        <article className={classes.article}>
          <Title title={intl.formatMessage({ id: 'text.text05' })} />
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
