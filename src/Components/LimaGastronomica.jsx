import React from "react";

export default function LimaGastronomica() {
  return (
    <div className="limaGastronomica">
      <p className="limaGastronomica-title">Lima Moderna y gastronómica</p>
      <ul
        style={{
          listStyle: "circle",
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <li>
          <strong>Parque del Amor</strong>, lugar tradicional en Miraflores, muy
          seguro y recomendado para una caminata por la tarde. El diseño del
          parque está inspirado en el parque Güell de Barcelona y está ubicado
          en lo alto del acantilado con una hermosa vista del Océano Pacífico.
        </li>
        <li>
          <strong>Olivar de San Isidro.</strong>Extenso parque lleno de olivos
          coloniales, con senderos para observar aves, rodeado por casas de
          inicio de siglo XX, de estilo tudor.
        </li>
        <li>
          <strong>Barranco</strong>, el barrio bohemio de Lima, está lleno de
          coloridos murales, galerías de arte, tiendas de artesanía, helado
          artesanal, cafés, restaurantes y bares antiguos. Para su visita
          recomendamos ir al Museo del artista Jade Rivera y la Casa Taller del
          artista Víctor Delfín.
        </li>
        <li>
          <strong>Mercado de Surquillo</strong>, este tradicional lugar es
          perfecto para conocer la variedad de los famosos productos peruanos,
          frutas, tubérculos andinos, quinoa, ajíes, la pesca del día, entre
          otros.
        </li>
        <li>
          <strong>Muelle de Chorrillos.</strong>Muy concurrido por los limeños
          que llegan en busca de pescado fresco para el Ceviche. Por las tardes
          se disfruta de calma y tranquilidad, con la vista de los botes en la
          orilla del mar y los pescadores arreglando sus redes.
        </li>
        <li>
          <strong>Refugio de Vida Silvestre Pantanos de Villa</strong>.
          Reconocida como sitio Ramsar por su importancia como parte del
          corredor usado por las aves migratorias. Protege gran variedad de aves
          residentes y migratorias.
        </li>
        <li>
          <strong>Callao Monumental y La Punta.</strong>Callao es el principal
          puerto del país y preserva un Centro Histórico con interesante
          arquitectura, galerías de arte, murales y restaurantes. La Punta se
          ubica a sólo 05 minutos de la parte monumental de Callao, y es un
          balneario con construcciones de inicios de siglo XX, una bonita plaza
          y un malecón donde se pueden observar miles de aves entre los meses de
          enero a marzo.
        </li>
      </ul>
    </div>
  );
}
