import { Link } from "react-router-dom";

export const items = [
  {
    key: "1",
    label: <Link to={"/"}>Inicio</Link>,
  },
  {
    key: "2",
    label: <Link to={"/nosotros"}>Nosotros</Link>,
  },
  {
    key: "3",
    label: <Link>Destinos Perú</Link>,
    children: [
      {
        key: "3-1",
        label: "Por qué Perú?",
      },
      {
        key: "3-2",
        label: "Mejores Destino",
        children: [
          {
            key: "3-2-1",
            label: "Cuzco - Valle Sagrado",
          },
          {
            key: "3-2-2",
            label: "Machu Picchu",
          },
          {
            key: "3-2-3",
            label: "Puno - Lago Titicaca",
          },
          {
            key: "3-2-4",
            label: "Arequipa - Cañon del Colca",
          },
          {
            key: "3-2-5",
            label: "Paracas - Ica - Lineas de Nazca",
          },
          {
            key: "3-2-6",
            label: "Amazonas: Iquitos & Puerto Maldonado",
          },
          {
            key: "3-2-7",
            label: "Lima - Capital Gastronómica",
          },
          {
            key: "3-2-8",
            label: "Huaraz - Cordillera Blanca",
          },
          {
            key: "3-2-9",
            label: "Playas: Piura & tumbes",
          },
        ],
      },
      {
        key: "3-3",
        label: "Rutas de Trekking",
        children: [
          {
            key: "3-3-1",
            label: "Camino Inca",
          },
          {
            key: "3-3-2",
            label: "Choquequirao",
          },
          {
            key: "3-3-3",
            label: "Salkantay",
          },
          {
            key: "3-3-4",
            label: "Huayhuash Trek",
          },
        ],
      },
    ],
  },
  {
    key: "4",
    label: <Link>Programas</Link>,
    children: [
      {
        key: "4-1",
        label: "Cusco & Machu Picchu - 05 Días",
      },
      {
        key: "4-2",
        label: "Perú Clásico - 00 Días",
      },
      {
        key: "4-3",
        label: "Perú Milenario - 00 Días",
      },
      {
        key: "4-4",
        label: "Nazca & Paracas - 02 Días",
      },
      {
        key: "4-5",
        label: "Amazonas - 03 Días",
      },
    ],
  },
  {
    key: "5",
    label: <Link>Highlights</Link>,
    children: [
      {
        key: "5-1",
        label: "FD Machu Picchu",
      },
      {
        key: "5-2",
        label: "FD Montaña 07 Colores",
      },
      {
        key: "5-3",
        label: "Camino Inca - 04 Días",
      },
      {
        key: "5-4",
        label: "Tour Lima Gastronómica",
      },
      {
        key: "5-5",
        label: "FD Uros + Taquile",
      },
      {
        key: "5-6",
        label: "Cañón del Colca - 02 Días",
      },
    ],
  },
  {
    key: "6",
    label: <Link to="/contacto">Contacto</Link>,
  },
  {
    key: "7",
    label: <Link>Blog</Link>,
  },
  {
    key: "8",
    label: <Link>🇪🇸</Link>,
    children: [
      {
        key: "8-1",
        label: "🇪🇸",
      },
      {
        key: "8-2",
        label: "🇫🇷",
      },
      {
        key: "8-3",
        label: "🇵🇹",
      },
      {
        key: "8-4",
        label: "🇬🇧",
      },
    ],
  },
];
