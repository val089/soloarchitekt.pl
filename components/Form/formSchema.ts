import * as yup from 'yup';

const errorMessage = 'Uzupełnij pole';

export const formSchema = yup
  .object({
    firstName: yup.string().required(errorMessage),
    email: yup.string().email('Podaj prawidłowy email').required(errorMessage),
    phoneNumber: yup.string().required(errorMessage),
    message: yup.string().required(errorMessage),
  })
  .required();

export type FormValuesType = yup.InferType<typeof formSchema>;
