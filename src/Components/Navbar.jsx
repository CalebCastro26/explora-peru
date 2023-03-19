import { Link } from "react-router-dom";
import { Dropdown, Button } from "antd";
import "./Navbar.css";
import { MenuOutlined } from "@ant-design/icons";
import { items } from "../navbarContent";
import { useState } from "react";

export default function Navbar() {
  const [bandera, setBandera] = useState("🇪🇸");
  const banderas = [
    {
      id: 1,
      bandera: "🇪🇸",
    },
    {
      id: 2,
      bandera: "🇫🇷",
    },
    {
      id: 3,
      bandera: "🇵🇹",
    },
    {
      id: 4,
      bandera: "🇬🇧",
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
        <img src="/explora-logo.webp" alt="" />
        <Dropdown
          placement="bottomRight"
          menu={{
            items,
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
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/nosotros" className="navbar-link link">
                Nosotros
              </Link>
            </li>
            <li>
              <Link className="navbar-link link">Destinos Perú</Link>
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
              <Link className="navbar-link link">Programas</Link>
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
              <Link className="navbar-link link">Highlights</Link>
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
                Contacto
              </Link>
            </li>
            <li>
              <Link className="navbar-link link">Blog</Link>
            </li>
          </ul>
          <div className="dropdown-banderas">
            <Button>{bandera}</Button>
            <div className="dropdown-banderas-content">
              {banderas.map((name) => (
                <a onClick={() => setBandera(name.bandera)} key={name.id}>
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
