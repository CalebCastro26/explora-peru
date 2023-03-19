import "./Contacto.css";
import { useState } from "react";

export default function Contacto() {
  const [datos, setDatos] = useState({});

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(datos);
  };

  return (
    <section className="contacto">
      <h1>Contactanos</h1>
      <div className="contactos-content">
        <div className="contactos-content-left">
          <h3>Hola! Cuentanos tu plan de viaje</h3>
          <form className="form-contactanos">
            <input
              type="text"
              placeholder="Nombre Apellido*"
              onChange={handleChange}
              name="nombre"
            />
            <input type="email" placeholder="E-mail" />
            <div className="form-telefono">
              <input
                type="tel"
                maxLength="4"
                placeholder="Código"
                className="form-codigo"
                onChange={handleChange}
                name="codigo"
              />
              <input
                type="tel"
                maxLength="10"
                placeholder="Móvil"
                className="form-movil"
                onChange={handleChange}
                name="movil"
              />
            </div>
            <textarea
              onChange={handleChange}
              name="descripcion"
              placeholder="Describenos tu plan de viaje"
            />
            <div className="submit-content">
              <button onClick={submit} type="submit" className="btn-submit">
                Enviar
              </button>
            </div>
          </form>
        </div>
        <div className="contactos-content-right">
          <h3>Explora Perú Travel & Taste </h3>
          <div className="datos">
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <ion-icon name="call" />
              <a href="tel:+51960396110">+51 960396110</a>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <ion-icon name="mail" />
              <a href="mailto:info@exploraperutravel.com">
                info@exploraperutravel.com
              </a>
            </div>
            <div style={{ marginTop: 20 }}>
              <p>Horario de Oficina</p>
              <p>Lunes a Viernes 9 a.m. a 5 p.m. (-5hrs GMT)</p>
            </div>
          </div>
          <div className="frases">
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <img src="/explora-icon.webp" height="32" />
              <p>We listen carefully</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <img src="/explora-icon.webp" height="32" />
              <p>You explore worry free</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <img src="/explora-icon.webp" height="32" />
              <p>We personalize your itinerary</p>
            </div>
          </div>

          <div className="inner">
            <span className="facebook">
              <a
                href="https://web.facebook.com/people/Explora-Per%C3%BA/100079974654390/?mibextid=ZbWKwL"
                target="_blank"
              >
                <ion-icon name="logo-facebook" />
              </a>
            </span>
            <span className="instagram">
              <a href="https://www.instagram.com/explora4256/" target="_blank">
                <ion-icon name="logo-instagram" />
              </a>
            </span>
            <span className="youtube">
              <a
                href="https://www.youtube.com/@explorerperutravel6841"
                target="_blank"
              >
                <ion-icon name="logo-youtube" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
