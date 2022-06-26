import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Cocktail from "../components/Cocktail";

const Home = () => {
  const { drinks, loading, setViewingDrink } = useContext(GlobalContext);
  useEffect(() => setViewingDrink(false), []);
  if (loading) {
    return <div className="fs-1 text-center">Cargando...</div>;
  }
  if (drinks.length < 1) {
    return (
      <p className="text-light text-center">
        No hay bebidas con el nombre buscado
      </p>
    );
  }
  console.log(drinks.length < 1);
  return (
    <section>
      <div className="container p-3">
        <div className="row row-cols-sm-2 row-cols-md-4 row-cols-lg-6">
          {drinks.map((drink) => (
            <Cocktail key={drink.idDrink} c={drink} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
