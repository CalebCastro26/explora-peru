import "./MejoresDestinosContent.css";
import { destinosList } from "../data/destinosList";
import { Tabs } from "antd";

export default function MejoresDestinosContent({ destinos }) {
  const findDestino = destinosList.find((destino) => destino.name === destinos);
  const items = [
    {
      key: "1",
      label: `Información`,
      children: `Información`,
    },
    {
      key: "2",
      label: `Atractivos`,
      children: `Atractivos`,
    },
  ];

  return (
    <div className="MejoresDestinosContent">
      <h1>{findDestino.name}</h1>
      <p>{findDestino.descripcion}</p>
      <br />
      <p>{findDestino.descripcion2}</p>
      <div className="MejoresDestinosContent-informacion">
        <Tabs items={items} style={{ width: 400, margin: "0 auto" }}></Tabs>
        <img
          src="/destinos/trek-cajamarca-trujillo.jpg"
          alt=""
          style={{ height: 250 }}
        />
      </div>
    </div>
  );
}
