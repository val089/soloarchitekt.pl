import {
  useContext,
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react';
import { Locale } from '../translations/messages';

type LocaleCtx = {
  locale: Locale;
  setLocale: Dispatch<SetStateAction<Locale>>;
};

const LocaleContext = createContext<LocaleCtx | null>(null);

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>('pl');

  useEffect(() => {
    const localeFromStorage = localStorage.getItem('locale');
    if (localeFromStorage) {
      setLocale(localeFromStorage as Locale);
    }
  }, []);

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>;
};

export const useLocale = () => {
  const locale = useContext(LocaleContext);

  if (!locale) {
    throw Error('useLocale needs to be used inside TranslationsContext');
  }

  return locale;
};
