import classes from './SocialIcons.module.scss';

export const SocialIcons = () => {
  return (
    <div className={classes.socialIcons}>
      <a
        className={`${classes.socialIcons_icon} ${classes.socialIcons_facebookIcon}`}
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
      />
      <a
        className={`${classes.socialIcons_icon} ${classes.socialIcons_instagramIcon}`}
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      />
    </div>
  );
};
