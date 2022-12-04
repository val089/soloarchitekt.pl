import { Formik } from 'formik';
import { useIntl } from 'react-intl';
import { Input } from './Input';
import classes from './Form.module.scss';
import { Textarea } from './Textarea';
import { Button } from '../Button';
import { formSchema } from './formSchema';
import { I18n } from '../../translations/I18n';
import { sendContactForm } from '../../lib/api';

const initialValues = {
  firstName: '',
  email: '',
  phoneNumber: '',
  message: '',
};

export const Form = () => {
  const intl = useIntl();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, { setSubmitting }) => {
        console.log(values);
        await sendContactForm(values);
        setSubmitting(false);
      }}
      validationSchema={formSchema}
    >
      {({ handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit} className={classes.form}>
          <Input
            name="firstName"
            placeholder={intl.formatMessage({ id: 'input.text01' })}
            className={classes.firstNameInput}
          />
          <Input
            name="email"
            type="email"
            placeholder={intl.formatMessage({ id: 'input.text02' })}
            className={classes.emailInput}
          />
          <Input
            name="phoneNumber"
            placeholder={intl.formatMessage({ id: 'input.text03' })}
            className={classes.phoneNumberInput}
          />
          <Textarea
            name="message"
            placeholder={intl.formatMessage({ id: 'input.text04' })}
            className={classes.messageInput}
          />
          <Button type="submit" disabled={isSubmitting} className={classes.submitButton}>
            <I18n id="text.text07" />
          </Button>
        </form>
      )}
    </Formik>
  );
};
