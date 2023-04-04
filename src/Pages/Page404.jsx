import React from "react";
import "./Page404.css";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div className="page404">
      <h1>404</h1>
      <h3>Not Found</h3>
      <p>La página que estas buscando no existe.</p>
      <p>
        <Link to={"/"}>Regresa al inicio</Link>
      </p>
    </div>
  );
}
