export const destinosList = [
  {
    id: 1,
    name: "Cusco",
    descripcion:
      "Cusco,es un extenso territorio que combina Andes y Amazonía. El Valle Sagrado y Machu Picchu se encuentran dentro de la región Cusco, lo que convierte a la ciudad de Cusco en el punto de partida para conocer la magia de los andes y el Imperio Inca.",
    destinos: [
      {
        id: 0,
        nombre: "Cusco & Valle Sagrado",
        items: [
          {
            key: 1,
            label: "Información General",
            children: (
              <div style={{ padding: 15 }}>
                <p className="infoTitle" style={{ fontWeight: "Bold" }}>
                  Cómo llegar a Cusco:
                </p>

                <p>
                  Si viaja desde Lima se recomienda tomar un vuelo, de 01 hora
                  15 minutos. También se puede llegar en bus tras un recorrido
                  de 24 horas. <br />
                  Desde Puno recomendamos viajar por carretera, y realizar
                  paradas en los atractivos que la ruta ofrece. La ruta en tren
                  es una experiencia única; con servicio a bordo de primer
                  nivel. <br />
                  Desde Arequipa puede llegar por carretera o en avión, de
                  acuerdo a su disponibilidad de tiempo. <br />
                  Desde Puerto Maldonado debe tomar un vuelo.
                </p>
                <br />
                <p className="infoTitle" style={{ fontWeight: "Bold" }}>
                  Cuándo viajar a Cusco:
                </p>

                <p>
                  Se recomienda viajar entre los meses de abril y noviembre, que
                  corresponden a la estación seca en los Andes.
                  <br />
                  La temporada de lluvias podría alterar su programación de
                  vuelos internos e itinerarios durante los meses de diciembre a
                  marzo.
                </p>
                <br />
                <p className="infoTitle" style={{ fontWeight: "Bold" }}>
                  Gastronomía:
                </p>

                <ul>
                  <li>- Cuy Chactado</li>
                  <li>- Filete de Alpaca</li>
                  <li>- Ceviche de trucha</li>
                </ul>
              </div>
            ),
          },
          {
            key: 2,
            label: "Atractivos Cusco",
            children: (
              <div style={{ padding: 15, marginLeft: 50 }}>
                <ul
                  style={{
                    listStyle: "circle",
                    width: 450,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <li>
                    Templo del Sol, la Catedral, la Piedra de los 12 ángulos,
                    Barrio de artesanos de San Blas y el mercado de San Pedro.
                  </li>
                  <li>
                    4 sitios arqueológicos cercanos: Sacsayhuaman, Puka Pukara,
                    Kenko y Tambomachay
                  </li>
                  <li>
                    Ruta del Barroco Andino: Andahuaylillas, Tipón, Pikillacta y
                    Oropesa.
                  </li>
                  <li>Montaña de Siete Colores - Vinincunca</li>
                  <li>Laguna de Humantay</li>
                  <li>Camino Inca</li>
                  <li>Choquequirao</li>
                  <li>Salcantay</li>
                </ul>
              </div>
            ),
          },
          {
            key: 3,
            label: "Atractivos Valle Sagrado",
            children: (
              <div style={{ padding: 15, marginLeft: 50 }}>
                <ul
                  style={{
                    listStyle: "circle",
                    width: 450,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <li>
                    Sus tierras fértiles fueron muy apreciadas durante la época
                    Inca, por lo que eran consideradas sagradas. Partiendo desde
                    la ciudad de Cuzco, el valle sagrado se encuentra en la ruta
                    hacia el pueblo de Machu Picchu.
                  </li>
                  <li>
                    Awanacancha, visita que nos permite conocer los tipos de
                    camélidos sudamericanos y las técnicas ancestrales de los
                    textiles.
                  </li>
                  <li>
                    Sitio arqueológico de Pisac reconocida por su arquitectura
                    militar religiosa y el mercado artesanal.
                  </li>
                  <li>
                    Chincheros, pueblo que mantiene viva técnicas textiles
                    ancestrales, iglesia colonial, sitio arqueológico.
                    Recomendamos su mercado artesanal.
                  </li>
                  <li>
                    Sus tierras fértiles fueron muy apreciadas durante la época
                    Inca, por lo que eran consideradas sagradas. Partiendo desde
                    la ciudad de Cuzco, el valle sagrado se encuentra en la ruta
                    hacia el pueblo de Machu Picchu.
                  </li>
                  <li>
                    Maras & Moray, excursión de un solo día donde se conocerá el
                    ancestral proceso de extracción de la sal, y también la
                    impresionante andenería inca, utilizada como laboratorio de
                    cultivos.
                  </li>
                  <li>Ollantaytambo, sitio arqueológico y pueblo.</li>
                  <li>
                    Visita a comunidades locales y descubre sus costumbres y
                    labor agrícola.
                  </li>
                  <li>Caminata con llamas</li>
                </ul>
              </div>
            ),
          },
        ],
      },
      {
        id: 1,
        nombre: "Machu Picchu",
        items: [
          {
            key: 1,
            label: "Información General",
            children: (
              <div style={{ padding: 15 }}>
                <p className="infoTitle" style={{ fontWeight: "Bold" }}>
                  Información general:
                </p>

                <p>
                  Los trenes que parten desde Cuzco o Valle Sagrado llegan hasta
                  Aguas Calientes conocido también como Machu Picchu Pueblo.
                  Para una mejor experiencia recomendamos pernoctar una noche en
                  el pueblo.
                </p>
                <br />
                <p className="infoTitle" style={{ fontWeight: "Bold" }}>
                  Santuario Histórico de Machu Picchu:
                </p>
                <p>
                  Fue descubierto para el mundo por Hiram Bingham en 1911.
                  Ciudadela construida durante el gobierno del Inca Pachacutec.
                  Recomendamos visitar la Puerta del Sol, las montañas de Huayna
                  Picchu y Machu Picchu.
                </p>
              </div>
            ),
          },
          {
            key: 2,
            label: "Atractivos",
            children: (
              <div style={{ padding: 15, marginLeft: 50 }}>
                <ul
                  style={{
                    listStyle: "circle",
                    width: 450,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <li>Intiwatana</li>
                  <li>Huayna Picchu</li>
                </ul>
              </div>
            ),
          },
        ],
      },
    ],
    programa: [
      {
        id: 0,
        nombre: "Cusco - Valle Sagrado & Machu Picchu",
        link: "nosotros",
        descripcion: "Programa / Cusco",
      },
      {
        id: 1,
        nombre: "Cusco - Machu Picchu - Lago Titicaca",
        link: "nosotros",
        descripcion: "Programas / Cusco",
      },
      {
        id: 2,
        nombre: "Full Day Machu Picchu",
        link: "nosotros",
        descripcion: "Highlights / Machu Picchu",
      },
      {
        id: 3,
        nombre: "Camino Inca",
        link: "nosotros",
        descripcion: "Highlights/ Camino Inca",
      },
    ],
    tips: [
      "Viajar durante los meses de abril a noviembre.",
      "Es importante hidratarse.",
      "Empacar protector de labios, protector solar, sombrero y repelente.",
      "Machu Picchu tiene un clima variado; lleve un impermeable.",
    ],
  },
  {
    id: 2,
    name: "Puno",
    descripcion:
      "Puno, considerada la “Ciudad Folklórica del Perú”, su ubicación estratégica al lado del Lago Titicaca, es un eje entre Arequipa, Cusco y Bolivia, lo que hace un corredor económico y turístico importante, sin olvidar el hermoso paisaje del altiplano.",
    destinos: [
      {
        id: 0,
        nombre: "Lago TitiCaca",
        items: [
          {
            key: 1,
            label: "Información General",
            children: (
              <div style={{ padding: 15 }}>
                <p className="infoTitle" style={{ fontWeight: "Bold" }}>
                  Cómo llegar:
                </p>
                <p>
                  Si viaja desde Lima se recomienda tomar un vuelo directo que
                  dura 1 hora 30 aproximadamente. También se puede llegar en bus
                  tras un recorrido de 24 horas. <br />
                  Desde Arequipa recomendamos viajar por carretera, y realizar
                  paradas en los atractivos de la ruta, como la reserva Salinas
                  y Aguada Blanca, creada para la protección de vicuñas; la
                  Laguna de Lagunillas y Juliaca que es el punto comercial de la
                  región. <br />
                  Desde Cusco se puede llegar por carretera para admirar el
                  paisaje andino y altiplánico. Otra opción es la ruta en tren
                  que toma aproximadamente 10 horas de recorrido.
                </p>
                <br />
                <p className="infoTitle" style={{ fontWeight: "Bold" }}>
                  Cuándo viajar:
                </p>

                <p>
                  Se recomienda viajar entre los meses de abril y noviembre, que
                  corresponden a la estación seca en el altiplano.
                  <br />
                  La temporada de lluvias podría alterar su programación de
                  vuelos internos e itinerarios durante los meses de diciembre a
                  marzo.
                </p>
                <br />
                <p className="infoTitle" style={{ fontWeight: "Bold" }}>
                  Gastronomía:
                </p>

                <ul>
                  <li>- Chupe de Quinua</li>
                  <li>- Chicharrón de Alpaca</li>
                  <li>- Cancacho Puneño</li>
                  <li>- Sopa chairo</li>
                  <li>- Trucha frita</li>
                </ul>
              </div>
            ),
          },
          {
            key: 2,
            label: "Atractivos de Puno",
            children: (
              <div style={{ padding: 15, marginLeft: 50 }}>
                <ul
                  style={{
                    listStyle: "circle",
                    width: 450,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <li>
                    <strong>Plaza de Armas</strong>, rodeada por las principales
                    instituciones del Estado como la Municipalidad Provincial de
                    Puno y el Poder Judicial.
                  </li>
                  <li>
                    <strong>Catedral de Puno</strong>, con rango de basílica
                    menor, construida en el siglo XVIII.
                  </li>
                  <li>
                    <strong>En el Parque Pino</strong>, destacan el monumento a
                    Manuel Pino, héroe de la guerra con Chile y la Iglesia Pino
                    que guarda la imagen de la Virgen de la Candelaria, patrona
                    de la ciudad.
                  </li>
                  <li>
                    <strong>Cerrito de Huajsapata</strong>, tiene un monumento a
                    Manco Cápac, y una vista panorámica del Lago Titicaca y la
                    ciudad lacustre.
                  </li>
                </ul>
              </div>
            ),
          },
          {
            key: 3,
            label: "Atractivos Lago TitiCaca",
            children: (
              <div style={{ padding: 15, marginLeft: 50 }}>
                <p>
                  Para disfrutar la maravilla del Lago Titicaca lo ideal es
                  pernoctar en las islas para compartir la vida cotidiana con
                  sus habitantes.
                  <br />
                  Las comunidades quechuas y aymaras mantienen sus costumbres
                  ancestrales con una filosofía de vida de solidaridad y
                  reciprocidad.
                </p>
                <br />
                <ul
                  style={{
                    listStyle: "circle",
                    width: 450,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <li>
                    <strong>Islas Flotantes de Los Uros</strong>, se encuentra
                    en la Reserva Nacional del Lago Titicaca, a 6 km del Puerto
                    Lacustre de Puno. Son islas construidas a base de totora
                    donde residen las familias aymaras.
                  </li>
                  <li>
                    <strong>La Isla Taquile</strong>, ubicada a 35 km de la
                    ciudad de Puno, está dividida en 6 suyos o regiones;
                    conocida por sus tejidos realizados por los hombres con una
                    iconografía original y única.
                  </li>
                  <li>
                    <strong>Isla Amantani</strong>, ubicada a 38 km del Puerto
                    Lacustre de Puno, se encuentra cerca a la Isla Taquile.
                  </li>
                  <li>
                    <strong>Isla Suasi</strong>, es una isla privada donde
                    también se puede pernoctar.
                  </li>
                </ul>
              </div>
            ),
          },
          {
            key: 4,
            label: "Atractivos Alrededor",
            children: (
              <div style={{ padding: 15, marginLeft: 50 }}>
                <p style={{ fontWeight: "bold", fontSize: 15 }}>Ruta Aymara</p>
                <br />
                <ul
                  style={{
                    listStyle: "circle",
                    width: 450,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <li>
                    <strong>Chucuito</strong>, ubicado a 18 km de la ciudad de
                    Puno, se le conoce como La Ciudad de las Cajas Reales. Su
                    principal atractivo es el Centro Arqueológico Inca Uyo donde
                    se realizaban rituales a la fertilidad y se pueden encontrar
                    falos de piedra de diversos tamaños.
                  </li>
                  <li>
                    <strong>Acora</strong>, ubicada a 33 km de Puno, destaca el
                    Templo de San Pedro, de estilo mudéjar.
                  </li>
                  <li>
                    <strong>Llave</strong>, se encuentra a 56 km de la ciudad de
                    Puno, es comercial y tiene templos coloniales como San
                    Miguel y Santa Bárbara.
                  </li>
                  <li>
                    <strong>Juli</strong>, conocida como la pequeña "Roma de
                    América", ubicada a 80 km de la ciudad de Puno. En el
                    trayecto Ilave - Juli se observan formaciones geológicas y
                    el Templo del Sol .
                  </li>
                  <li>
                    <strong>Pomata</strong>, llamada el "Balcón Filosófico del
                    Altiplano" ubicada a 105 km de la ciudad de Puno, entre sus
                    sus atractivos destacan la Iglesia de Santiago Apóstol y sus
                    catacumbas, donde se encuentran enterrados Obispos y
                    Arzobispos del altiplano.
                  </li>
                  <li>
                    <strong>Zepita</strong>, ubicada a 140 km de la ciudad de
                    Puno, alberga el Templo barroco de San Pedro de Zepita,
                    edificado por la orden dominica.
                  </li>
                  <li>
                    <strong>Tanka Tanka</strong>, ubicado a 30 km del distrito
                    de Desaguadero, presenta viviendas, torres funerarias y
                    fortificaciones.
                  </li>
                  <li>
                    <strong>Yunguyo y Desaguadero</strong>, se sitúan en la
                    frontera con Bolivia y están ubicados respectivamente a 128
                    y 147 km de Puno. A 15 km de Yunguyo se encuentra la ciudad
                    Copacabana donde se puede visitar el Santuario de la Virgen
                    de Copacabana. <br />
                    Es una ruta llena de atractivos camino a Bolivia.
                  </li>
                </ul>
                <br />
                <p style={{ fontWeight: "bold", fontSize: 15 }}>Ruta Quechua</p>
                <br />
                <ul
                  style={{
                    listStyle: "circle",
                    width: 450,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <li>
                    <strong>Complejo Arqueológico de Sillustani</strong>,
                    ubicado a 33 km de la ciudad de Puno, famoso por las torres
                    funerarias conocidas como Chullpas, de época preinca e inca.
                    También sobresale la hermosa Laguna de Umayo.
                  </li>
                  <li>
                    <strong>Juliaca</strong>, ubicada a 44 km de la ciudad de
                    Puno, es una ciudad comercial donde se encuentra el
                    aeropuerto Manco Capac. <br />
                    Ofrece ejemplos de arquitectura religiosa colonial barroca
                    como la Iglesia de Santa Catalina, Iglesia de la Merced y el
                    Convento de los Padres Franciscanos.
                  </li>
                  <li>
                    <strong>Pucará</strong>, ubicado a 114 km de la ciudad de
                    Puno, donde se encuentran edificaciones de la cultura
                    Keluyo, famoso por su alfarería, donde se distingue "Torito
                    de Pucará". <br />
                    Sugerimos este recorrido para ir a Cuzco por vía trerrestre.
                  </li>
                </ul>
              </div>
            ),
          },
        ],
      },
    ],
    programa: [
      {
        id: 0,
        nombre: "Cusco - Machu Picchu - Lago Titicaca",
        link: "nosotros",
        descripcion: "Programas / Puno",
      },
      {
        id: 1,
        nombre: "Full Day Lago Titicaca",
        link: "nosotros",
        descripcion: "Highlights Taquile/Uros",
      },
    ],
    tips: [
      "Recomendamos viajar durante los meses de abril a noviembre.",
      "Es recomendable la alimentación ligera durante el viaje, porque la digestión en la altura es más lenta.",
      "Es importante mantenerse hidratado durante toda su estadía en el altiplano.",
      "Beber infusiones de hoja de coca es bueno para el mal de altura; aunque de noche podría provocar insomnio. La hoja de coca está contraindicada en personas que sufren presión alta. También se recomienda tomar infusión de muña que es buena para la digestión.",
      "Puno, se encuentra en el altiplano sobre los 3,800 m.s.n.m. No olvide empacar protector de labios, protector solar y sombrero. Durante el día está soleado y con rayos UV; al atardecer la temperatura desciende. Sugerimos llevar ropa para días cálidos y tener también un impermeable y ropa de abrigo.",
    ],
  },
  {
    id: 3,
    name: "Arequipa",
    descripcion:
      "La ciudad de Arequipa, bien llamada “Ciudad Blanca” por sus construcciones en sillar, que es una piedra de origen volcánico. El centro histórico es considerado Patrimonio Mundial por la UNESCO. Arequipa se encuentra rodeada de 3 volcanes: Misti, Chachani y Pichu Pichu.",
    destinos: [
      {
        id: 0,
        nombre: "Cañon del Colca",
        items: [
          {
            key: 1,
            label: "Información General",
            children: (
              <div style={{ padding: 15 }}>
                <p className="infoTitle" style={{ fontWeight: "Bold" }}>
                  Cómo llegar:
                </p>
                <p>
                  Si viaja desde Lima se recomienda tomar un vuelo directo que
                  dura 1 hora 15 minutos. El recorrido en bus toma 17 horas.{" "}
                  <br />
                  Desde Cusco el trayecto en bus demora alrededor de 1 horas,
                  por lo que se recomienda viajar en avión. <br />
                  Desde Puno se puede llegar por carretera en aproximadamente 6
                  horas.
                </p>
                <br />
                <p className="infoTitle" style={{ fontWeight: "Bold" }}>
                  Cuándo viajar:
                </p>

                <p>
                  Se recomienda viajar entre los meses de abril y noviembre, por
                  ser el periodo de ausencia de lluvias.
                  <br />
                  La temporada de lluvias podría alterar su programación de
                  vuelos internos e itinerarios durante los meses de diciembre a
                  marzo.
                </p>
                <br />
                <p className="infoTitle" style={{ fontWeight: "Bold" }}>
                  Gastronomía:
                </p>

                <ul>
                  <li>- </li>
                  <li>- </li>
                  <li>- </li>
                </ul>
              </div>
            ),
          },
          {
            key: 2,
            label: "Atractivos de la Ciudad",
            children: (
              <div style={{ padding: 15, marginLeft: 50 }}>
                <ul
                  style={{
                    listStyle: "circle",
                    width: 450,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <li>
                    <strong>La Plaza de Armas</strong>, es una de las más
                    bonitas en Perú. Está rodeada por la Catedral y la Iglesia
                    de La Compañía. Resaltan los arcos en torno a toda la plaza.
                  </li>
                  <li>
                    <strong>La Catedral</strong>, es una imponente construcción
                    de sillar, con obras de arte colonial. Tiene un museo y se
                    puede acceder hasta el campanario, desde donde se tiene una
                    hermosa vista.
                  </li>
                  <li>
                    <strong>Monasterio de Santa Catalina</strong>, edificado a
                    fines del siglo XVI. Recorrerla es como visitar una pequeña
                    ciudad, con espacios privados para las religiosas, calles y
                    plazas, mobiliario y arte colonial.
                  </li>
                  <li>
                    <strong>Iglesia y Claustros de la Compañía</strong>,
                    considerada el mejor ejemplo de la Escuela Arequipeña, en su
                    interior sobresale la preciosa cúpula de la Capilla de San
                    Ignacio. Los claustros poseen decoraciones talladas en
                    relieve sobre sus muros y arcos; en la actualidad son
                    ocupados por tiendas y restaurantes.
                  </li>
                  <li>
                    <strong>Museo Santuarios Andinos</strong>, este espacio
                    guarda los cuerpos encontrados en lo alto de los volcanes y
                    nevados de Arequipa, mostrando las ofrendas, ornamentos,
                    textiles y ajuares funerarios que los acompañaban. La
                    práctica del sacrificio en los Apus o montañas tutelares era
                    parte del ritual conocido como Capa Cocha, practicado en la
                    época Inca. La más famosa es Juanita, llamada la Niña de
                    Ampato.
                  </li>
                  <li>
                    <strong>Mercado de San Camilo</strong>, visitar este lugar
                    es la mejor forma de conocer lo diverso que es Perú. Con
                    espacios para frutas, cacao, quesos e incluso los
                    tradicionales sombreros arequipeños tejidos en paja.
                  </li>
                  <li>
                    <strong>Mirador de Yanahuara</strong>, ubicado muy cerca al
                    Centro Histórico. Conocido por sus arcos de sillar, desde
                    donde se admira el Misti, el volcán emblemático de Arequipa.
                    5,820 m.s.n.m. Al lado del mirador se encuentra la iglesia
                    colonial de San Juan Bautista y varias heladerías para
                    degustar el emblemático Queso Helado arequipeño.
                  </li>
                  <li>
                    <strong>Mundo Alpaca</strong>, es el lugar perfecto para
                    aprender sobre las fibras de los camélidos andinos, y poder
                    diferenciar a estos extraordinarios animales que tanto han
                    aportado a las culturas peruanas desde su domesticación
                    6,000 a.c. Posee también una tienda.
                  </li>
                </ul>
              </div>
            ),
          },
          {
            key: 3,
            label: "Atractivos en los alrededores",
            children: (
              <div style={{ padding: 15, marginLeft: 50 }}>
                <ul
                  style={{
                    listStyle: "circle",
                    width: 450,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <li>
                    <strong>Campiña arequipeña</strong>, durante un recorrido de
                    mediodía se pueden ver andenes prehispánicos utilizados por
                    los agricultores hasta nuestros días; también el Molino de
                    Sabandía,que es una construcción en sillar que data del
                    siglo XVIII y aún se mantiene funcionando. La Mansión del
                    Fundador fue la casa de Marcí Manuel de Carbajal, fundador
                    de Arequipa, edificada en el siglo XVI, en la propiedad
                    destacan la capilla colonial, salones, patios y jardines.
                  </li>
                  <li>
                    <strong>Ruta del Sillar</strong>, interesante visita a las
                    canteras de Añashuayco y Culebrillas, que muestra el
                    tradicional proceso de extracción de sillar, la piedra
                    blanca de origen volcánico utilizada para la construcción en
                    toda la región de Arequipa.
                  </li>
                  <li>
                    <strong>El Cañón del Colca</strong>, alcanza 4,160 m.s.n.m.
                    y es uno de los más profundos del mundo. Colca es un destino
                    famoso por la Cruz del Cóndor, el mirador desde donde cada
                    mañana se observa el majestuoso vuelo del cóndor, ave que
                    fue considerada una divinidad en épocas prehispánicas. A lo
                    largo del cañón se encuentran pueblos ancestrales que
                    mantienen vivas sus tradiciones, el arte textil y el baile
                    de cortejo conocido como Wititi, declarado Patrimonio
                    Intangible de Perú. Entre los poblados resaltan están
                    Chivay, Yanque, Maca y Coporaque. También se recomienda
                    visitar los baños termales, que se encuentran en los pueblos
                    a lo largo del Cañón; los más visitados son La Calera,
                    Refugio y Chacapi.
                  </li>
                  <li>
                    <strong>La Reserva Nacional Salinas y Aguada Blanca</strong>
                    , con 366,936 hectáreas es un área con volcanes, lagunas,
                    vicuñas y diversas comunidades que se dedican a la crianza
                    de alpacas. Es un destino para la observación de aves y
                    vicuñas, realizar caminatas y compartir tradiciones locales.
                  </li>
                </ul>
              </div>
            ),
          },
        ],
      },
    ],
    programa: [
      {
        id: 0,
        nombre: "Programa de Arequipa",
        link: "nosotros",
        descripcion: "Este es el programa de Arequipa",
      },
      {
        id: 1,
        nombre: "Programa de Arequipa",
        link: "nosotros",
        descripcion: "Este es el programa de Arequipa",
      },
    ],
    tips: [
      "Viajar durante los meses de abril a noviembre.",
      "Es importante hidratarse.",
      "Empacar protector de labios, protector solar, sombrero y repelente.",
      "Machu Picchu tiene un clima variado; lleve un impermeable.",
    ],
  },
  {
    id: 4,
    name: "Ica",
    descripcion:
      "La región Ica está a 3 horas de Lima, ubicada en el desierto, es conocida como “La ciudad del eterno sol”. Es famosa por sus dunas y viñedos; donde nació el reconocido aguardiente peruano: el Pisco.\n Es un destino conocido para la práctica de sandboarding y excursiones en buggies; mientras sus atractivos arqueológicos conservan el legado cultural de importantes sociedades prehispánicas como la Paracas y Nazca ",
    destinos: [
      {
        id: 0,
        nombre: "Paracas",
        items: [
          {
            key: 1,
            label: "Información General",
            children: (
              <div style={{ padding: 15 }}>
                <p className="infoTitle" style={{ fontWeight: "Bold" }}>
                  Cómo llegar:
                </p>
                <p>
                  Desde Lima, se puede llegar en bus en un viaje de 4 horas
                  aproximadamente.
                </p>
                <br />
                <p className="infoTitle" style={{ fontWeight: "Bold" }}>
                  Cuándo viajar:
                </p>
                <p>
                  Todo el año. Ica cuenta con un clima seco sin lluvias.
                  Recomendamos viajar durante los meses de Abril a Noviembre
                  cuando la afluencia de turistas es menor.
                </p>
                <br />
                <p className="infoTitle" style={{ fontWeight: "Bold" }}>
                  Gastronomía:
                </p>
                <ul>
                  <li>- Tejas</li>
                  <li>- Carapulcra con Sopa Seca</li>
                </ul>
              </div>
            ),
          },
          {
            key: 2,
            label: "Atractivos de Ica",
            children: (
              <div style={{ padding: 15, marginLeft: 50 }}>
                <ul
                  style={{
                    listStyle: "circle",
                    width: 450,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <li>
                    <strong>Laguna de Huacachina</strong>, imponente oasis
                    rodeado de dunas ubicado a unos minutos de la ciudad,
                    conocido por la práctica de deportes de aventura y al mismo
                    tiempo lugar apacible de descanso y relajación.
                  </li>
                  <li>
                    <strong>Tambo Colorado</strong>,es un asentamiento Inca
                    utilizado para albergar a soldados y autoridades. Fue
                    construido durante el periodo del Inca Pachacutec.
                  </li>
                  <li>
                    <strong>Cañón de los perdidos</strong>, en medio del
                    desierto de Ocucaje, a solo 69 km al sur de Ica, se
                    encuentra esta impresionante formación geológica conocida
                    por el hallazgo de fósiles marinos.
                  </li>
                  <li>
                    <strong>Viñedos</strong>, el valle de Ica ofrece una amplia
                    variedad de bodegas vitivinícolas y destilerías, que forman
                    parte de la ruta del Pisco y Vino.
                  </li>
                </ul>
              </div>
            ),
          },
          {
            key: 3,
            label: "Atractivos de Paracas",
            children: (
              <div style={{ padding: 15, marginLeft: 50 }}>
                <p>
                  Es un balneario y puerto pesquero. Está localizado a 260 km al
                  sur de Lima. Es un lugar apacible ideal para el descanso y
                  relajación, que cuenta con infraestructura turística de alto
                  nível.
                </p>
                <br />
                <ul
                  style={{
                    listStyle: "circle",
                    width: 450,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <li>
                    <strong>La Reserva Nacional de Paracas</strong>,es una de
                    las Zonas naturales más importantes de la costa peruana.
                    Refugio de vida salvaje donde habitan diversas especies de
                    fauna y flora marina.
                  </li>
                  <li>
                    <strong>Islas Ballestas</strong>,conjunto de islas guaneras
                    que forman parte del área protegida, es perfecto para
                    quienes gustan del avistamiento de aves.
                  </li>
                  <li>
                    <strong>Chincha</strong>, localizada a 200 km al sur de
                    Lima, considerada cuna de la cultura afroperuana, famosa por
                    su gastronomía y por celebrar la Fiesta de la Vendimia en el
                    mes de marzo. Reconocida por sus bodegas vitivinícolas y su
                    Hacienda colonial de San José.
                  </li>
                </ul>
              </div>
            ),
          },
        ],
      },
      {
        id: 1,
        nombre: "Lineas de Nazca",
        items: [
          {
            key: 1,
            label: "Información General",
            children: (
              <div style={{ padding: 15 }}>
                <p className="infoTitle" style={{ fontWeight: "Bold" }}>
                  Cómo llegar:
                </p>
                <p>
                  Desde Lima, se puede llegar en bus en un viaje de 4 horas
                  aproximadamente.
                </p>
                <br />
                <p className="infoTitle" style={{ fontWeight: "Bold" }}>
                  Cuándo viajar:
                </p>
                <p>
                  Todo el año. Ica cuenta con un clima seco sin lluvias.
                  Recomendamos viajar durante los meses de Abril a Noviembre
                  cuando la afluencia de turistas es menor.
                </p>
                <br />
                <p className="infoTitle" style={{ fontWeight: "Bold" }}>
                  Gastronomía:
                </p>
                <ul>
                  <li>- Tejas</li>
                  <li>- Carapulcra con Sopa Seca</li>
                </ul>
              </div>
            ),
          },
          {
            key: 2,
            label: "Atractivos de Ica",
            children: (
              <div style={{ padding: 15, marginLeft: 50 }}>
                <ul
                  style={{
                    listStyle: "circle",
                    width: 450,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <li>
                    <strong>Laguna de Huacachina</strong>, imponente oasis
                    rodeado de dunas ubicado a unos minutos de la ciudad,
                    conocido por la práctica de deportes de aventura y al mismo
                    tiempo lugar apacible de descanso y relajación.
                  </li>
                  <li>
                    <strong>Tambo Colorado</strong>,es un asentamiento Inca
                    utilizado para albergar a soldados y autoridades. Fue
                    construido durante el periodo del Inca Pachacutec.
                  </li>
                  <li>
                    <strong>Cañón de los perdidos</strong>, en medio del
                    desierto de Ocucaje, a solo 69 km al sur de Ica, se
                    encuentra esta impresionante formación geológica conocida
                    por el hallazgo de fósiles marinos.
                  </li>
                  <li>
                    <strong>Viñedos</strong>, el valle de Ica ofrece una amplia
                    variedad de bodegas vitivinícolas y destilerías, que forman
                    parte de la ruta del Pisco y Vino.
                  </li>
                </ul>
              </div>
            ),
          },
          {
            key: 3,
            label: "Atractivos de Nazca",
            children: (
              <div style={{ padding: 15, marginLeft: 50 }}>
                <ul
                  style={{
                    listStyle: "circle",
                    width: 450,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <li>
                    <strong>Las Líneas de Nazca</strong>, en el desierto costero
                    a 120 km al sur de Ica, se encuentran estos misteriosos
                    geoglifos construidos por la cultura Nazca, estas figuras
                    formaron parte de un culto religioso dedicado a sus dioses.
                  </li>
                  <li>
                    <strong>Cahuachi</strong>,conocida como la capital de la
                    sociedad Nazca, fue un centro ceremonial de carácter
                    político-administrativo, que permitió la expansión militar,
                    anexando valles a su territorio.
                  </li>
                  <li>
                    <strong>Acueductos de Cantalloc</strong>, a 4 km al norte de
                    la ciudad de Nazca, se encuentra una de las obras de
                    ingeniería hidráulica más importantes del mundo, construida
                    durante su apogeo.
                  </li>
                  <li>
                    <strong>Líneas de Palpa</strong>, a 50 km de Nazca, a lo
                    largo de la carretera panamericana sur se encuentran estos
                    enigmáticos geoglifos trazados siglos antes por la cultura
                    Paracas.
                  </li>
                </ul>
              </div>
            ),
          },
        ],
      },
    ],
    programa: [
      {
        id: 0,
        nombre: "Programa de Ica",
        link: "nosotros",
        descripcion: "Este es el programa de Ica",
      },
      {
        id: 1,
        nombre: "Programa de Ica",
        link: "nosotros",
        descripcion: "Este es el programa de Ica",
      },
    ],
    tips: [
      "Se puede viajar durante todo el año, es un clima soleado y seco.",
      "Es importante mantenerse hidratado.",
      "Llevar lentes de sol, sombrero y bloqueador.",
      "Ropa cómoda de verano.",
    ],
  },
  {
    id: 5,
    name: "Amazonia",
    descripcion:
      "Perú es principalmente un país amazónico, siendo la selva más del 60% del territorio. El río Amazonas se origina en los andes peruanos, en Arequipa. La Amazonía es famosa por la calidez de su gente y su gran biodiversidad. La actividad turística responsable es importante para la preservación de sus bosques con gran riqueza de flora y fauna.",
    descripcion2:
      "Son 2 los destinos principales en la Amazonía peruana: Iquitos y Puerto Maldonado.",
    destinos: [
      {
        id: 0,
        nombre: "Iquitos",
        items: [
          {
            key: 1,
            label: "Información General",
            children: (
              <div style={{ padding: 15 }}>
                <p style={{ fontWeight: "bold", fontSize: 15 }}>Iquitos</p>
                <p>
                  Iquitos es la ciudad desde donde parten los cruceros que
                  navegan por el río Amazonas, llegando hasta La Reserva
                  Nacional Pacaya Samiria. También existen muchos Lodges a los
                  que se accede navegando. Cruceros y Lodges ofrecen diversas
                  excursiones para visitar comunidades, pescar, observar flora y
                  fauna.
                </p>
                <p className="infoTitle" style={{ fontWeight: "Bold" }}>
                  Cómo llegar:
                </p>
                <p>
                  Se accede con un vuelo desde Lima. El trayecto dura 1 hora 30
                  minutos.
                </p>
                <br />
                <p className="infoTitle" style={{ fontWeight: "Bold" }}>
                  Cuándo viajar:
                </p>

                <p>
                  Se recomienda viajar entre los meses de mayo y octubre, que
                  corresponden a la estación seca en la Amazonía, pero con
                  suficiente caudal para navegar por los ríos. La temperatura
                  promedio en esta temporada es de 35 °C. En ocasiones, el
                  fenómeno anómalo conocido como Friaje, puede provocar que por
                  las noches descienda hasta 15°C.
                  <br />
                  Durante los meses de lluvia, de diciembre a abril, puede ser
                  difícil caminar durante las excursiones por el barro y el
                  incremento del nivel del agua en los ríos que inunda muchos de
                  los senderos. La temperatura en estos meses es de 30°C en
                  promedio.
                </p>
              </div>
            ),
          },
          {
            key: 2,
            label: "Atractivos Iquitos",
            children: (
              <div style={{ padding: 15, marginLeft: 50 }}>
                <ul
                  style={{
                    listStyle: "circle",
                    width: 450,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <li>
                    <strong>La Plaza Principal</strong>, está rodeada por la
                    Catedral y la Casa de Hierro.
                  </li>
                  <li>
                    <strong>La Casa de Hierro</strong>,ubicado frente al río
                    Itaya, es un excelente lugar para ver el atardecer, pasear
                    en bote, conocer el puerto y el Barrio de Belén.
                  </li>
                  <li>
                    <strong>Malecón Tarapacá</strong>, está rodeada por la
                    Catedral y la Casa de Hierro.
                  </li>
                  <li>
                    <strong>El Complejo Quistococha</strong>, es un lugar
                    perfecto para visitar antes de tomar un crucero por el
                    Amazonas. Cuenta con un bosque, una laguna donde se puede
                    pasear en canoa, una playa artificial y un zoológico.
                  </li>
                  <li>
                    <strong>Comunidades amazónicas</strong>, visitarlas es una
                    real experiencia de inmersión que permite conocer
                    costumbres, cosmovisión y forma de vida en armonía con la
                    naturaleza, siendo los verdaderos guardianes del bosque.
                    Entre las comunidades están los bora, huitoto, yagua y
                    kukama.
                  </li>
                  <li>
                    <strong>La Reserva Nacional Pacaya Samiria</strong>
                    <p>
                      Conocida como La Selva de los Espejos, tiene una extensión
                      de 2'080,000 hectáreas. Es un bosque que se inunda en la
                      temporada de lluvias, mientras que en la temporada seca
                      aparecen senderos para caminatas y lagunas. <br />
                      Entre las especies que protege esta reserva se encuentran:
                      el paiche que es el pez más grande de la amazonía llegando
                      a pesar más de 150 kilos; los amistosos delfines rosados;
                      el lobo de río, el oso perezoso y 449 especies de aves.{" "}
                      <br />
                      Entre las actividades que se pueden practicar resaltan la
                      pesca artesanal, visita a comunidades nativas, caminatas
                      por la selva y playas de arena, avistamiento de mamíferos,
                      reptiles y aves.
                    </p>
                  </li>
                  <li>
                    <strong>Crucero por el Amazonas</strong>,
                  </li>
                </ul>
              </div>
            ),
          },
        ],
      },
      {
        id: 1,
        nombre: "Puerto Maldonado",
        items: [
          {
            key: 1,
            label: "Información General",
            children: (
              <div style={{ padding: 15 }}>
                <p>
                  Puerto Maldonado se encuentra en la región de Madre de Dios,
                  es una ciudad que tiene una biodiversidad natural con una vida
                  urbana muy alegre con pubs y bares que hacen una estadía
                  simpática y alegre.
                </p>
              </div>
            ),
          },
          {
            key: 2,
            label: "Atractivos Puerto Maldonado",
            children: (
              <div style={{ padding: 15 }}>
                <p>
                  Destaca la Reserva Natural de Tambopata y Candamo, Colpa de
                  Guacamayos y Colorado, Santuario Nacional Puerto Heath, Parque
                  Nacional Bahuaja Sonene, Parque Nacional del Manú.
                </p>
              </div>
            ),
          },
        ],
      },
    ],
    programa: [
      {
        id: 0,
        nombre: "Programa de Amazonia",
        link: "nosotros",
        descripcion: "Este es el programa de Amazonia",
      },
      {
        id: 1,
        nombre: "Programa de Amazonia",
        link: "nosotros",
        descripcion: "Este es el programa de Amazonia",
      },
    ],
    tips: [
      "Recomendamos probar Juane, Paiche, Cecina con Tacacho",
      "Es importante hidratarse.",
      "Dinero en efectivo",
      "Repelente",
    ],
  },
  {
    id: 6,
    name: "Lima",
    descripcion:
      "Lima es una ciudad vibrante frente al mar, con excelentes restaurantes, sitios arqueológicos, edificios coloniales, interesantes museos y galerías de arte. La Capital Gastronómica de América Latina posee 03 de los mejores restaurantes del Mundo.",
    descripcion2:
      "Recomendamos pasar uno o dos días en la ciudad capital y disfrutar de experiencias culinarias , visitas culturales, tours en bicicleta, observación de aves y shows de caballos de paso.",
    destinos: [
      {
        id: 0,
        nombre: "Lima Ciudad de los Reyes",
        items: [
          {
            key: 1,
            label: "Información General",
            children: (
              <div style={{ padding: 15 }}>
                <p className="infoTitle" style={{ fontWeight: "Bold" }}>
                  Cómo llegar:
                </p>
                <p>
                  El aeropuerto internacional Jorge Chávez es el más importante
                  del país y conecta la capital con las principales ciudades de
                  Perú, América y Europa.
                </p>
                <br />
                <p className="infoTitle" style={{ fontWeight: "Bold" }}>
                  Cuándo viajar:
                </p>
                <p>
                  Todo el año. Lima tiene un clima húmedo, sin temperaturas
                  extremas.
                  <br />
                  Entre los meses de diciembre a abril los días son cálidos y la
                  temperatura promedio es de 22 °C . El resto del año la
                  temperatura promedio es de 18 °C.
                </p>
              </div>
            ),
          },
          {
            key: 2,
            label: "Atractivos Centro Histórico",
            children: (
              <div style={{ padding: 15, marginLeft: 50 }}>
                <p>Declarado Patrimonio de la Humanidad por la Unesco.</p>
                <br />
                <ul
                  style={{
                    listStyle: "circle",
                    width: 450,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <li>
                    <strong>Plaza Mayor</strong>, principal punto histórico de
                    la ciudad; rodeada por la Catedral, el Palacio Municipal,
                    Palacio de Gobierno y Palacio Arzobispal.
                  </li>
                  <li>
                    <strong>La Catedral de Lima</strong>,guarda los restos del
                    conquistador Francisco Pizarro y tesoros de arte virreinal.
                  </li>
                  <li>
                    <strong>El Palacio Arzobispal</strong>, presenta un museo de
                    arte colonial religioso y hermosos balcones de influencia
                    mudéjar.
                  </li>
                  <li>
                    <strong>El Monasterio de San Francisco</strong>, es famoso
                    por sus Catacumbas coloniales, claustro y su hermosa
                    biblioteca del siglo XVII.
                  </li>
                  <li>
                    <strong>El Convento de Santo Domingo</strong>, destaca por
                    su claustro decorado con azulejos sevillanos, guarda los
                    restos de 03 santos peruanos: Santa Rosa de Lima, San Martín
                    de Porres y San Juan Masías.
                  </li>
                  <li>
                    <strong>La Casa de Aliaga</strong>, preciosa casa colonial
                    habitada por 17 generaciones desde la fundación de la
                    ciudad, descendientes directos del conquistador Jerónimo de
                    Aliaga.
                  </li>
                  <li>
                    <strong>El Palacio de Torre Tagle</strong>, casona solariega
                    que conserva los mejores balcones coloniales en la ciudad,
                    hoy es sede del Ministerio de Relaciones Exteriores.
                  </li>
                  <li>
                    <strong>La Plaza San Martín</strong>, es una emblemática
                    plaza con un monumento ecuestre del General José de San
                    Martín, quien proclamó la independencia de Perú en 1821.
                  </li>
                  <li>
                    <strong>El Museo Central</strong>, El Muceo ocupa el
                    edificio que fue sede del Banco de Reserva del Perú.
                    Sobresale la colección de ornamentos y piezas rituales de
                    oro, plata y aleaciones de diversas culturas peruanas.
                  </li>
                  <li>
                    <strong>Museo de los Minerales</strong>, colección privada
                    que exhibe la diversidad y belleza de los minerales
                    peruanos. Además, cuenta con una colección de cerámica y
                    textiles prehispánicos.
                  </li>
                </ul>
              </div>
            ),
          },
          {
            key: 3,
            label: "Museos de Lima",
            children: (
              <div style={{ padding: 15, marginLeft: 50 }}>
                <ul
                  style={{
                    listStyle: "circle",
                    width: 450,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <li>
                    <strong>Museo de Arte de Lima</strong>, esta extensa
                    colección alberga piezas arqueológicas desde 1,000 A.C,
                    también obras coloniales, republicanas, modernas y
                    contemporáneas; permitiendo admirar el desarrollo del arte
                    en el Perú hasta nuestros días.
                  </li>
                  <li>
                    <strong>Museo Larco</strong>,colección privada con alrededor
                    de 45,000 piezas arqueológicas. Considerado el mejor museo
                    en el Perú. Resalta su colección de cerámica y orfebrería de
                    la costa norte y la Sala Erótica.
                  </li>
                  <li>
                    <strong>Museo Amano</strong>, colección privada
                    especializada en textiles prehispánicos. Cuenta con piezas
                    desde 1,000 A.C. La visita con apertura de gavetas es muy
                    recomendada.
                  </li>
                  <li>
                    <strong>Museo Pedro de Osma</strong>, ubicado en la antigua
                    casa de la familia De Osma, de inicios siglo XX, con
                    vitrales, bellos salones y jardines. Tiene una excelente
                    colección de pintura y platería colonial.
                  </li>
                  <li>
                    <strong>Museo de Oro del Perú y Armas del Mundo</strong>,
                    posee la exhibición más completa de piezas de oro y plata
                    del antiguo Perú y una impresionante colección de armas de
                    todo el mundo.
                  </li>
                </ul>
              </div>
            ),
          },
          {
            key: 4,
            label: "Huacas y Sitios Arqueologicos",
            children: (
              <div style={{ padding: 15, marginLeft: 50 }}>
                <p style={{ width: 400 }}>
                  Huaca es como localmente se conoce a los edificios piramidales
                  de adobe en toda la costa peruana construidos desde 3000 A.C.
                </p>
                <br />
                <ul
                  style={{
                    listStyle: "circle",
                    width: 450,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <li>
                    <strong>Huaca Pucllana</strong>, sitio arqueológico pre
                    Inca, construido 400 años D.C como centro ceremonial; cuenta
                    con un museo de sitio y está ubicado en el moderno y
                    turístico distrito de Miraflores.
                  </li>
                  <li>
                    <strong>Huaca Mateo Salado</strong>,colección privada con
                    alrededor de 45,000 piezas arqueológicas. Considerado el
                    mejor museo en el Perú. Resalta su colección de cerámica y
                    orfebrería de la costa norte y la Sala Erótica.
                  </li>
                  <li>
                    <strong>Museo Amano</strong>, sitio arqueológico del 1,300
                    DC, construido por la cultura Ichmay y ocupado luego por la
                    cultura Inca. Está ubicado muy cerca al Museo Larco.
                  </li>
                  <li>
                    <strong>Huaca Huallamarca</strong>, sitio arqueológico que
                    data del 200 A.C ocupado hasta la época Inca. Está ubicado
                    en el distrito de San Isidro.
                  </li>
                  <li>
                    <strong>Santuario Arqueológico de Pachacamac</strong>,
                    extenso sitio arqueológico ocupado por varias culturas desde
                    el 200 D.C. hasta inicios de la época colonial en el siglo
                    XVI. Fue el Oráculo del dios Pachacamac, y cuenta con
                    impresionantes edificios de la época Inca y un moderno Museo
                    de Sitio.
                  </li>
                  <li>
                    <strong>Ciudad Sagrada de Caral</strong>, fue la capital de
                    la sociedad Caral, primera civilización en el continente
                    Americano que data del 3,000 A.C. Tiene edificios
                    piramidales, plazas y barrios que reflejan la estructura
                    social de esta cultura. Reconocida como Patrimonio Mundial
                    por la UNESCO.
                  </li>
                </ul>
              </div>
            ),
          },
        ],
      },
    ],
    programa: [
      {
        id: 0,
        nombre: "Programa de Lima",
        link: "nosotros",
        descripcion: "Este es el programa de Lima",
      },
      {
        id: 1,
        nombre: "Programa de Lima",
        link: "nosotros",
        descripcion: "Este es el programa de Lima",
      },
    ],
    tips: [
      "Viajar durante los meses de abril a noviembre.",
      "Es importante hidratarse.",
      "Empacar protector de labios, protector solar, sombrero y repelente.",
      "Machu Picchu tiene un clima variado; lleve un impermeable.",
    ],
  },
  {
    id: 7,
    name: "Huaraz",
    descripcion:
      "Huaraz, conocida como La Suiza Peruana, está ubicada en los andes peruanos. Para los amantes del trekking y la naturaleza ofrece los más bellos paisajes, con picos nevados y lagunas de aguas cristalinas, que tienen su origen en los glaciares del Parque Nacional Huascarán, el cual es Patrimonio Mundial de la Humanidad declarado por la UNESCO. ",
    descripcion2:
      "La ruta trekking de Huayhuash está considerada entre las mejores 10 en el mundo. Para quienes prefieren la cultura y arqueología Chavín de Huántar, también Patrimonio Mundial de la Humanidad, es una visita que no se deben perder.",
    destinos: [
      {
        id: 0,
        nombre: "Cordillera Blanca",
        items: [
          {
            key: 1,
            label: "Información General",
            children: (
              <div style={{ padding: 15 }}>
                <p className="infoTitle" style={{ fontWeight: "Bold" }}>
                  Cómo llegar:
                </p>
                <p>
                  Desde Lima se viaja por una carretera en excelente estado,
                  durante 8 horas.
                </p>
                <br />
                <p className="infoTitle" style={{ fontWeight: "Bold" }}>
                  Cuándo viajar:
                </p>
                <p>
                  Se recomienda viajar entre los meses de abril y noviembre, por
                  ser el periodo de ausencia de lluvias.
                  <br />
                  Los meses de diciembre a marzo, corresponden a la temporada de
                  lluvias.
                </p>
              </div>
            ),
          },
          {
            key: 2,
            label: "Atractivos de la Ciudad y Alrededores",
            children: (
              <div style={{ padding: 15, marginLeft: 50 }}>
                <ul
                  style={{
                    listStyle: "circle",
                    width: 450,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <li>
                    <strong>La Plaza de Armas</strong>, es un lugar con mucho
                    encanto; está rodeada por la Catedral y el Museo
                    Arqueológico de Ancash.
                  </li>
                  <li>
                    <strong>Museo Arqueológico de Ancash</strong>,exhibe una
                    colección de cerámica, textiles y metales; destacando los
                    monolitos de la cultura Recuay.
                  </li>
                  <li>
                    <strong>Baños termales de Monterrey</strong>, cuenta con
                    piscina y espacios privados para disfrutar de las aguas
                    medicinales que alcanzan más de 60°C.
                  </li>
                  <li>
                    <strong>Poblados del Callejón de Huaylas</strong>, A lo
                    largo del valle formado por el río Santa se ubican muchos
                    pueblos pintorescos y con tradición. Cada uno posee
                    características que los hacen únicos. En el trayecto a los
                    atractivos más conocidos se realizan paradas para
                    disfrutarlos y apreciar las mejores vistas de la Cordillera
                    Blanca y la Cordillera Negra. Entre los pueblos más
                    visitados destacan: Huaraz, Recuay, Yungay, Carhuaz y Caraz.
                  </li>
                  <li>
                    <strong>Complejo Arqueológico Chavín de Huántar,</strong>,
                    declarado Patrimonio Cultural de la Humanidad por la UNESCO.
                    Fue un centro ceremonial usado para rituales y sacrificios,
                    construido por la cultura Chavín en 1,500 años A.C. El sitio
                    tiene plazas, esculturas líticas, edificios entre los que
                    destacan el Templo Nuevo y el Templo Viejo, que presenta
                    galerías subterráneas que guardan la imagen de la divinidad
                    principal.
                  </li>
                  <li>
                    <strong>El Parque Nacional Huascarán</strong>, cuenta con
                    una extensión de 340,000 hectáreas. Protege bosques,
                    montañas, más de 700 glaciares y 33 sitios arqueológicos. La
                    Cordillera Blanca.
                  </li>
                  <li>
                    <strong>Las Lagunas de Llanganuco</strong>, ubicadas en
                    Yungay, son el atractivo preferido en el Parque Nacional
                    Huascarán. Son 2 lagunas de aguas turquesa, Chinancocha y
                    Orconcocha, formadas por los deshielos de los nevados de la
                    Cordillera Blanca. La más visitada es la Laguna Chinancocha,
                    donde pueden admirarse bosques de queñuales en los
                    alrededores; se encuentra a 3,800 m.s.n.m. en las faldas del
                    nevado Huascarán.
                  </li>
                  <li>
                    <strong>Laguna de Querococha</strong>, se ubica a 3,980
                    m.s.n.m, es una parada recomendada en la ruta al sitio
                    arqueológico de Chavín de Huantar, por encontrarse muy cerca
                    a la carretera.
                  </li>
                  <li>
                    <strong>Nevado Pastoruri</strong>, su cima supera los 5,000
                    msnm. Durante la excursión se llega hasta las faldas del
                    nevado, donde se pueden apreciar los efectos del
                    calentamiento global. En el trayecto hacia el nevado se
                    observan las Puyas de Raimondi, una planta endémica que
                    alcanza los 4 metros de altura y que florece cada 100 años
                    aproximadamente, con alrededor de 6,000 flores tiene la
                    mayor inflorescencia en el mundo
                  </li>
                </ul>
              </div>
            ),
          },
          {
            key: 3,
            label: "Rutas de Trekking",
            children: (
              <div style={{ padding: 15, marginLeft: 50 }}>
                <ul
                  style={{
                    listStyle: "circle",
                    width: 450,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  <li>
                    <strong>Laguna de Parón</strong>, es la laguna más grande en
                    la Cordillera Blanca, ubicada frente al nevado Artesonraju
                    que se ve reflejado en las aguas cristalinas de esta laguna.
                    La caminata inicia en el pueblo de Parón. Es posible
                    ascender hasta el mirador natural.
                    <br />
                    <br />
                    <p>
                      Altura 4,185 msnm / Nivel de exigencia - Intermedio / 1.5
                      horas de caminata
                    </p>
                  </li>
                  <li>
                    <strong>Laguna de Churup</strong>,también conocida como la
                    Laguna de Siete Colores, por las tonalidades de sus aguas
                    turquesa. Para llegar, el ascenso empieza en el poblado de
                    Pitec y continúa a lo largo de la quebrada con bellos
                    paisajes, montañas y caídas de agua. Al llegar es hermoso
                    admirar el nevado de Churup reflejado en la laguna.
                    <br />
                    <br />
                    <p>
                      Altura 4,450 msnm / Nivel de exigencia - Intermedio a Alto
                      / 08 horas de caminata
                    </p>
                  </li>
                  <li>
                    <strong>Laguna 69</strong>, para visitar esta laguna se
                    parte desde Huaraz y se realiza una parada en ruta para
                    visitar la Laguna de Llanganuco. La caminata inicia al
                    llegar al pueblo de Cebollapampa. Durante el recorrido se
                    tienen hermosas vistas de los nevados Huascarán, Pisco,
                    Chacraraju y Chopicalqui.
                    <br />
                    <br />
                    <p>
                      Altura 3,399 msnm / Nivel de exigencia - Alta / 06 horas
                      de caminata
                    </p>
                  </li>
                  <li>
                    <strong>Santa Cruz</strong>, es el circuito más conocido en
                    Huaraz, que permite admirar la belleza del paisaje de la
                    Cordillera Blanca, teniendo vistas privilegiadas de sus
                    nevados y lagunas.
                    <ul
                      style={{
                        listStyle: "square",
                        marginLeft: 20,
                        marginTop: 5,
                      }}
                    >
                      <li>
                        Día 01/ Huaraz- Vaquería -Paria / 04 horas de caminata
                      </li>
                      <li>Día 02/ Paria- Taullipampa / 07 horas de caminata</li>
                      <li>
                        Día 03/ Taullipampa - Mirador Alpamayo -Llamacorral / 05
                        horas de caminata
                      </li>
                      <li>
                        Día 04/ Llamacorral - Huaraz / 03 horas de caminata
                      </li>
                    </ul>
                    <br />
                    <p>
                      Altura 4,750 msnm / Nivel de exigencia - Alta / 04 días
                    </p>
                  </li>
                  <li>
                    <strong>Huayhuash,</strong>, la ruta de caminata por la
                    Cordillera de Huayhuash es considerada una de las 10 más
                    hermosas del mundo, aunque también es un circuito exigente
                    donde se llega a más de 5,000 msnm, atravesando 7 de los
                    picos más altos del Perú. La recompensa son las más
                    impresionantes vistas de nevados, lagunas y campos, en
                    contacto con las comunidades; por lo que resulta una
                    verdadera experiencia de vida.
                    <br />
                    <br />
                    <p>
                      Este trekking requiere preparación para aclimatarse a la
                      altura. El circuito tradicional dura 12 días; sin embargo
                      con las nuevas carreteras existentes se pueden realizar
                      circuitos de hasta 04 días.
                    </p>
                  </li>
                </ul>
              </div>
            ),
          },
        ],
      },
    ],
    programa: [
      {
        id: 0,
        nombre: "Solicite una Cotización",
        link: "contacto",
        descripcion: "Escribanos",
      },
    ],
    tips: [
      "Es recomendable pasar uno o dos días en la ciudad de Huaraz antes de realizar excursiones que impliquen caminatas en la altura.",
      "Llevar zapatillas para caminatas largas",
      "Casaca impermeable.",
      "Gorra, lentes de sol, protector solar y protector de labios.",
      "Caminar a su propio ritmo.",
      "Considerar 01 o 02 días de aclimatación a la altura, con excursiones cortas, previa a los circuitos de trekking.",
    ],
  },
  {
    id: 8,
    name: "Playas",
    descripcion:
      "En el norte del Perú encontramos las ciudades de Piura y Tumbes, que nos ofrecen playas paradisíacas, con arena blanca y de aguas calientes.",
    descripcion2:
      "Estas playas son consideradas las más hermosas del país. Ambas ciudades son consideradas “el eterno calor”.",
    destinos: [
      {
        id: 0,
        nombre: "Piura",
        items: [
          {
            key: 1,
            label: "Información General",
            children: (
              <div style={{ padding: 15 }}>
                <p className="infoTitle" style={{ fontWeight: "Bold" }}>
                  Cómo llegar:
                </p>
                <p>
                  Desde Lima, existen vuelos aéreos que duran 1 hora 30 minutos.
                  <br />
                  También pueden utilizar buses que recorren la panamericana
                  norte, el recorrido dura 20 horas aproximadamente.
                  <br />
                  Para el acceso a las playas de Tumbes y Piura se realiza de
                  manera terrestre.
                </p>
                <br />
                <p className="infoTitle" style={{ fontWeight: "Bold" }}>
                  Cuándo viajar:
                </p>
                <p>
                  Sus playas son consideradas un paraíso, de enero a febrero es
                  la época más calurosa del año. La temporada seca son los
                  mismos meses que Tumbes.
                </p>
              </div>
            ),
          },
          {
            key: 2,
            label: "Atractivos y Playas de Piura",
            children: (
              <div style={{ padding: 15, marginLeft: 50 }}>
                <ul
                  style={{
                    listStyle: "circle",
                    width: 450,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <li>
                    <strong>Máncora</strong>, es una de las más conocidas, se
                    encuentra a 181 km de Piura, en carro privado o taxi toma
                    aproximadamente 3 horas de recorrido. Pero a pesar de
                    encontrarse en Piura el acceso más cercano es por Tumbes,
                    tomará dos horas aproximadamente en carro o bus. Tiene un
                    oleaje bastante alto por eso es excelente para surfear.
                    Además buceo para conocer las tortugas marinas y la vida
                    bajo el mar.
                  </li>
                  <li>
                    <strong>Vichayito</strong>,se encuentra a 13 km de Máncora y
                    es una playa muy tranquila. Si busca la calma es el lugar
                    perfecto. Sus aguas son cálidas y es perfecto para practicar
                    buceo.
                  </li>
                  <li>
                    <strong>Los Órganos</strong>, localizada en el distrito de
                    Los Órganos, se caracteriza por sus aguas turquesa y arena
                    blanca. Se pueden realizar diversos deportes acuáticos.
                  </li>
                  <li>
                    <strong>Cabo Blanco</strong>, muy reconocida porque ha sido
                    visitada por personajes célebres, el príncipe Felipe de
                    Edimburgo, el escritor Ernest Hemingway, la actriz Marilyn
                    Monroe. Además es un lugar ideal para los surfistas, porque
                    posee grandes olas que pueden llegar a cuatro metros de
                    altura. Sus aguas son cálidas y turquesas como Los Órganos.
                  </li>
                </ul>
              </div>
            ),
          },
        ],
      },
      {
        id: 1,
        nombre: "Tumbes",
        items: [
          {
            key: 1,
            label: "Información General",
            children: (
              <div style={{ padding: 15 }}>
                <p className="infoTitle" style={{ fontWeight: "Bold" }}>
                  Cómo llegar:
                </p>
                <p>
                  Desde Lima, existen vuelos aéreos que duran 1 hora 30 minutos.
                  <br />
                  También pueden utilizar buses que recorren la panamericana
                  norte, el recorrido dura 20 horas aproximadamente.
                  <br />
                  Para el acceso a las playas de Tumbes y Piura se realiza de
                  manera terrestre.
                </p>
                <br />
                <p className="infoTitle" style={{ fontWeight: "Bold" }}>
                  Cuándo viajar:
                </p>
                <p>
                  Siempre recibe a sus visitantes todo el año, la temporada
                  ideal es de abril a diciembre. Los meses de enero a marzo es
                  un calor extremo. Los meses secos son de junio a noviembre.
                </p>
              </div>
            ),
          },
          {
            key: 2,
            label: "Atractivos y Playas de Tumbes",
            children: (
              <div style={{ padding: 15, marginLeft: 50 }}>
                <ul
                  style={{
                    listStyle: "circle",
                    width: 450,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <li>
                    <strong>Zorritos</strong>, ubicada a 28 km de Tumbes, es una
                    playa paradisíaca, de arena fina es perfecta para acampar y
                    realizar motonáutica. En este lugar se perforó el primer
                    pozo petrolero del Perú y Sudamérica. Excelente
                    infraestructura hotelera.
                  </li>
                  <li>
                    <strong>Punta Sal</strong>,está a 1 hora 30 de Tumbes, es
                    una playa hermosa de aguas cálidas, ideal para el buceo en
                    sus arrecifes y la pesca, entre los meses de julio y agosto
                    se realiza el avistamiento de ballenas jorobadas. Por su
                    oleaje suave se practica el kitesurf y kayak.
                  </li>
                  <li>
                    <strong>Los Órganos</strong>, es una pequeña bahía de
                    pescadores, a 13 km de Tumbes, tiene uno de los ecosistemas
                    más hermosos, rodeada por manglares. Puede alquilar
                    embarcaciones para realizar paseos o kayak alrededor de los
                    bosques de mangle.
                  </li>
                </ul>
              </div>
            ),
          },
        ],
      },
    ],
    programa: [
      {
        id: 0,
        nombre: "Solicite una Cotización",
        link: "contacto",
        descripcion: "Escribanos",
      },
    ],
    tips: [
      "Los niveles de temperatura de Tumbes y Piura son elevados y calurosos, la máxima 32° en marzo y la más baja 20° en el mes de agosto. ",
      "Llevar ropa de verano, bloqueador solar, lentes de sol e hidratarse constantemente.",
    ],
  },
];
