import Link from 'next/link';
import classes from '../styles/404.module.scss';
import { I18n } from '../translations/I18n';

const Page404 = () => {
  return (
    <div className={classes.page404}>
      <div className={classes.page404_box}>
        <h1>Oooooops...</h1>
        <h2>
          <I18n id="text.text13" />
        </h2>
        <Link className={classes.page404_link} href="/">
          <I18n id="text.text14" />
        </Link>
      </div>
    </div>
  );
};

export default Page404;
