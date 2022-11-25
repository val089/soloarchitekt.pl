import Link from 'next/link';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import classes from './ActiveLink.module.scss';

interface ActiveLinkProps {
  children: ReactNode;
  href: string;
}
export const ActiveLink = ({ children, href }: ActiveLinkProps) => {
  const router = useRouter();

  return (
    <Link href={href} className={router.pathname === href ? classes.link_active : classes.link}>
      {children}
    </Link>
  );
};
