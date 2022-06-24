import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Cocktail from "../components/Cocktail";

const Home = () => {
  const { drinks, loading } = useContext(GlobalContext);

  if (loading) {
    return <div className="fs-1 text-center">Cargando...</div>;
  }
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
