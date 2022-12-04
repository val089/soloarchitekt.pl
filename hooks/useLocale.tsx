import { useContext, createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';
import { Locale } from '../translations/messages';

type LocaleCtx = {
  locale: Locale;
  setLocale: Dispatch<SetStateAction<Locale>>;
};

const LocaleContext = createContext<LocaleCtx | null>(null);

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>('pl');

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>;
};

export const useLocale = () => {
  const locale = useContext(LocaleContext);

  if (!locale) {
    throw Error('useLocale needs to be used inside TranslationsContext');
  }

  return locale;
};
