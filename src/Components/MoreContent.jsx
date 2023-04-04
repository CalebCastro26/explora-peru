import React from "react";
import "./MoreContent.css";
import { destinosList } from "../data/destinosList";
import { Link } from "react-router-dom";

export default function MoreContent({ destinos }) {
  const findDestino = destinosList.find((destino) => destino.name === destinos);

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
          <h2>Tours y Programas</h2>
        </div>
        {findDestino.programa.map((pro) => programas(pro))}
      </div>
    </div>
  );
}
