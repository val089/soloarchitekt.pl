import { ReactElement } from 'react';
import classes from './OfferItem.module.scss';

type OfferItemProps = {
  title: string;
  description: string;
  icon: ReactElement;
};

export const OfferItem = ({ title, description, icon }: OfferItemProps) => {
  return (
    <article className={classes.offerItem}>
      <h3 className={classes.offerItem_title}>{title}</h3>
      <p className={classes.offerItem_description}>{description}</p>
      <div className={classes.offerItem_icon}>{icon}</div>
    </article>
  );
};
