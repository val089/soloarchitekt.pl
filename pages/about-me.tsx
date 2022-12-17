import { Layout } from '../components/Layout';
import { I18n } from '../translations/I18n';
import classes from '../styles/AboutMe.module.scss';

const AboutMe = () => {
  return (
    <Layout>
      <section className={classes.aboutMe}>
        <article className={classes.article}>
          <h2>
            <I18n id="text.text05" />
          </h2>
          <p>
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
