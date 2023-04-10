import "./SidebarTrekking.css";
import { Link } from "react-router-dom";

export default function SidebarTrekking({ rutasFiltradas }) {
  const recentItem = (ruta) => (
    <Link to={`/destinos/rutastrekking/${ruta.name}`} key={ruta.id}>
      <div
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
