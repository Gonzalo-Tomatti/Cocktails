import React from "react";
import "./App.css";
import Filter from "./components/Filter";
import { GlobalProvider } from "./context/GlobalProvider";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CocktailInfo from "./pages/CocktailInfo";
import NotFound from "./pages/NotFound";
import Title from "./components/Title";

function App() {
  return (
    <HashRouter>
      <GlobalProvider>
        <Title />
        <Filter />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cocktail-info/:id" element={<CocktailInfo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </GlobalProvider>
    </HashRouter>
  );
}

export default App;
