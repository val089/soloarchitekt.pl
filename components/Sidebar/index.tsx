import classes from './Sidebar.module.scss';
import { Logo } from './Logo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Menu } from './Menu';
import { SocialIcons } from './SocialIcons';
import { ContactLinks } from './ContactLinks';
import { CloseIcon } from '../../assets/icons/CloseIcon';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useMenu } from '../../hooks/useMenu';

export const linksData = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'O mnie',
    to: '/o-mnie',
  },
  {
    label: 'Oferta',
    to: '/oferta',
  },
  {
    label: 'Kontakt',
    to: '/kontakt',
  },
];

export const Sidebar = () => {
  const { open, setOpen } = useMenu();
  const isMobile = useMediaQuery('(max-width: 1024px)');

  return (
    <div className={`${classes.sidebar} ${open ? classes.sidebar_open : ''}`}>
      {isMobile && open && (
        <button
          className={classes.sidebar_closeButton}
          onClick={() => setOpen((prevState) => !prevState)}
        >
          <CloseIcon />
        </button>
      )}

      <div>
        <Logo />
        <div className={classes.sidebar_horizontal_line} />
        <LanguageSwitcher />
      </div>
      <Menu opened />
      <SocialIcons />
      <ContactLinks />
    </div>
  );
};
