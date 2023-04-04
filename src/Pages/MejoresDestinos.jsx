import Sidebar from "../Components/Sidebar";
import MejoresDestinosContent from "../Components/MejoresDestinosContent.jsx";
import MoreContent from "../Components/MoreContent.jsx";
import { useParams } from "react-router-dom";
import Page404 from "./Page404";
import "./MejoresDestinos.css";
import { destinosList } from "../data/destinosList";
export default function MejoresDestinos() {
  const { destino } = useParams();
  const findIndex = destinosList.findIndex((d) => d.name === destino);

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
        <Sidebar destinos={destino} />
        <MejoresDestinosContent destinos={destino} />
        <MoreContent destinos={destino} />
      </div>
    </div>
  );
}
