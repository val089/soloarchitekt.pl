import { useState } from 'react';
import classes from './LanguageSwitcher.module.scss';

export const LanguageSwitcher = () => {
  const [language, setLanguage] = useState('pl');

  return (
    <div className={classes.switcher}>
      <button className={language === 'en' ? classes.active : ''} onClick={() => setLanguage('en')}>
        EN
      </button>
      <button className={language === 'pl' ? classes.active : ''} onClick={() => setLanguage('pl')}>
        PL
      </button>
    </div>
  );
};
