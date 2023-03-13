import React, { ReactNode } from "react";
import { useStorage } from "../utils/useStorage";

type UserContextT = {
  favoritesIds: string[];
  setFavoritesIds: (ids: string[]) => void;
};

export const UserContext = React.createContext<UserContextT>({
  favoritesIds: [],
  setFavoritesIds: () => {},
});

type Props = {
  children: ReactNode;
};

export const UserContextProvider: React.FC<Props> = ({ children }) => {
  const [favoritesIds, setFavoritesIds] = useStorage([], "Favorite");

  const contextValues = {
    favoritesIds,
    setFavoritesIds,
  };

  return (
    <UserContext.Provider value={contextValues}>
      {children}
    </UserContext.Provider>
  );
};
