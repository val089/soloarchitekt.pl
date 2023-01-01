import { Layout } from '../components/Layout';
import { Form } from '../components/Form';
import classes from '../styles/Contact.module.scss';
import { MailIcon } from '../assets/icons/MailIcon';
import { PhoneIcon } from '../assets/icons/PhoneIcon';
import { I18n } from '../translations/I18n';
import { Title } from '../components/Title';
import { useIntl } from 'react-intl';

const Contact = () => {
  const intl = useIntl();
  return (
    <Layout>
      <section className={classes.contact}>
        <div className={classes.contact_wrapper}>
          <Title
            className={classes.contact_title}
            title={intl.formatMessage({ id: 'text.text06' })}
          />
          <p className={classes.contact_formInfoText}>
            <I18n id="text.text07" />:
          </p>

          <Form />

          <p className={classes.contact_formInfoText2}>
            <I18n id="text.text08" />:
          </p>

          <div className={classes.contact_contact2}>
            <div className={classes.contact_companyInfo}>
              <p className={classes.contact_companyName}>Solo Architekt</p>
              <p className={classes.contact_companyName2}>
                <I18n id="text.text01" />
              </p>
              <p className={classes.contact_ceo}>Arkadiusz Tabath</p>
            </div>

            <address className={classes.contact_address}>
              ul. Wiśniowa 54,
              <br />
              89-600 Chojnice
            </address>

            <address className={classes.contact_contactInfo}>
              <a href="mailto:kontakt@soloarchitekt.pl">
                <MailIcon className={classes.contact_icon} />
                kontakt@soloarchitekt.pl
              </a>
              <a href="tel:510216067">
                <PhoneIcon className={classes.contact_icon} />
                +48 510 216 067
              </a>
            </address>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
