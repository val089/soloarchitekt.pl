import { ReactNode } from 'react';
import {
  IntlProvider,
  // ReactIntlErrorCode
} from 'react-intl';
import { useLocale } from '../../hooks/useLocale';
import messages from '../../translations/messages';

// following method added due to error: [Error: [@formatjs/intl Error MISSING_DATA]
// const onError = (e) => {
//   if (e.code === ReactIntlErrorCode.MISSING_DATA) {
//     return;
//   }
//   console.error(e);
// };

type TranslationsProviderProps = {
  children: ReactNode;
};

export const TranslationsProvider = ({ children }: TranslationsProviderProps) => {
  const { locale } = useLocale();

  return (
    <IntlProvider
      messages={messages[locale]}
      locale={locale}
      defaultLocale="pl"
      // onError={onError}
    >
      {children}
    </IntlProvider>
  );
};
