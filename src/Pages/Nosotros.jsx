import "./Nosotros.css";
import { Tabs } from "antd";

export default function Nosotros() {
  const item1 = (
    <div>
      <h1>Hola</h1>
    </div>
  );

  const items = [
    {
      key: "1",
      label: `Diseño Personalizado`,
      children: item1,
    },
    {
      key: "2",
      label: `Servicio`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: "3",
      label: `Nuestros Guias`,
      children: `Content of Tab Pane 3`,
    },
    {
      key: "4",
      label: `Inmersión Cultural y gastronomica`,
      children: `Content of Tab Pane 3`,
    },
    {
      key: "5",
      label: `Inclusión y respeto`,
      children: `Content of Tab Pane 3`,
    },
  ];

  return (
    <section className="nosotros">
      <div className="nosotros-img-header">
        <img src="/destinos/trek-cajamarca-trujillo.jpg" alt="" />
      </div>
      <h1>EXPLORA PERÚ, TRAVEL & TASTE</h1>
      <p>
        Somos un equipo de profesionales en turismo con más de 20 años de
        trayectoria, especializados en atención al cliente y servicio
        personalizado. Sabemos que cada viajero tiene expectativas distintas;
        por eso creamos experiencias auténticas e inolvidables diseñando viajes
        a la medida. Somos especialistas en el destino Perú; con el compromiso
        que nuestros servicios los lleve a disfrutar de la cultura y gastronomía
        peruana.
      </p>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
        <Tabs type="card" items={items} defaultActiveKey="1" />
      </div>
    </section>
  );
}
