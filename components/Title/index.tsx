import classes from './Title.module.scss';

interface TitleProps {
  title: string;
  className?: string;
}

export const Title = ({ title, className = '' }: TitleProps) => {
  return <h2 className={`${classes.title} ${className}`}>{title}</h2>;
};
