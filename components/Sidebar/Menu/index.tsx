import classes from './Menu.module.scss';
import { ActiveLink } from '../../ActiveLink';
import { I18n } from '../../../translations/I18n';
import { useMediaQuery } from '../../../hooks/useMediaQuery';

type MenuProps = {
  opened: boolean;
};

export const Menu = ({ opened }: MenuProps) => {
  const isMobile = useMediaQuery('(max-width: 800px)');

  const linksData = [
    {
      id: 1,
      label: <I18n id="menu.text01" />,
      to: '/',
    },
    {
      id: 2,
      label: <I18n id="menu.text02" />,
      to: '/about-me',
    },
    {
      id: 3,
      label: <I18n id="menu.text03" />,
      to: '/offer',
    },
    {
      id: 4,
      label: <I18n id="menu.text04" />,
      to: '/contact',
    },
  ];

  return (
    <nav className={`${classes.menu} ${isMobile && opened ? classes.menu_opened : ''}`}>
      <ul className={classes.menu_item_list}>
        {linksData.map((link) => (
          <li className={classes.menu_item} key={link.id}>
            <ActiveLink href={link.to}>{link.label}</ActiveLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
