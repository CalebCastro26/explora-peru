import { Link } from "react-router-dom";
import { Dropdown, Button } from "antd";
import "./Navbar.css";
import { MenuOutlined } from "@ant-design/icons";
import { items } from "../navbarContent";
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

  const onClick = ({ key }) => {
    console.log(`Click item with ${key}`);
  };

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
          <img src="/explora-logo.webp" alt="" />
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
                  <Link className="dropdown-link link">Por qué Perú?</Link>
                </li>
                <li>
                  <Link className="dropdown-link link">Mejores Destinos</Link>
                  <ul className="dropdown-destinos">
                    <li className="dropdown-destinos">
                      <Link className="dropdown-link link">
                        Cuzco - Valle Sagrado
                      </Link>
                    </li>
                    <li className="dropdown-destinos">
                      <Link className="dropdown-link link">Machu Picchu</Link>
                    </li>
                    <li className="dropdown-destinos">
                      <Link className="dropdown-link link">
                        Puno - Lago Titicaca
                      </Link>
                    </li>
                    <li className="dropdown-destinos">
                      <Link className="dropdown-link link">
                        Arequipa - Cañon del Colca
                      </Link>
                    </li>
                    <li className="dropdown-destinos">
                      <Link className="dropdown-link link">
                        Paracas - Ica - Lineas de Nazca
                      </Link>
                    </li>
                    <li className="dropdown-destinos">
                      <Link className="dropdown-link link">
                        Amazonas: Iquitos & Puerto Maldonado
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
                        Playas: Piura & tumbes
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
