import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { LocaleProvider } from '../hooks/useLocale';
import { TranslationsProvider } from '../components/TranslationsProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LocaleProvider>
      <TranslationsProvider>
        <Component {...pageProps} />
      </TranslationsProvider>
    </LocaleProvider>
  );
}

export default MyApp;
