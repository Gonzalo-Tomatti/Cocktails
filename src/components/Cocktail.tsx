import React from "react";
import { CocktailInterface } from "../interfaces";
import { Link } from "react-router-dom";

interface CocktailProps {
  c: CocktailInterface;
}

const Cocktail = ({ c }: CocktailProps) => {
  return (
    <Link className="col-12 p-3" to={`/cocktail-info/${c.idDrink}`}>
      <div className="card">
        <img
          className="img card-img-top"
          src={c.strDrinkThumb}
          alt={c.strDrink}
          loading="lazy"
        />
        <div className="card-body bg-secondary">
          <p className="card-title text-wrap text-center text-light">
            {c.strDrink}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Cocktail;
