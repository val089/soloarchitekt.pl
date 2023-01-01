import Image, { StaticImageData } from 'next/image';
import classes from './OfferItem.module.scss';
import { Title } from '../Title';

type OfferItemProps = {
  title: string;
  description: string;
  icon: StaticImageData;
};

export const OfferItem = ({ title, description, icon }: OfferItemProps) => {
  return (
    <article className={classes.offerItem}>
      <Title title={title} className={classes.offerItem_title} />
      <p className={classes.offerItem_description}>{description}</p>
      <div className={classes.offerItem_icon}>
        <Image src={icon} alt={title} priority width={60} />
      </div>
    </article>
  );
};
