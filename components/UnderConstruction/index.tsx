import Image from 'next/image';
import classes from './UnderConstruction.module.scss';
import hammerIcon from '../../assets/images/hammer.png';
import { I18n } from '../../translations/I18n';

export const UnderConstruction = () => {
  return (
    <div className={classes.underConstruction}>
      <div className={classes.underConstruction_box}>
        <h1>
          <I18n id="text.text11" />
        </h1>
        <p>
          <I18n id="text.text12" />
        </p>
        <Image src={hammerIcon} alt="hammer icon" className={classes.underConstruction_icon} />
      </div>
    </div>
  );
};
