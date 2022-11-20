type Props = {
  size?: number;
};

export const HamburgerIcon = ({ size = 32 }: Props) => {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path
        d="M5.33331 14.6667H21.3333V17.3333H5.33331V14.6667ZM5.33331 8H26.6666V10.6667H5.33331V8ZM5.33331 24H14.98V21.3333H5.33331V24Z"
        fill="black"
      />
    </svg>
  );
};
