import React from "react";
import "./MoreContent.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ApplicationContext } from "../context/ApplicationContext";

export default function MoreContent({ destinos }) {
  const appctx = useContext(ApplicationContext);
  const DESTINO_GLOBAL = appctx.data.destinoGlobal;

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
        {DESTINO_GLOBAL?.programa.map((pro) => programas(pro))}
      </div>
    </div>
  );
}
