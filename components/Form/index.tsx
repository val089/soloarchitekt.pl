import { Formik } from 'formik';
import { Input } from './Input';
import classes from './Form.module.scss';
import { Textarea } from './Textarea';
import { Button } from '../Button';
import { formSchema } from './formSchema';
import { sendContactForm } from '../../lib/api';

const initialValues = {
  firstName: '',
  email: '',
  phoneNumber: '',
  message: '',
};

export const Form = () => {
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
          <Input name="firstName" placeholder="Imię" className={classes.firstNameInput} />
          <Input name="email" type="email" placeholder="Email" className={classes.emailInput} />
          <Input name="phoneNumber" placeholder="Telefon" className={classes.phoneNumberInput} />
          <Textarea
            name="message"
            placeholder="Treść wiadomości"
            className={classes.messageInput}
          />
          <Button type="submit" disabled={isSubmitting} className={classes.submitButton}>
            Send message
          </Button>
        </form>
      )}
    </Formik>
  );
};
