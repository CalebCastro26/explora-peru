import { Carousel } from "antd";
import "./PorquePeru.css";

export default function PorquePeru() {
  const contentStyle = {
    color: "#fff",
    height: 350,
    textAlign: "center",
    lineHeight: 20,
    background: "#364d79",
    width: 350,
  };
  return (
    <div className="porqueperu">
      <div className="porqueperu-img-header">
        <img src="/destinos/trek-cajamarca-trujillo.jpg" alt="" />
        <img src="/destinos/trek-cajamarca-trujillo.jpg" alt="" />
        <img src="/destinos/trek-cajamarca-trujillo.jpg" alt="" />
      </div>
      <h1>¿Por qué Perú?</h1>
      <p>
        El Perú tiene una geografía única que lo hace un lugar atractivo y
        perfecto para viajar. Su ubicación es privilegiada, con una geografía
        marcada por la presencia de la Cordillera de los Andes que origina gran
        diversidad de climas, flora y fauna. El Perú tiene 84 de las 117 zonas
        de vida en el mundo.
      </p>
      <p>Perú cuenta con tres regiones naturales:</p>
      <div className="porqueperu-regiones">
        <ul className="porqueperu-regiones-ul">
          <li>
            La costa, es una franja desértica que cobra vida en los valles
            formados por los ríos en las alturas de la cordillera de los Andes.
          </li>
          <li>
            La sierra, con impresionantes montañas que alcanzan 6,768 m.s.n.m. y
            el altiplano que rodea al Lago Titicaca.
          </li>
          <li>
            La selva representa más del 60% del territorio nacional, siendo el
            Amazonas el principal de los ríos.
          </li>
        </ul>
      </div>
      <p>
        El mar peruano es uno de los más ricos del mundo, debido al encuentro de
        las corrientes del Niño y de Humboldt que originan uno de los
        ecosistemas más diversos en el planeta, con 1,800 especies de peces.
      </p>
      <p>
        Tenemos más de 3000 variedades de papa, más de 350 variedades de ajíes y
        más de 50 variedades de maíz; toda esta riqueza ha permitido desarrollar
        una de las mejores gastronomías del mundo. Lima, capital gastronómica,
        alberga tres de los mejores restaurantes a nível mundial: Central, Maido
        y Mayta.
      </p>
      <p>
        Perú es un país pluricultural y megadiverso; con comunidades andinas y
        amazónicas donde se mantienen vivas 48 lenguas originarias. Caral es
        considerada la primera civilización del continente americano y Cusco fue
        capital del imperio Inca. Perú cuenta con 13 lugares reconocidos como
        Patrimonio Mundial por la UNESCO.
      </p>
      <div className="porque-trecelugares">
        <ul>
          <li>Santuario Histórico de Machupicchu</li>
          <li>Ciudad del Cusco</li>
          <li>Parque Nacional Huascarán</li>
          <li>Zona Arqueológica Chan Chan</li>
          <li>Complejo Arqueológico de Chavín</li>
          <li>Parque Nacional Río Abiseo</li>
          <li>Parque Nacional del Manu</li>
          <li>Centro Histórico de Lima</li>
          <li>Líneas de Nasca y Palpa</li>
          <li>Centro histórico de Arequipa</li>
          <li>Ciudad Sagrada de Caral</li>
          <li>El Qhapaq Ñan</li>
          <li>Observatorio solar de Chankillo</li>
        </ul>
        <Carousel autoplay className="porqueperu-carousel">
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
