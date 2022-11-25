import { FormValuesType } from '../components/Form/formSchema';

export const sendContactForm = async (data: FormValuesType) =>
  fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
