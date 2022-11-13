import { useState } from 'react';
import classes from './Header.module.scss';
import { Menu } from './Menu';

export const Header = () => {
  const [opened, setOpened] = useState(false);

  const handleToggle = () => {
    setOpened((opened) => !opened);
  };

  return (
    <header className={classes.header}>
      <Menu opened={opened} />

      <div className={classes.hamburger} onClick={handleToggle}>
        <div
          className={`${classes.hamburger_bar1} ${opened ? classes.hamburger_bar1_opened : ''}`}
        />
        <div className={classes.hamburger_bar2} style={{ opacity: opened ? 0 : 1 }} />
        <div
          className={`${classes.hamburger_bar3} ${opened ? classes.hamburger_bar3_opened : ''}`}
        />
      </div>
    </header>
  );
};
