import { InputHTMLAttributes } from 'react';
import { useField } from 'formik';
import classes from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  className: string;
}

export const Input = ({ name, className, ...restProps }: InputProps) => {
  const [field, meta] = useField({ name });

  return (
    <div className={`${classes.inputGroup} ${className}`}>
      <input className={classes.input} {...field} {...restProps} />
      {meta.error && meta.touched && <p className={classes.error}>{meta.error}</p>}
    </div>
  );
};
