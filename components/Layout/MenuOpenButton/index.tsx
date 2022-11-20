import { HamburgerIcon } from '../../../assets/icons/HamburgerIcon';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { useMenu } from '../../../hooks/useMenu';
import classes from './MenuOpenButton.module.scss';

export const MenuOpenButton = () => {
  const isMobile = useMediaQuery('(max-width: 800px)');
  const { setOpen } = useMenu();

  return (
    <>
      {isMobile && (
        <button className={classes.hamburger} onClick={() => setOpen((prevState) => !prevState)}>
          <HamburgerIcon />
        </button>
      )}
    </>
  );
};
