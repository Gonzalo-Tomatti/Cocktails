import React, { useContext } from "react";
import { ButtonInterface } from "../interfaces";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import Button from "./Button";

const Filter = () => {
  const { showRandom } = useContext(GlobalContext);
  const buttons: Array<ButtonInterface> = [
    {
      name: "Con alcohol",
      url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic",
    },
    {
      name: "Sin alcohol",
      url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic",
    },
    {
      name: "Cocktail",
      url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail",
    },
    {
      name: "Bebida ordinaria",
      url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink",
    },
  ];

  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center flex-wrap mb-5">
        <Link
          to={"/cocktail-info/random"}
          className="btn btn-light m-2"
          onClick={showRandom}
        >
          Random
        </Link>
        {buttons.map((button) => (
          <Button key={button.name} b={button} />
        ))}
      </div>
    </div>
  );
};

export default Filter;
