import { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { useIntl } from 'react-intl';
import { Input } from './Input';
import classes from './Form.module.scss';
import { Textarea } from './Textarea';
import { Button } from '../Button';
import { I18n } from '../../translations/I18n';
import { sendContactForm } from '../../lib/api';
import * as yup from 'yup';
import { validatePhoneNumber } from '../../utils/formValidators';

const initialValues = {
  firstName: '',
  email: '',
  phoneNumber: '',
  message: '',
};

export const Form = () => {
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const intl = useIntl();

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccessMessage(false);
      setErrorMessage(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [successMessage, errorMessage]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          const res = await sendContactForm(values);
          if (res.status === 200) {
            setSuccessMessage(true);
            resetForm();
          } else {
            setErrorMessage(true);
          }
        } catch (error) {
          setErrorMessage(true);
        }
        setSubmitting(false);
      }}
      validationSchema={yup
        .object({
          firstName: yup.string().required(intl.formatMessage({ id: 'input.error02' })),
          email: yup
            .string()
            .email(intl.formatMessage({ id: 'input.error01' }))
            .required(intl.formatMessage({ id: 'input.error02' })),
          phoneNumber: yup
            .string()
            .required(intl.formatMessage({ id: 'input.error02' }))
            .test({
              name: 'phone-number-validation',
              message: intl.formatMessage({ id: 'input.error03' }),
              test(value) {
                if (!value) {
                  return false;
                }

                return validatePhoneNumber(value);
              },
            }),
          message: yup.string().required(intl.formatMessage({ id: 'input.error02' })),
        })
        .required()}
    >
      {({ handleSubmit, isSubmitting }) => (
        <>
          {successMessage && (
            <p className={classes.successMessage}>{intl.formatMessage({ id: 'text.error01' })}</p>
          )}
          {errorMessage && (
            <p className={classes.errorMessage}>{intl.formatMessage({ id: 'text.error02' })}</p>
          )}
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
              {isSubmitting ? 'Wysyłam...' : <I18n id="text.text07" />}
            </Button>
          </form>
        </>
      )}
    </Formik>
  );
};
