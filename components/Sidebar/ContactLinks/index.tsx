import classes from './ContactLinks.module.scss';

export const ContactLinks = () => {
  return (
    <div className={classes.contact}>
      <a href="mailto:kontakt@soloarchitekt.pl">kontakt@soloarchitekt.pl</a>
      <a href="tel:510216067">tel: 510 216 067</a>
    </div>
  );
};
