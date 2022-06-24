import React from "react";
import { AppState } from "../interfaces";

type GlobalContextProps = {
  drinks: AppState["cocktails"];
  changeURL: (url: string) => void;
  showRandom: () => void;
  loading: boolean;
  randomFlag: boolean;
};
export const GlobalContext = React.createContext<GlobalContextProps>(
  {} as GlobalContextProps
);
