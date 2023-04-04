import "./Sidebar.css";
import { useContext } from "react";
import { ApplicationContext } from "../context/ApplicationContext";

export default function Sidebar({ setCurrent }) {
  const appctx = useContext(ApplicationContext);
  const DESTINO_GLOBAL = appctx.data.destinoGlobal;

  const recentItem = (destino) => (
    <div
      key={destino.id}
      className="sidebar__recentItem"
      onClick={() => {
        setCurrent(destino.id);
      }}
    >
      <ion-icon name="airplane-outline"></ion-icon>
      <p>{destino.nombre}</p>
    </div>
  );

  return (
    <div className="Sidebar">
      <div className="sidebar__bottom">
        <p>Más destinos:</p>
        {DESTINO_GLOBAL?.destinos.map((destino) => {
          return recentItem(destino);
        })}
      </div>
    </div>
  );
}
