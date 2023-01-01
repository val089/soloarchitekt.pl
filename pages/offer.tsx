import { BuildingIcon } from '../assets/icons/BuildingIcon';
import { HomeIcon } from '../assets/icons/HomeIcon';
import { PencilAndLineIcon } from '../assets/icons/PeniclAndLineIcon';
import { Layout } from '../components/Layout';
import { OfferItem } from '../components/OfferItem';
import { I18n } from '../translations/I18n';
import classes from '../styles/Offer.module.scss';
import { useIntl } from 'react-intl';
import { Title } from '../components/Title';
import OfferIcon1 from '../assets/images/offer01.png';
import OfferIcon2 from '../assets/images/offer02.png';
import OfferIcon3 from '../assets/images/offer03.png';
import OfferIcon4 from '../assets/images/offer04.png';

const Offer = () => {
  const intl = useIntl();

  const offers = [
    {
      id: 1,
      title: intl.formatMessage({ id: 'title.offer01' }),
      description: intl.formatMessage({ id: 'text.offer01' }),
      icon: OfferIcon2,
    },
    {
      id: 2,
      title: intl.formatMessage({ id: 'title.offer02' }),
      description: intl.formatMessage({ id: 'text.offer02' }),
      icon: OfferIcon1,
    },
    {
      id: 3,
      title: intl.formatMessage({ id: 'title.offer03' }),
      description: intl.formatMessage({ id: 'text.offer03' }),
      icon: OfferIcon4,
    },
    {
      id: 4,
      title: intl.formatMessage({ id: 'title.offer04' }),
      description: intl.formatMessage({ id: 'text.offer04' }),
      icon: OfferIcon3,
    },
  ];

  return (
    <Layout>
      <section className={classes.offer}>
        <div className={classes.offer_wrapper}>
          <article className={classes.offer_content}>
            <Title
              className={classes.offer_mainTitle}
              title={intl.formatMessage({ id: 'text.text09' })}
            />
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
