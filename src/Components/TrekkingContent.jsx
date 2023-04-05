import React from "react";
import { useContext } from "react";
import { ApplicationContext } from "../context/ApplicationContext";
import { Tabs } from "antd";

export default function TrekkingContent() {
  const appctx = useContext(ApplicationContext);
  const TREK_GLOBAL = appctx.data.trekGlobal;

  return (
    <div className="MejoresDestinosContent">
      <div className="MejoresDestinosContent-informacion">
        <h1>{TREK_GLOBAL?.displayName}</h1>
        <p>{TREK_GLOBAL?.descripcion}</p>
        {TREK_GLOBAL?.descripcion2 && <br />}
        {TREK_GLOBAL?.descripcion2 && <p>{TREK_GLOBAL?.descripcion2}</p>}
        <div className="MejoresDestinosContent-informacion-header">
          <Tabs items={TREK_GLOBAL?.items} style={{ width: 600 }} />
          <div className="MejoresDestinosContent-foot">
            <img
              src="/destinos/trek-cajamarca-trujillo.jpg"
              alt=""
              style={{ height: 250 }}
            />
            <div className="MejoresDestinosContent-foot__bottom">
              <p>Tips de Viaje:</p>
              {TREK_GLOBAL?.tips.map((tip, index) => (
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
    </div>
  );
}
