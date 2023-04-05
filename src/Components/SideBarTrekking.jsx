import "./SidebarTrekking.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ApplicationContext } from "../context/ApplicationContext";

export default function SidebarTrekking({ rutasFiltradas }) {
  const appctx = useContext(ApplicationContext);
  const DESTINO_GLOBAL = appctx.data;

  const recentItem = (ruta) => (
    <Link to={`/destinos/rutastrekking/${ruta.name}`}>
      <div
        key={ruta.id}
        className="sidebarTrekking__recentItem"
        onClick={() => {
          setCurrent(ruta.id);
        }}
      >
        <ion-icon name="walk-outline"></ion-icon>
        <p>{ruta.displayName}</p>
      </div>
    </Link>
  );

  return (
    <div className="sidebarTrekking">
      <div className="sidebarTrekking__bottom">
        <p>Más rutas:</p>
        {rutasFiltradas.map((ruta) => recentItem(ruta))}
      </div>
    </div>
  );
}
