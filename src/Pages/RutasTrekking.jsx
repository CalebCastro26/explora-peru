import SidebarTrekking from "../Components/SideBarTrekking.jsx";
import { useParams } from "react-router-dom";
import Page404 from "./Page404.jsx";
import { rutasTrekkingList } from "../data/rutasTrekkingList.jsx";
import "./RutasTrekking.css";
import MoreContentTrekking from "../Components/MoreContentTrekking.jsx";
import { useContext, useEffect } from "react";
import { ApplicationContext } from "../context/ApplicationContext.jsx";
import TrekkingContent from "../Components/TrekkingContent.jsx";

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
        <TrekkingContent />
        <MoreContentTrekking />
      </div>
    </div>
  );
}
