import React from "react";
import { AppState } from "../interfaces";

type GlobalContextProps = {
  drinks: AppState["cocktails"];
  changeURL: (url: string, name: string) => void;
  showRandom: () => void;
  fetchCocktails: (url: string) => Promise<AppState["cocktails"]>;
  searchDrink: (name: string) => void;
  loading: boolean;
  active: string;
  randomFlag: boolean;
  setViewingDrink: (value: boolean) => void;
  viewingDrink: boolean;
};
export const GlobalContext = React.createContext<GlobalContextProps>(
  {} as GlobalContextProps
);
