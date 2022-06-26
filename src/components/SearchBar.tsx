import React, { useRef, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const searchValue = useRef<HTMLInputElement>(null);
  const { searchDrink, viewingDrink } = useContext(GlobalContext);
  if (!viewingDrink) {
    return (
      <div className="d-flex align-items-center search-container mx-auto px-2 mb-2">
        <FaSearch className="text-secondary search-icon" />
        <input
          className="search my-3"
          type="text"
          name="name"
          id="name"
          placeholder="Search"
          ref={searchValue}
          onChange={(e) => searchDrink(e.target.value)}
        />
      </div>
    );
  } else return null;
};

export default SearchBar;
