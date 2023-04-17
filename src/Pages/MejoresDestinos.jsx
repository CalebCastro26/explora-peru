import Sidebar from "../Components/Sidebar";
import MejoresDestinosContent from "../Components/MejoresDestinosContent.jsx";
import MoreContent from "../Components/MoreContent.jsx";
import { useParams } from "react-router-dom";
import Page404 from "./Page404";
import "./MejoresDestinos.css";
import { destinosList } from "../data/destinosList";
import { useContext, useEffect, useState } from "react";
import { ApplicationContext } from "../context/ApplicationContext";
export default function MejoresDestinos() {
  /* Verifica si existe el destino */
  const { destino } = useParams();
  const findIndex = destinosList.findIndex((d) => d.name === destino);
  const findDestino = destinosList.find((des) => des.name === destino);
  const [current, setCurrent] = useState(0);
  const appctx = useContext(ApplicationContext);

  useEffect(() => {
    window.scroll({ top: 0 });
  }, []);

  useEffect(() => {
    appctx.setDataContext({
      ...appctx.data,
      destinoGlobal: findDestino,
    });
    setCurrent(0);
  }, [destino]);

  const DESTINO_GLOBAL = appctx.data.destinoGlobal;

  return findIndex === -1 ? (
    <Page404 />
  ) : (
    <div className="mejoresDestinos">
      <div className="mejoresDestinos-img-header">
        <img src="/destinos/trek-cajamarca-trujillo.jpg" alt="" />
        <img src="/destinos/trek-cajamarca-trujillo.jpg" alt="" />
        <img src="/destinos/trek-cajamarca-trujillo.jpg" alt="" />
      </div>
      <div className="mejoresDestinos-content">
        <Sidebar setCurrent={setCurrent} />
        <MejoresDestinosContent
          current={current}
          DESTINO_GLOBAL={DESTINO_GLOBAL}
        />
        <MoreContent
          DESTINO_GLOBAL={DESTINO_GLOBAL}
          titulo="Tours y Programas"
        />
      </div>
    </div>
  );
}
