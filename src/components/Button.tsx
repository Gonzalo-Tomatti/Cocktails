import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";

interface ButtonProps {
  b: { name: string; url: string };
}
const Button = ({ b }: ButtonProps) => {
  const { changeURL, active } = useContext(GlobalContext);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <Link
        to="/"
        onClick={() => changeURL(b.url, b.name)}
        className="btn btn-success m-2"
      >
        {b.name}
      </Link>
      {/* subrayado de la categoría actual */}
      <span className={`${active === b.name && "underline"}`}></span>
    </div>
  );
};

export default Button;
