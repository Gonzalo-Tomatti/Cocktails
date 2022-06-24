import React from "react";
import { AppState } from "../interfaces";

type GlobalContextProps = {
  drinks: AppState["cocktails"];
  changeURL: (url: string, name: string) => void;
  showRandom: () => void;
  fetchCocktails: (url: string) => Promise<AppState["cocktails"]>;
  loading: boolean;
  active: string;
  randomFlag: boolean;
};
export const GlobalContext = React.createContext<GlobalContextProps>(
  {} as GlobalContextProps
);
