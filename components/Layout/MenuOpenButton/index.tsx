import { HamburgerIcon } from '../../../assets/icons/HamburgerIcon';
import { useMenu } from '../../../hooks/useMenu';
import classes from './MenuOpenButton.module.scss';

export const MenuOpenButton = () => {
  const { setOpen } = useMenu();

  return (
    <button className={classes.hamburger} onClick={() => setOpen((prevState) => !prevState)}>
      <HamburgerIcon />
    </button>
  );
};
