import React from "react";
import "./MoreContent.css";
import { Link } from "react-router-dom";

export default function MoreContent({ DESTINO_GLOBAL, titulo }) {
  const programas = ({ id, nombre, link, descripcion }) => (
    <div key={id} className="MoreContent__article">
      <div className="MoreContent__articleLeft"></div>
      <Link to={`/${link}`} className="MoreContent__articleRight">
        <h4>{nombre}</h4>
        <p>{descripcion}</p>
      </Link>
    </div>
  );

  return (
    <div className="MoreContent">
      <div className="MoreContent__contain">
        <div className="MoreContent__header">
          <h2>{titulo}</h2>
        </div>
        {DESTINO_GLOBAL?.programa.map((pro) => programas(pro))}
      </div>
    </div>
  );
}
