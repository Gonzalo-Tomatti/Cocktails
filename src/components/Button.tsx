import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";

interface ButtonProps {
  b: { name: string; url: string };
}
const Button = ({ b }: ButtonProps) => {
  const { changeURL } = useContext(GlobalContext);

  return (
    <Link
      to="/"
      onClick={() => changeURL(b.url)}
      className="btn btn-success m-2"
    >
      {b.name}
    </Link>
  );
};

export default Button;
