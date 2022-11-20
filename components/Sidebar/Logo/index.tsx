import classes from './Logo.module.scss';

export const Logo = () => {
  return (
    <h1 className={classes.logo}>
      <span className={classes.logo_text1}>solo</span>
      <div className={classes.logo_line} />
      <span className={classes.logo_text2}>architekt</span>
    </h1>
  );
};
