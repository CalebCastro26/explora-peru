import "./SidebarHighlights.css";
import { Link } from "react-router-dom";

export default function SidebarHighlights({ highlightsFiltrados }) {
  const recentItem = (ruta) => (
    <Link to={`/highlights/${ruta.name}`} key={ruta.id}>
      <div
        className="sidebarHighlights__recentItem"
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
    <div className="sidebarHighlights">
      <div className="sidebarHighlights__bottom">
        <p>Más Highlights:</p>
        {highlightsFiltrados.map((ruta) => recentItem(ruta))}
      </div>
    </div>
  );
}
