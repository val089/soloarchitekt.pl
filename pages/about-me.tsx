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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Feugiat nibh sed pulvinar proin gravida.
            Aliquam etiam erat velit scelerisque. Nec feugiat in fermentum posuere urna nec
            tincidunt praesent semper. Nullam non nisi est sit. Eu facilisis sed odio morbi quis
            commodo. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Tellus rutrum
            tellus pellentesque eu. Tristique nulla aliquet enim tortor at auctor urna nunc id.
            Tellus orci ac auctor augue. Ipsum faucibus vitae aliquet nec ullamcorper sit amet
            risus. A diam maecenas sed enim. A diam maecenas sed enim ut.
          </p>
          <p>
            Et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Lobortis elementum
            nibh tellus molestie nunc non. Vitae tempus quam pellentesque nec nam aliquam sem et. In
            nulla posuere sollicitudin aliquam. Enim sed faucibus turpis in eu mi bibendum. Dictum
            varius duis at consectetur lorem donec massa sapien. Consectetur lorem donec massa
            sapien faucibus et molestie ac. Tempor orci dapibus ultrices in iaculis nunc. Morbi quis
            commodo odio aenean sed. Pretium nibh ipsum consequat nisl vel. Eu nisl nunc mi ipsum
            faucibus vitae aliquet nec ullamcorper. Placerat orci nulla pellentesque dignissim.
            Vitae nunc sed velit dignissim sodales ut. Vitae suscipit tellus mauris a diam maecenas
            sed. Mi bibendum neque egestas congue quisque egestas diam in arcu. Consectetur
            adipiscing elit pellentesque habitant morbi tristique.
          </p>
        </article>
      </section>
    </Layout>
  );
};

export default AboutMe;
