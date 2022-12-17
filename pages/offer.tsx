import { BuildingIcon } from '../assets/icons/BuildingIcon';
import { HomeIcon } from '../assets/icons/HomeIcon';
import { PencilAndLineIcon } from '../assets/icons/PeniclAndLineIcon';
import { Layout } from '../components/Layout';
import { OfferItem } from '../components/OfferItem';
import { I18n } from '../translations/I18n';
import classes from '../styles/Offer.module.scss';
import { useIntl } from 'react-intl';

const Offer = () => {
  const intl = useIntl();

  const offers = [
    {
      id: 1,
      title: intl.formatMessage({ id: 'title.offer01' }),
      description: intl.formatMessage({ id: 'text.offer01' }),
      icon: <PencilAndLineIcon />,
    },
    {
      id: 2,
      title: intl.formatMessage({ id: 'title.offer02' }),
      description: intl.formatMessage({ id: 'text.offer02' }),
      icon: <HomeIcon />,
    },
    {
      id: 3,
      title: intl.formatMessage({ id: 'title.offer03' }),
      description: intl.formatMessage({ id: 'text.offer03' }),
      icon: <BuildingIcon />,
    },
    {
      id: 4,
      title: intl.formatMessage({ id: 'title.offer04' }),
      description: intl.formatMessage({ id: 'text.offer04' }),
      icon: <BuildingIcon />,
    },
  ];

  return (
    <Layout>
      <section className={classes.offer}>
        <div className={classes.offer_wrapper}>
          <article className={classes.offer_content}>
            <h2 className={classes.offer_mainTitle}>
              <I18n id="text.text09" />
            </h2>
            <p className={classes.offer_mainDescription}>
              <I18n id="text.text10" />
            </p>
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
