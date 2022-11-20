import { BuildingIcon } from '../assets/icons/BuildingIcon';
import { HomeIcon } from '../assets/icons/HomeIcon';
import { PencilAndLineIcon } from '../assets/icons/PeniclAndLineIcon';
import { Layout } from '../components/Layout';
import { OfferItem } from '../components/OfferItem';
import classes from '../styles/Offer.module.scss';

const offers = [
  {
    id: 1,
    title: 'Projektowanie',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat nibh sed pulvinar proin gravida. Aliquam etiam erat velit scelerisque',
    icon: <PencilAndLineIcon />,
  },
  {
    id: 2,
    title: 'Usługa 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat nibh sed pulvinar proin gravida. Aliquam etiam erat velit scelerisque',
    icon: <HomeIcon />,
  },
  {
    id: 3,
    title: 'Usługa 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat nibh sed pulvinar proin gravida. Aliquam etiam erat velit scelerisque',
    icon: <BuildingIcon />,
  },
];

const Offer = () => {
  return (
    <Layout>
      <section className={classes.offer}>
        <div className={classes.offer_wrapper}>
          <article className={classes.offer_content}>
            <h2 className={classes.offer_mainTitle}>Prostota jest szczytem wyrafinowania</h2>
            <p className={classes.offer_mainDescription}>Wiem, że dobry design to dobry biznes</p>
          </article>

          {offers.map(({ id, title, description, icon }) => (
            <OfferItem key={id} title={title} description={description} icon={icon} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Offer;
