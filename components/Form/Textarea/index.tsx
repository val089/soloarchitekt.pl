import { TextareaHTMLAttributes } from 'react';
import { useField } from 'formik';
import classes from './Textarea.module.scss';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  className: string;
}

export const Textarea = ({ name, className, ...restProps }: TextareaProps) => {
  const [field, meta] = useField({ name });

  return (
    <div className={`${classes.textareaGroup} ${className}`}>
      <textarea className={`${classes.textarea} ${className}`} {...field} {...restProps} />
      {meta.error && meta.touched && <p className={classes.error}>{meta.error}</p>}
    </div>
  );
};
