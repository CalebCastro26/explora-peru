import { Link } from "react-router-dom";
import { Dropdown, Button } from "antd";
import "./Navbar.css";
import { MenuOutlined } from "@ant-design/icons";
import { useState, useContext, useEffect } from "react";
import { ApplicationContext } from "../context/ApplicationContext";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const appctx = useContext(ApplicationContext);
  const { t, i18n } = useTranslation();
  const [bandera, setBandera] = useState("🇪🇸");
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 45) {
        setShrink(true);
      } else {
        setShrink(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
              label: (
                <Link to="/destinos/mejoresdestinos/Cusco">
                  Cuzco - Valle Sagrado - Machu Picchu
                </Link>
              ),
            },
            {
              key: "3-2-2",
              label: (
                <Link to="/destinos/mejoresdestinos/Puno">
                  Puno - Lago Titicaca
                </Link>
              ),
            },
            {
              key: "3-2-3",
              label: (
                <Link to="/destinos/mejoresdestinos/Arequipa">
                  Arequipa - Cañon del Colca
                </Link>
              ),
            },
            {
              key: "3-2-4",
              label: (
                <Link to="/destinos/mejoresdestinos/Ica">
                  Paracas - Ica - Lineas de Nazca
                </Link>
              ),
            },
            {
              key: "3-2-5",
              label: (
                <Link to="/destinos/mejoresdestinos/Amazonia">
                  Amazonia: Iquitos & Puerto Maldonado
                </Link>
              ),
            },
            {
              key: "3-2-6",
              label: (
                <Link to="/destinos/mejoresdestinos/Lima">
                  Lima - Capital Gastronómica
                </Link>
              ),
            },
            {
              key: "3-2-7",
              label: (
                <Link to="/destinos/mejoresdestinos/Huaraz">
                  Huaraz - Cordillera Blanca
                </Link>
              ),
            },
            {
              key: "3-2-8",
              label: (
                <Link to="/destinos/mejoresdestinos/Playas">
                  Playas: Piura & Tumbes
                </Link>
              ),
            },
          ],
        },
        {
          key: "3-3",
          label: "Rutas de Trekking",
          children: [
            {
              key: "3-3-1",
              label: (
                <Link to="/destinos/rutastrekking/caminoInca">Camino Inca</Link>
              ),
            },
            {
              key: "3-3-2",
              label: (
                <Link to="/destinos/rutastrekking/choqueriao">
                  Choquequirao
                </Link>
              ),
            },
            {
              key: "3-3-3",
              label: (
                <Link to="/destinos/rutastrekking/salkantay">Salkantay</Link>
              ),
            },
            {
              key: "3-3-4",
              label: (
                <Link to="/destinos/rutastrekking/huayhuash">Huayhuash</Link>
              ),
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
          label: (
            <Link to="/programas/cusco-machupicchu">
              Cusco & Machu Picchu - 05 Días
            </Link>
          ),
        },
        {
          key: "4-2",
          label: (
            <Link to="/programas/peru-clasico">Perú Clásico - 00 Días</Link>
          ),
        },
        {
          key: "4-3",
          label: (
            <Link to="/programas/peru-milenario">Perú Milenario - 00 Días</Link>
          ),
        },
        {
          key: "4-4",
          label: (
            <Link to="/programas/nazca-paracas">Nazca & Paracas - 02 Días</Link>
          ),
        },
        {
          key: "4-5",
          label: <Link to="/programas/amazonas">Amazonas - 03 Días</Link>,
        },
      ],
    },
    {
      key: "5",
      label: <Link>{t("navbar.highlights")}</Link>,
      children: [
        {
          key: "5-1",
          label: <Link to="/highlights/fdmachu-picchu">FD Machu Picchu</Link>,
        },
        {
          key: "5-2",
          label: (
            <Link to="/highlights/fdmontana-colores">
              FD Montaña 07 Colores
            </Link>
          ),
        },
        {
          key: "5-3",
          label: (
            <Link to="/highlights/fdcamino-inca">Camino Inca - 04 Días</Link>
          ),
        },
        {
          key: "5-4",
          label: (
            <Link to="/highlights/fdlineas-nazca">
              FD Sobrevuelo Líneas de Nazca (Desde Ica)
            </Link>
          ),
        },
        {
          key: "5-5",
          label: (
            <Link to="/highlights/fdtour-lima">
              Tour Lima Colonial & Gastronómica
            </Link>
          ),
        },
        {
          key: "5-6",
          label: <Link to="/highlights/fduros-taquile">FD Uros + Taquile</Link>,
        },
        {
          key: "5-7",
          label: (
            <Link to="/highlights/fdcanon-colca">
              Cañón del Colca - 02 Días
            </Link>
          ),
        },
        {
          key: "5-8",
          label: <Link to="/highlights/fdchoquequirao">Choquequirao</Link>,
        },
        {
          key: "5-9",
          label: (
            <Link to="/highlights/fdcrucero-amazonas">
              Crucero por el Amazonas
            </Link>
          ),
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
      <nav id="nav" className={shrink ? "shrink" : ""}>
        <Link to="/">
          <div className="logo-container">
            <img
              id="nav-img"
              src="/logo.png"
              alt=""
              className={shrink ? "logo logo-shrink" : "logo"}
            />
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
                      <Link
                        to={"/destinos/mejoresdestinos/Cusco"}
                        className="dropdown-link link"
                      >
                        Cusco - Valle Sagrado - Machu Picchu
                      </Link>
                    </li>
                    <li className="dropdown-destinos">
                      <Link
                        to={"/destinos/mejoresdestinos/Puno"}
                        className="dropdown-link link"
                      >
                        Puno - Lago Titicaca
                      </Link>
                    </li>
                    <li className="dropdown-destinos">
                      <Link
                        to={"/destinos/mejoresdestinos/Arequipa"}
                        className="dropdown-link link"
                      >
                        Arequipa - Cañón del Colca
                      </Link>
                    </li>
                    <li className="dropdown-destinos">
                      <Link
                        to={"/destinos/mejoresdestinos/Ica"}
                        className="dropdown-link link"
                      >
                        Paracas - Ica - Líneas de Nazca
                      </Link>
                    </li>
                    <li className="dropdown-destinos">
                      <Link
                        to={"/destinos/mejoresdestinos/Amazonia"}
                        className="dropdown-link link"
                      >
                        Amazonia: Iquitos & Puerto Maldonado
                      </Link>
                    </li>
                    <li className="dropdown-destinos">
                      <Link
                        to={"/destinos/mejoresdestinos/Lima"}
                        className="dropdown-link link"
                      >
                        Lima - Capital Gastronómica
                      </Link>
                    </li>
                    <li className="dropdown-destinos">
                      <Link
                        to={"/destinos/mejoresdestinos/Huaraz"}
                        className="dropdown-link link"
                      >
                        Huaraz - Cordillera Blanca
                      </Link>
                    </li>
                    <li className="dropdown-destinos">
                      <Link
                        to={"/destinos/mejoresdestinos/Playas"}
                        className="dropdown-link link"
                      >
                        Playas: Piura & Tumbes
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link className="dropdown-link link">Rutas de Trekking</Link>
                  <ul className="dropdown-destinos">
                    <li className="dropdown-destinos">
                      <Link
                        to={"/destinos/rutastrekking/caminoInca"}
                        className="dropdown-link link"
                      >
                        Camino Inca
                      </Link>
                    </li>
                    <li className="dropdown-destinos">
                      <Link
                        to={"/destinos/rutastrekking/choqueriao"}
                        className="dropdown-link link"
                      >
                        Choquequirao
                      </Link>
                    </li>
                    <li className="dropdown-destinos">
                      <Link
                        to={"/destinos/rutastrekking/salkantay"}
                        className="dropdown-link link"
                      >
                        Salkantay{" "}
                      </Link>
                    </li>
                    <li className="dropdown-destinos">
                      <Link
                        to={"/destinos/rutastrekking/huayhuash"}
                        className="dropdown-link link"
                      >
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
                  <Link
                    to="/programas/cusco-machupicchu"
                    className="dropdown-link link"
                  >
                    Cusco & Machu Picchu - 05 Días
                  </Link>
                </li>
                <li className="dropdown-Programas">
                  <Link
                    to="/programas/peru-clasico"
                    className="dropdown-link link"
                  >
                    Perú Clásico - 00 Días{" "}
                  </Link>
                </li>
                <li className="dropdown-Programas">
                  <Link
                    to="/programas/peru-milenario"
                    className="dropdown-link link"
                  >
                    Perú Milenario - 00 Días{" "}
                  </Link>
                </li>
                <li className="dropdown-Programas">
                  <Link
                    to="/programas/nazca-paracas"
                    className="dropdown-link link"
                  >
                    Nazca & Paracas - 02 Días
                  </Link>
                </li>
                <li className="dropdown-Programas">
                  <Link to="/programas/amazonas" className="dropdown-link link">
                    Amazonas - 03 Días
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="navbar-link link">{t("navbar.highlights")}</Link>
              <ul className="dropdown-Highlights">
                <li className="dropdown-Highlights">
                  <Link
                    to="/highlights/fdmachu-picchu"
                    className="dropdown-link link"
                  >
                    FD Machu Picchu
                  </Link>
                </li>
                <li className="dropdown-Highlights">
                  <Link
                    to="/highlights/fdmontana-colores"
                    className="dropdown-link link"
                  >
                    FD Montaña 07 Colores
                  </Link>
                </li>
                <li className="dropdown-Highlights">
                  <Link
                    to="/highlights/fdcamino-inca"
                    className="dropdown-link link"
                  >
                    Camino Inca - 04 Días{" "}
                  </Link>
                </li>
                <li className="dropdown-Highlights">
                  <Link
                    to="/highlights/fdlineas-nazca"
                    className="dropdown-link link"
                  >
                    FD Sobrevuelo Líneas de Nazca (Desde Ica)
                  </Link>
                </li>
                <li className="dropdown-Highlights">
                  <Link
                    to="/highlights/fdtour-lima"
                    className="dropdown-link link"
                  >
                    Tour Lima Colonial & Gastronómica
                  </Link>
                </li>
                <li className="dropdown-Highlights">
                  <Link
                    to="/highlights/fduros-taquile"
                    className="dropdown-link link"
                  >
                    FD Uros + Taquile
                  </Link>
                </li>
                <li className="dropdown-Highlights">
                  <Link
                    to="/highlights/fdcanon-colca"
                    className="dropdown-link link"
                  >
                    Cañón del Colca - 02 Días
                  </Link>
                </li>
                <li className="dropdown-Highlights">
                  <Link
                    to="/highlights/fdchoquequirao"
                    className="dropdown-link link"
                  >
                    Choquequirao
                  </Link>
                </li>
                <li className="dropdown-Highlights">
                  <Link
                    to="/highlights/fdcrucero-amazonas"
                    className="dropdown-link link"
                  >
                    Crucero por el Amazonas
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
