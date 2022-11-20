type Props = {
  size?: number;
};

export const CloseIcon = ({ size = 40 }: Props) => {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <path
        d="M30 11.75L28.25 10L20 18.25L11.75 10L10 11.75L18.25 20L10 28.25L11.75 30L20 21.75L28.25 30L30 28.25L21.75 20L30 11.75Z"
        fill="black"
      />
    </svg>
  );
};
