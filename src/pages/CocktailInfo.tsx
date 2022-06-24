import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { CocktailInterface } from "../interfaces";
import { GlobalContext } from "../context/GlobalContext";

const CocktailInfo = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [cocktail, setCocktail] = useState<CocktailInterface>();
  const { id } = useParams();
  const { randomFlag } = useContext(GlobalContext);

  useEffect(() => {
    setLoading(true);
    let url: string =
      id === "random"
        ? "https://www.thecocktaildb.com/api/json/v1/1/random.php"
        : `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

    const fetchDrink = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setCocktail(data.drinks[0]);
      setLoading(false);
    };
    fetchDrink();
  }, [id, randomFlag]);

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <section>
      <div className="container">
        <Link to="/">Atrás</Link>

        <img
          className="img card-img-top"
          src={cocktail?.strDrinkThumb}
          alt={cocktail?.strDrink}
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default CocktailInfo;
