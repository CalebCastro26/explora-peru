import "./HighlightsContent.css";
import { Collapse, Tabs } from "antd";

export default function HighlightsContent({ HIGHLIGHT_GLOBAL }) {
  const { Panel } = Collapse;

  return (
    <div className="HighlightsContent">
      <div className="HighlightsContent-informacion">
        <h1>{HIGHLIGHT_GLOBAL?.displayName}</h1>
        <p>{HIGHLIGHT_GLOBAL?.descripcion}</p>
        <div className="HighlightsContent__contenido">
          <div className="HighlightsContent__contenidoLeft">
            <p>Itinerario: </p>
            <div className="HighlightsContent__contenidoLeftTop">
              <Collapse className="collapse-panel" accordion>
                {HIGHLIGHT_GLOBAL?.itinerario.map((dia) => (
                  <Panel header={dia.titulo} key={dia.id}>
                    <p>{dia.descripcion}</p>
                  </Panel>
                ))}
              </Collapse>
            </div>
            <div className="HighlightsContent__contenidoLeftBottom">
              <Tabs
                style={{ width: 600, display: "flex", flexWrap: "wrap" }}
                items={HIGHLIGHT_GLOBAL?.items}
              />
            </div>
          </div>
          <div className="HighlightsContent__contenidoRight">
            <div className="MejoresDestinosContent-foot__bottom">
              <p>Información general:</p>
              <div className="MejoresDestinosContent-foot__recentItem">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto quae earum reprehenderit magni, corrupti dolores
                  delectus fuga et sapiente optio doloribus quibusdam incidunt
                  obcaecati iste ipsum esse quisquam, ab iusto. Saepe nulla eum,
                  voluptatum sequi error ducimus dolorum molestiae consequuntur
                  deleniti numquam expedita quae voluptates ipsam dignissimos,
                  esse soluta aperiam assumenda facilis. Soluta quisquam ad
                  provident commodi molestias unde quis! Pariatur voluptates
                  laborum inventore qui voluptatum velit non ducimus
                  voluptatibus, corrupti magni animi eos eaque, minima sit ex,
                  accusantium mollitia doloremque et culpa.
                </p>
              </div>
            </div>
            <img
              src="/destinos/trek-cajamarca-trujillo.jpg"
              alt=""
              style={{ height: 250, marginTop: 30 }}
            />
            <div className="MejoresDestinosContent-foot__bottom">
              <p>Tips de Viaje:</p>
              {HIGHLIGHT_GLOBAL?.tips.map((tip, index) => (
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
