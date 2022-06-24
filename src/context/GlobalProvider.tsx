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
  const [active, setActive] = useState<string>("Con alcohol");

  /*randomFlag asegura que se pueda seguir cambiando la bebida aunque el url para fetchear una random siga siendo el mismo (no importa si está en true o false, lo único que importa es que cambie para usarlo en el useEffect de CocktailInfo)*/
  const showRandom = (): void => {
    setRandomFlag(!randomFlag);
  };

  const changeURL = (url: string, name: string): void => {
    setCategory(url);
    setActive(name);
  };

  const fetchCocktails = async (
    url: string
  ): Promise<AppState["cocktails"]> => {
    const res = await fetch(url);
    const data = await res.json();
    setLoading(false);
    return data.drinks;
  };

  useEffect(() => {
    setLoading(true);
    fetchCocktails(category).then((fetchedDrinks) => {
      setDrinks(fetchedDrinks);
    });
  }, [category]);

  return (
    <GlobalContext.Provider
      value={{
        drinks,
        changeURL,
        showRandom,
        fetchCocktails,
        active,
        randomFlag,
        loading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
