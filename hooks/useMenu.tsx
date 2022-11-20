import { useContext, createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

type MenuCtx = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const MenuContext = createContext<MenuCtx | null>(null);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);

  return <MenuContext.Provider value={{ open, setOpen }}>{children}</MenuContext.Provider>;
};

export const useMenu = () => {
  const menu = useContext(MenuContext);

  if (!menu) {
    throw Error('useMenu needs to be used inside MenuContext');
  }

  return menu;
};
