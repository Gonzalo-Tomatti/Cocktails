import React, { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { AppState } from "../interfaces";

interface ProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const GlobalProvider = ({ children }: ProviderProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [drinks, setDrinks] = useState<AppState["cocktails"]>([]);
  const [category, setCategory] = useState<string>(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
  );
  const [randomFlag, setRandomFlag] = useState<boolean>(false);

  const showRandom = (): void => {
    setRandomFlag(!randomFlag);
  };

  const changeURL = (url: string): void => {
    setCategory(url);
  };

  useEffect(() => {
    setLoading(true);
    const fetchCocktails = async () => {
      const res = await fetch(category);
      const data = await res.json();
      setDrinks(data.drinks);
      setLoading(false);
    };
    fetchCocktails();
  }, [category]);

  return (
    <GlobalContext.Provider
      value={{ drinks, changeURL, showRandom, randomFlag, loading }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
