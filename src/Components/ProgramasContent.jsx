import "./ProgramasContent.css";
import { Collapse, Tabs, Carousel, Button } from "antd";

export default function ProgramasContent({ PROGRAMA_GLOBAL }) {
  const { Panel } = Collapse;
  const contentStyle = {
    color: "#fff",
    height: 350,
    textAlign: "center",
    lineHeight: 20,
    background: "#364d79",
    width: 350,
  };
  return (
    <div className="HighlightsContent">
      <div className="HighlightsContent-informacion">
        <h1>{PROGRAMA_GLOBAL?.displayName}</h1>
        <p>{PROGRAMA_GLOBAL?.descripcion}</p>
        <div className="HighlightsContent__contenido">
          <div className="HighlightsContent__contenidoLeft">
            <p>Itinerario: </p>
            <div className="HighlightsContent__contenidoLeftTop">
              <Collapse className="collapse-panel" accordion>
                {PROGRAMA_GLOBAL?.itinerario.map((dia) => (
                  <Panel header={dia.titulo} key={dia.id}>
                    <p>{dia.descripcion1}</p>
                    {dia.descripcion2 && <br />}
                    {dia.descripcion2 && <p>- {dia.descripcion2}</p>}
                    {dia.descripcion3 && <p>- {dia.descripcion3}</p>}
                  </Panel>
                ))}
              </Collapse>
            </div>
            <div className="HighlightsContent__contenidoLeftBottom">
              <Tabs
                style={{ width: 600, display: "flex", flexWrap: "wrap" }}
                items={PROGRAMA_GLOBAL?.items}
              />
            </div>
          </div>
          <div className="HighlightsContent__contenidoRight">
            <Carousel
              autoplay
              className="porqueperu-carousel"
              style={{ marginTop: 40 }}
            >
              <div>
                <h3 style={contentStyle}>1</h3>
              </div>
              <div>
                <h3 style={contentStyle}>2</h3>
              </div>
              <div>
                <h3 style={contentStyle}>3</h3>
              </div>
            </Carousel>
            <div className="MejoresDestinosContent-foot__bottom">
              <p>{PROGRAMA_GLOBAL?.displayName}:</p>
              <p>3500 soles</p>
            </div>
            <Button>Pregunte por este viaje</Button>
            <Button>Personalice este viaje</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
