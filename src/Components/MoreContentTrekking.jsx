import React from "react";
import "./MoreContentTrekking.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ApplicationContext } from "../context/ApplicationContext";

export default function MoreContentTrekking() {
  const appctx = useContext(ApplicationContext);
  const TREK_GLOBAL = appctx.data.trekGlobal;

  const programas = ({ id, nombre, link, descripcion }) => (
    <div key={id} className="MoreContentTrekking__article">
      <div className="MoreContentTrekking__articleLeft"></div>
      <Link to={`/${link}`} className="MoreContent__articleRight">
        <h4>{nombre}</h4>
        <p>{descripcion}</p>
      </Link>
    </div>
  );

  return (
    <div className="MoreContentTrekking">
      <div className="MoreContentTrekking__contain">
        <div className="MoreContentTrekking__header">
          <h2>Tours y Programas</h2>
        </div>
        {TREK_GLOBAL?.programa.map((pro) => programas(pro))}
      </div>
    </div>
  );
}
