import { Link } from "react-router-dom";
import { Dropdown, Button } from "antd";
import "./Navbar.css";
import { MenuOutlined } from "@ant-design/icons";
import { useState, useContext } from "react";
import { ApplicationContext } from "../context/ApplicationContext";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const appctx = useContext(ApplicationContext);
  const { t, i18n } = useTranslation();
  const [bandera, setBandera] = useState("🇪🇸");

  const onChangeLenguaje = (lenguaje) => {
    appctx.setDataContext({ lenguaje });
    console.log(lenguaje);
    i18n.changeLanguage(lenguaje);
  };

  const onClick = ({ key }) => {
    switch (key) {
      case "8-1":
        setBandera("🇪🇸");
        appctx.setDataContext({ lenguaje: "es" });
        i18n.changeLanguage("es");
        break;
      case "8-2":
        setBandera("🇫🇷");
        appctx.setDataContext({ lenguaje: "fr" });
        i18n.changeLanguage("fr");
        break;
      case "8-3":
        setBandera("🇵🇹");
        appctx.setDataContext({ lenguaje: "pt" });
        i18n.changeLanguage("pt");
        break;
      case "8-4":
        setBandera("🇬🇧");
        appctx.setDataContext({ lenguaje: "en" });
        i18n.changeLanguage("en");
        break;
      default:
        break;
    }
  };

  const items = [
    {
      key: "1",
      label: <Link to={"/"}>{t("navbar.inicio")}</Link>,
    },
    {
      key: "2",
      label: <Link to={"/nosotros"}>{t("navbar.nosotros")}</Link>,
    },
    {
      key: "3",
      label: <Link>{t("navbar.destinos")}</Link>,
      children: [
        {
          key: "3-1",
          label: <Link to="/destinos/porqueperu">Por qué Perú?</Link>,
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
      label: <Link>{t("navbar.programas")}</Link>,
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
      label: <Link>{t("navbar.highlights")}</Link>,
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
      label: <Link to="/contacto">{t("navbar.contactos")}</Link>,
    },
    {
      key: "7",
      label: <Link>{t("navbar.blog")}</Link>,
    },
    {
      key: "8",
      label: <Link>{bandera}</Link>,
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

  const banderas = [
    {
      id: 1,
      bandera: "🇪🇸",
      lenguaje: "es",
    },
    {
      id: 2,
      bandera: "🇫🇷",
      lenguaje: "fr",
    },
    {
      id: 3,
      bandera: "🇵🇹",
      lenguaje: "pt",
    },
    {
      id: 4,
      bandera: "🇬🇧",
      lenguaje: "en",
    },
  ];

  return (
    <header>
      <div className="top-bar">
        <div className="top-bar-inner">
          <div className="top-bar-content">
            <div className="inner">
              <a href="tel:+51960396110" className="phone">
                <ion-icon name="call" className="top-icon" />
                +51 960396110
              </a>
              <a className="content">|</a>
              <a href="mailto:info@exploraperutravel.com" className="correo">
                <ion-icon name="mail" className="top-icon" />
                info@exploraperutravel.com
              </a>
            </div>
          </div>
          <div className="top-bar-socials">
            <div className="inner">
              <span>
                <a
                  href="https://web.facebook.com/people/Explora-Per%C3%BA/100079974654390/?mibextid=ZbWKwL"
                  target="_blank"
                >
                  <ion-icon name="logo-facebook" />
                </a>
              </span>
              <span className="content">|</span>
              <span>
                <a
                  href="https://www.instagram.com/explora4256/"
                  target="_blank"
                >
                  <ion-icon name="logo-instagram" />
                </a>
              </span>
              <span className="content">|</span>
              <span>
                <a href="https://www.youtube.com" target="_blank">
                  <ion-icon name="logo-youtube" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <nav>
        <Link to="/">
          <div className="logo-container">
            <img src="/logo.png" alt="" className="logo" />
          </div>
        </Link>
        <Dropdown
          placement="bottomRight"
          menu={{
            items,
            onClick,
          }}
        >
          <Button
            className="btn-menu"
            icon={<MenuOutlined />}
            size="middle"
          ></Button>
        </Dropdown>
        <div className="navbar">
          <ul>
            <li>
              <Link to="/" className="navbar-link link">
                {t("navbar.inicio")}
              </Link>
            </li>
            <li>
              <Link to="/nosotros" className="navbar-link link">
                {t("navbar.nosotros")}
              </Link>
            </li>
            <li>
              <Link className="navbar-link link">{t("navbar.destinos")}</Link>
              <ul>
                <li>
                  <Link
                    to="/destinos/porqueperu"
                    className="dropdown-link link"
                  >
                    Por qué Perú?
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-link link">Mejores Destinos</Link>
                  <ul className="dropdown-destinos">
                    <li className="dropdown-destinos">
                      <Link className="dropdown-link link">
                        Cuzco - Valle Sagrado - Machu Picchu
                      </Link>
                    </li>
                    <li className="dropdown-destinos">
                      <Link className="dropdown-link link">
                        Puno - Lago Titicaca
                      </Link>
                    </li>
                    <li className="dropdown-destinos">
                      <Link className="dropdown-link link">
                        Arequipa - Cañón del Colca
                      </Link>
                    </li>
                    <li className="dropdown-destinos">
                      <Link className="dropdown-link link">
                        Paracas - Ica - Líneas de Nazca
                      </Link>
                    </li>
                    <li className="dropdown-destinos">
                      <Link className="dropdown-link link">
                        Amazonia: Iquitos & Puerto Maldonado
                      </Link>
                    </li>
                    <li className="dropdown-destinos">
                      <Link className="dropdown-link link">
                        Lima - Capital Gastronómica
                      </Link>
                    </li>
                    <li className="dropdown-destinos">
                      <Link className="dropdown-link link">
                        Huaraz - Cordillera Blanca
                      </Link>
                    </li>
                    <li className="dropdown-destinos">
                      <Link className="dropdown-link link">
                        Playas: Piura & Tumbes
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link className="dropdown-link link">Rutas de Trekking</Link>
                  <ul className="dropdown-destinos">
                    <li className="dropdown-destinos">
                      <Link className="dropdown-link link">Camino Inca</Link>
                    </li>
                    <li className="dropdown-destinos">
                      <Link className="dropdown-link link">Choquequirao</Link>
                    </li>
                    <li className="dropdown-destinos">
                      <Link className="dropdown-link link">Salkantay </Link>
                    </li>
                    <li className="dropdown-destinos">
                      <Link className="dropdown-link link">
                        Huayhuash Trek{" "}
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link className="navbar-link link">{t("navbar.programas")}</Link>
              <ul className="dropdown-Programas">
                <li className="dropdown-Programas">
                  <Link className="dropdown-link link">
                    Cusco & Machu Picchu - 05 Días
                  </Link>
                </li>
                <li className="dropdown-Programas">
                  <Link className="dropdown-link link">
                    Perú Clásico - 00 Días{" "}
                  </Link>
                </li>
                <li className="dropdown-Programas">
                  <Link className="dropdown-link link">
                    Perú Milenario - 00 Días{" "}
                  </Link>
                </li>
                <li className="dropdown-Programas">
                  <Link className="dropdown-link link">
                    Nazca & Paracas - 02 Días
                  </Link>
                </li>
                <li className="dropdown-Programas">
                  <Link className="dropdown-link link">Amazonas - 03 Días</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="navbar-link link">{t("navbar.highlights")}</Link>
              <ul className="dropdown-Highlights">
                <li className="dropdown-Highlights">
                  <Link className="dropdown-link link">FD Machu Picchu</Link>
                </li>
                <li className="dropdown-Highlights">
                  <Link className="dropdown-link link">
                    FD Montaña 07 Colores
                  </Link>
                </li>
                <li className="dropdown-Highlights">
                  <Link className="dropdown-link link">
                    Camino Inca - 04 Días{" "}
                  </Link>
                </li>
                <li className="dropdown-Highlights">
                  <Link className="dropdown-link link">
                    Tour Lima Gastronómica
                  </Link>
                </li>
                <li className="dropdown-Highlights">
                  <Link className="dropdown-link link">FD Uros + Taquile</Link>
                </li>
                <li className="dropdown-Highlights">
                  <Link className="dropdown-link link">
                    Cañón del Colca - 02 Días
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/contacto" className="navbar-link link">
                {t("navbar.contactos")}
              </Link>
            </li>
            <li>
              <Link className="navbar-link link">{t("navbar.blog")}</Link>
            </li>
          </ul>
          <div className="dropdown-banderas">
            <Button>{bandera}</Button>
            <div className="dropdown-banderas-content">
              {banderas.map((name) => (
                <a
                  onClick={() => {
                    setBandera(name.bandera);
                    onChangeLenguaje(name.lenguaje);
                  }}
                  key={name.id}
                >
                  {name.bandera}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
