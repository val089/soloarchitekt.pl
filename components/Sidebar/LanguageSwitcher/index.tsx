import { useLocale } from '../../../hooks/useLocale';
import classes from './LanguageSwitcher.module.scss';

export const LanguageSwitcher = () => {
  const { setLocale, locale } = useLocale();

  return (
    <div className={classes.switcher}>
      <button
        className={locale === 'en' ? classes.active : ''}
        onClick={() => {
          localStorage.setItem('locale', 'en');
          setLocale('en');
        }}
      >
        EN
      </button>
      <button
        className={locale === 'pl' ? classes.active : ''}
        onClick={() => {
          localStorage.setItem('locale', 'pl');
          setLocale('pl');
        }}
      >
        PL
      </button>
    </div>
  );
};
