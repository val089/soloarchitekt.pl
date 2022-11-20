import Image from 'next/image';
import facebookGrey from '../../../assets/images/facebookGrey.png';
// import facebookOrange from '../../../assets/images/facebookOrange.png';
import instagramGrey from '../../../assets/images/instagramGrey.png';
// import instagramOrange from '../../../assets/images/instagramOrange.png';
import classes from './SocialIcons.module.scss';

export const SocialIcons = () => {
  return (
    <div className={classes.socialIcons}>
      <div className={classes.socialIcons_icon}>
        <Image src={facebookGrey} alt="facebook icon" />
      </div>
      <div className={classes.socialIcons_icon}>
        <Image src={instagramGrey} alt="instagram icon" />
      </div>
    </div>
  );
};
