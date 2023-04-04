import "./MejoresDestinosContent.css";
import { useContext } from "react";
import { ApplicationContext } from "../context/ApplicationContext";

import { Tabs } from "antd";

export default function MejoresDestinosContent({ current }) {
  const appctx = useContext(ApplicationContext);
  const DESTINO_GLOBAL = appctx.data.destinoGlobal;

  return (
    <div className="MejoresDestinosContent">
      <div className="MejoresDestinosContent-informacion">
        <h1>
          {DESTINO_GLOBAL?.name} - {DESTINO_GLOBAL?.destinos[current].nombre}{" "}
        </h1>
        <p>{DESTINO_GLOBAL?.descripcion}</p>
        <br />
        <p>{DESTINO_GLOBAL?.descripcion2}</p>
        <div className="MejoresDestinosContent-informacion-header">
          <Tabs
            items={DESTINO_GLOBAL?.destinos[current].items}
            style={{ width: 600 }}
          ></Tabs>
          <img
            src="/destinos/trek-cajamarca-trujillo.jpg"
            alt=""
            style={{ height: 250 }}
          />
        </div>
        <div className="MejoresDestinosContent-foot">
          <div className="MejoresDestinosContent-foot__bottom">
            <p>Tips de Viaje:</p>
            {DESTINO_GLOBAL?.tips.map((tip, index) => (
              <div
                key={index}
                className="MejoresDestinosContent-foot__recentItem"
              >
                <img src="/explora-icon.webp" height="32" />
                <p>{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
