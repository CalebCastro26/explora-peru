import "./Programas.css";
import React from "react";
import Page404 from "./Page404";
import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import MoreContent from "../Components/MoreContent";
import { programasList } from "../data/programasList";
import { ApplicationContext } from "../context/ApplicationContext.jsx";
import SideBarProgramas from "../Components/SideBarProgramas";
import ProgramasContent from "../Components/ProgramasContent";

export default function Programas() {
  const { programa } = useParams();
  const findIndex = programasList.findIndex((p) => p.name === programa);
  const programasFiltrados = programasList.filter((p) => p.name !== programa);
  const findPrograma = programasList.find((p) => p.name === programa);
  const appctx = useContext(ApplicationContext);
  useEffect(() => {
    appctx.setDataContext({
      ...appctx.data,
      globalPrograma: findPrograma,
    });
  }, [programa]);

  useEffect(() => {
    window.scroll({ top: 0 });
  }, []);

  const PROGRAMA_GLOBAL = appctx.data.globalPrograma;

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
        <SideBarProgramas rutasFiltradas={programasFiltrados} />
        <ProgramasContent PROGRAMA_GLOBAL={PROGRAMA_GLOBAL} />
        <MoreContent
          titulo="Tours y programas"
          DESTINO_GLOBAL={PROGRAMA_GLOBAL}
        />
      </div>
    </div>
  );
}
