import classes from './SocialIcons.module.scss';

export const SocialIcons = () => {
  return (
    <div className={classes.socialIcons}>
      <a
        className={`${classes.socialIcons_icon} ${classes.socialIcons_facebookIcon}`}
        href="https://www.facebook.com/profile.php?id=100066750845690"
        target="_blank"
        rel="noopener noreferrer nofollow"
      />
      <a
        className={`${classes.socialIcons_icon} ${classes.socialIcons_instagramIcon}`}
        href="https://www.instagram.com/solo.architekt/"
        target="_blank"
        rel="noopener noreferrer nofollow"
      />
    </div>
  );
};
