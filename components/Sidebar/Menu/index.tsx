import Link from 'next/link';
import classes from './Menu.module.scss';

import { useMediaQuery } from '../../../hooks/useMediaQuery';

export const linksData = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'O mnie',
    to: '/about-me',
  },
  {
    label: 'Oferta',
    to: '/offer',
  },
  {
    label: 'Kontakt',
    to: '/contact',
  },
];

type MenuProps = {
  opened: boolean;
};

export const Menu = ({ opened }: MenuProps) => {
  const isMobile = useMediaQuery('(max-width: 800px)');

  return (
    <nav className={`${classes.menu} ${isMobile && opened ? classes.menu_opened : ''}`}>
      <ul className={classes.menu_item_list}>
        {linksData.map((link) => (
          <li className={classes.menu_item} key={link.label}>
            <Link href={link.to} className={classes.menu_link}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
