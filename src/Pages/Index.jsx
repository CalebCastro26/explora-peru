import { Card, Carousel } from "antd";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import "./Index.css";
export default function Index() {
  const { Meta } = Card;
  const { t } = useTranslation();

  useEffect(() => {
    window.scroll({ top: 0 });
  }, []);

  return (
    <div className="main">
      <section>
        <Carousel autoplay effect="scrollx">
          <div>
            <div className="carousuel carousel1">
              <div className="carousel-title">
                {t("index.carousel.primerCard")}
              </div>
            </div>
          </div>
          <div>
            <div className="carousuel carousel2">
              <div className="carousel-title">Segundo titulo de viaje</div>
            </div>
          </div>
          <div>
            <div className="carousuel carousel3">
              <div className="carousel-title">Tercer titulo de viaje</div>
            </div>
          </div>
          <div>
            <div className="carousuel carousel4">
              <div className="carousel-title">Cuarto titulo de viaje</div>
            </div>
          </div>
          <div>
            <div className="carousuel carousel5">
              <div className="carousel-title">Quinto titulo de viaje</div>
            </div>
          </div>
        </Carousel>
      </section>
      <section className="inicio">
        <h1>EXPLORA PERÚ, TRAVEL & TASTE</h1>
        <div className="inicio-content">
          <p>
            Perú es un país muy diverso, lleno de culturas vivas, sabores y
            paisajes de ensueño. Disfrute cada destino, con experciencias
            diseñadas según su preferencia, por un equipo con experciencia y
            pasión por los viajes.
          </p>
          <p style={{ fontWeight: "bold" }}>
            Tours a su medida | Los mejores guias locales | Soporte 24 / 7
            durante su viaje | Contacto real con la cultura & gastronomia
          </p>
        </div>
      </section>
      <section id="destinos" className="destinos">
        <div className="destinos-content">
          <h2>DESTINO PERÚ - DESIERTOS, ANDES & AMAZONIA</h2>
          <p>
            Perú es un país con gran biodiversidad y contrastes. Con hermosas
            playas, imponentes montañas y una exuberante selva amazónica.
            Herederos de una cultura milenaria y una reconocida gastronomía.
          </p>
        </div>
        <div className="destinos-card">
          <div className="destinos-one-card noHover">
            <img src="/destinos/trek-cajamarca-amazonas.jpg" alt="" />
            <div className="destinos-layer">
              <h4 className="destinos-layer-titulo">Destino Desierto</h4>
              <p className="destinos-layer-contenido">Machu Picchu - Cuzco</p>
            </div>
          </div>
          <div className="destinos-one-card noHover">
            <img src="/destinos/trek-cajamarca-lambayeque2.jpg" alt="" />
            <div className="destinos-layer">
              <h4 className="destinos-layer-titulo">Destino Andes</h4>
              <p className="destinos-layer-contenido">Andes - Cuzco</p>
            </div>
          </div>
          <div className="destinos-one-card noHover">
            <img src="/destinos/trek-cajamarca-trujillo.jpg" alt="" />
            <div className="destinos-layer">
              <h4 className="destinos-layer-titulo">Destino Amazonia</h4>
              <p className="destinos-layer-contenido">Amazonas - Selva</p>
            </div>
          </div>
          <div className="destinos-one-card noHover">
            <img src="/destinos/trek-cajamarca-trujillo.jpg" alt="" />
            <div className="destinos-layer">
              <h4 className="destinos-layer-titulo">Destino Amazonia</h4>
              <p className="destinos-layer-contenido">Amazonas - Selva</p>
            </div>
          </div>
          <div className="destinos-one-card noHover">
            <img src="/destinos/trek-cajamarca-trujillo.jpg" alt="" />
            <div className="destinos-layer">
              <h4 className="destinos-layer-titulo">Destino Amazonia</h4>
              <p className="destinos-layer-contenido">Amazonas - Selva</p>
            </div>
          </div>
          <div className="destinos-one-card noHover">
            <img src="/destinos/trek-cajamarca-trujillo.jpg" alt="" />
            <div className="destinos-layer">
              <h4 className="destinos-layer-titulo">Destino Amazonia</h4>
              <p className="destinos-layer-contenido">Amazonas - Selva</p>
            </div>
          </div>
        </div>
      </section>
      <section id="paquetes" className="paquetes">
        <h2>PROGRAMAS MÁS SOLICITADOS</h2>
        <p>
          Estos programas le ofrecen lo mejor de Perú. Recuerde que todos pueden
          cambiarse y modificarse de acuerdo a sus necesidades y preferencias.
        </p>
        {/* Paquetes Cards */}
        <div className="paquetes-list">
          <div className="paquete">
            <img src="/destinos/trek-cajamarca-amazonas.jpg" alt="" />
            <div className="layer">
              <h4>Machu Picchu</h4>
              <p className="layer-contenido">
                5 dias / 4 noches y/o descripción
              </p>
            </div>
          </div>
          <div className="paquete">
            <img src="/destinos/trek-cajamarca-lambayeque2.jpg" alt="" />
            <div className="layer">
              <h4>Perú Clásico</h4>
              <p className="layer-contenido">
                3 dias / 3 noches y/o descripción
              </p>
            </div>
          </div>
          <div className="paquete">
            <img src="/destinos/trek-cajamarca-trujillo.jpg" alt="" />
            <div className="layer">
              <h4>Perú Milenario</h4>
              <p className="layer-contenido">
                3 dias / 3 noches y/o descripción
              </p>
            </div>
          </div>
          <div className="paquete">
            <img src="/destinos/trek-cajamarca-trujillo.jpg" alt="" />
            <div className="layer">
              <h4>Nazca & Paracas</h4>
              <p className="layer-contenido">
                3 dias / 3 noches y/o descripción
              </p>
            </div>
          </div>
          <div className="paquete">
            <img src="/destinos/trek-cajamarca-trujillo.jpg" alt="" />
            <div className="layer">
              <h4>Amazonas</h4>
              <p className="layer-contenido">
                3 dias / 3 noches y/o descripción
              </p>
            </div>
          </div>
          <div className="paquete">
            <img src="/destinos/trek-cajamarca-trujillo.jpg" alt="" />
            <div className="layer">
              <h4>Amazonas</h4>
              <p className="layer-contenido">
                3 dias / 3 noches y/o descripción
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="highlights" className="highlights">
        <h2>HIGHLIGHTS EN PERÚ: INCA TRAIL / VININCUNCA / FDS MACHU PICCHU</h2>
        <p>
          Estos programas le ofrecen lo mejor de Perú. Recuerde que todos pueden
          cambiarse y modificarse de acuerdo a sus necesidades y preferencias.
        </p>
        <div className="card-highlights">
          <Card
            className="oneCard"
            hoverable
            style={{ width: 400 }}
            cover={<img alt="H1" src="/destinos/trek-cajamarca-amazonas.jpg" />}
          >
            <Meta
              title="FD Machu Picchu - Cuzco"
              description="Descripción primer highlight"
            />
          </Card>
          <Card
            className="oneCard"
            hoverable
            style={{ width: 400 }}
            cover={
              <img alt="H2" src="/destinos/trek-cajamarca-lambayeque2.jpg" />
            }
          >
            <Meta
              title="FD Montaña 7 colores - Cuzco"
              description="Descripción segundo highlight"
            />
          </Card>
          <Card
            className="oneCard"
            hoverable
            style={{ width: 400 }}
            cover={<img alt="H3" src="/destinos/trek-cajamarca-trujillo.jpg" />}
          >
            <Meta
              title="Camino Inca - Cuzco"
              description="Descripción tercer highlight"
            />
          </Card>
          <Card
            className="oneCard"
            hoverable
            style={{ width: 400 }}
            cover={<img alt="H3" src="/destinos/trek-cajamarca-trujillo.jpg" />}
          >
            <Meta
              title="Tour Gastronomico - Lima"
              description="Descripción tercer highlight"
            />
          </Card>
          <Card
            className="oneCard"
            hoverable
            style={{ width: 400 }}
            cover={<img alt="H3" src="/destinos/trek-cajamarca-trujillo.jpg" />}
          >
            <Meta
              title="FD Uros y Taquile - Puno"
              description="Descripción tercer highlight"
            />
          </Card>
          <Card
            className="oneCard"
            hoverable
            style={{ width: 400 }}
            cover={<img alt="H3" src="/destinos/trek-cajamarca-trujillo.jpg" />}
          >
            <Meta
              title="Cañon del Colca - Arequipa"
              description="Descripción tercer highlight"
            />
          </Card>
          <Card
            className="oneCard"
            hoverable
            style={{ width: 400 }}
            cover={<img alt="H3" src="/destinos/trek-cajamarca-trujillo.jpg" />}
          >
            <Meta
              title="FD Uros y Taquile - Puno"
              description="Descripción tercer highlight"
            />
          </Card>
          <Card
            className="oneCard"
            hoverable
            style={{ width: 400 }}
            cover={<img alt="H3" src="/destinos/trek-cajamarca-trujillo.jpg" />}
          >
            <Meta
              title="Cañon del Colca - Arequipa"
              description="Descripción tercer highlight"
            />
          </Card>
        </div>
      </section>
    </div>
  );
}
