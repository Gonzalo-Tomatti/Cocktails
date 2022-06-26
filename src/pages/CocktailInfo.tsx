import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { CocktailInterface } from "../interfaces";
import { GlobalContext } from "../context/GlobalContext";
import { FaArrowLeft } from "react-icons/fa";

const CocktailInfo = () => {
  const [cocktail, setCocktail] = useState<CocktailInterface>();
  const [ingredients, setIngredients] = useState<Array<string>>([]);
  const { id } = useParams();
  const { randomFlag, fetchCocktails, loading, setViewingDrink } =
    useContext(GlobalContext);

  useEffect(() => {
    setViewingDrink(true);
    let url: string =
      id === "random"
        ? "https://www.thecocktaildb.com/api/json/v1/1/random.php"
        : `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

    fetchCocktails(url).then((fetchedDrinks) => {
      setCocktail(fetchedDrinks[0]);
      const {
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = fetchedDrinks[0];
      setIngredients([
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      ]);
    });
  }, [id, randomFlag]);

  if (loading) {
    return <div className="fs-1 text-center">Cargando...</div>;
  }
  return (
    <article>
      <div className="container">
        <Link className="arrow" to="/">
          <FaArrowLeft />
        </Link>
        <h3 className="text-center">{cocktail?.strDrink}</h3>

        <div className="row row-cols-md-2 p-3">
          <img
            className="drink-img card-img-top col-12 mx-auto"
            src={cocktail?.strDrinkThumb}
            alt={cocktail?.strDrink}
            loading="lazy"
          />
          <div className="col-12 p-5">
            <p>ID: {cocktail?.idDrink}</p>
            <p>Categoría: {cocktail?.strCategory}</p>
            <p>{cocktail?.strAlcoholic}</p>
            <p>Vaso: {cocktail?.strGlass}</p>
            <p>Ingredientes:</p>
            <ul>
              {ingredients.map((i, index) => {
                return i ? <li key={index}> {i}</li> : null;
              })}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CocktailInfo;
