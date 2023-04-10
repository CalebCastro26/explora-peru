import { useParams } from "react-router-dom";
import Page404 from "./Page404";
import { highlightsList } from "../data/highlightsList.jsx";
import "./Highlights.css";
import { useEffect, useContext } from "react";
import { ApplicationContext } from "../context/ApplicationContext.jsx";
import SidebarHighlights from "../Components/SidebarHighlights";
import HighlightsContent from "../Components/HighlightsContent";
import MoreContent from "../Components/MoreContent";

export default function Highlights() {
  const { highlight } = useParams();
  const findIndex = highlightsList.findIndex((h) => h.name === highlight);
  const highlightsFiltrados = highlightsList.filter(
    (h) => h.name !== highlight
  );
  const findHigh = highlightsList.find((h) => h.name === highlight);
  const appctx = useContext(ApplicationContext);
  useEffect(() => {
    appctx.setDataContext({
      ...appctx.data,
      highlightGlobal: findHigh,
    });
  }, [highlight]);

  const HIGHLIGHT_GLOBAL = appctx.data.highlightGlobal;

  return findIndex === -1 ? (
    <Page404 />
  ) : (
    <div className="rutasHighlights">
      <div className="rutasHighlights-img-header">
        <img src="/destinos/trek-cajamarca-trujillo.jpg" alt="" />
      </div>
      <div className="rutasHighlights__content">
        <SidebarHighlights highlightsFiltrados={highlightsFiltrados} />
        <HighlightsContent HIGHLIGHT_GLOBAL={HIGHLIGHT_GLOBAL} />
        <MoreContent
          titulo="Tours y programas"
          DESTINO_GLOBAL={HIGHLIGHT_GLOBAL}
        />
      </div>
    </div>
  );
}
