import { ReactNode, ButtonHTMLAttributes } from 'react';
import classes from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className: string;
}

export const Button = ({ children, className, ...restProps }: ButtonProps) => {
  return (
    <button className={`${classes.button} ${className}`} {...restProps}>
      {children}
    </button>
  );
};
