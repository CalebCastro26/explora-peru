import "./Sidebar.css";
import { destinosList } from "../data/destinosList";

export default function Sidebar({ destinos }) {
  const findDestino = destinosList.find((destino) => destino.name === destinos);

  const recentItem = (topic) => (
    <div key={topic} className="sidebar__recentItem">
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="Sidebar">
      <div className="sidebar__bottom">
        <p>Más destinos:</p>
        {findDestino.destinos.map((destino) => {
          return recentItem(destino);
        })}
      </div>
    </div>
  );
}
