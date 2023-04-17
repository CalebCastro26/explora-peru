import SidebarTrekking from "../Components/SideBarTrekking.jsx";
import { useParams } from "react-router-dom";
import Page404 from "./Page404.jsx";
import { rutasTrekkingList } from "../data/rutasTrekkingList.jsx";
import "./RutasTrekking.css";
import { useContext, useEffect } from "react";
import { ApplicationContext } from "../context/ApplicationContext.jsx";
import TrekkingContent from "../Components/TrekkingContent.jsx";
import MoreContent from "../Components/MoreContent.jsx";

export default function RutasTrekking() {
  const { ruta } = useParams();
  const findIndex = rutasTrekkingList.findIndex((t) => t.name === ruta);
  const rutasFiltradas = rutasTrekkingList.filter((t) => t.name !== ruta);
  const findTrek = rutasTrekkingList.find((t) => t.name === ruta);
  const appctx = useContext(ApplicationContext);
  useEffect(() => {
    appctx.setDataContext({
      ...appctx.data,
      trekGlobal: findTrek,
    });
  }, [ruta]);

  useEffect(() => {
    window.scroll({ top: 0 });
  }, []);

  const TREK_GLOBAL = appctx.data.trekGlobal;

  return findIndex === -1 ? (
    <Page404 />
  ) : (
    <div className="rutasTrekking">
      <div className="rutasTrekking-img-header">
        <img src="/destinos/trek-cajamarca-trujillo.jpg" alt="" />
        <img src="/destinos/trek-cajamarca-trujillo.jpg" alt="" />
        <img src="/destinos/trek-cajamarca-trujillo.jpg" alt="" />
      </div>
      <div className="rutasTrekking-content">
        <SidebarTrekking rutasFiltradas={rutasFiltradas} />
        <TrekkingContent TREK_GLOBAL={TREK_GLOBAL} />
        <MoreContent titulo="Tours y Programas" DESTINO_GLOBAL={TREK_GLOBAL} />
      </div>
    </div>
  );
}
