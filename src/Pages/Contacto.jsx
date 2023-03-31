import ReCAPTCHA from "react-google-recaptcha";
import "./Contacto.css";
import { useState, useEffect } from "react";
import { AutoComplete } from "antd";

export default function Contacto() {
  const [datos, setDatos] = useState({});
  const [options, setOptions] = useState([]);

  useEffect(() => {
    window.scroll({ top: 0 });
    fetch("https://restcountries.com/v3.1/all")
      .then((data) => data.json())
      .then((response) => {
        let countries = [];
        response.map((respuesta) => {
          countries.push({
            label: respuesta.name.common,
            value: respuesta.name.common,
          });
        });
        setOptions(countries);
      });
  }, []);

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
          <h3>Estamos atentos a sus preguntas. Escribenos:</h3>
          <form className="form-contactanos">
            <input
              type="text"
              placeholder="Nombre Apellido*"
              onChange={handleChange}
              name="nombre"
            />
            <input type="email" placeholder="E-mail" />
            <div className="form-telefono">
              <AutoComplete
                className="form-codigo"
                options={options}
                filterOption={true}
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
            <p style={{ lineHeight: 0 }}>
              *Mencionar: Número de viajeros, Fechas de viaje, Tipo de Hoteles
            </p>
            {/* <div className="recaptcha">
              <ReCAPTCHA />
            </div> */}
            <div className="submit-content" style={{ marginTop: 20 }}>
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
              <a href="https://www.youtube.com/" target="_blank">
                <ion-icon name="logo-youtube" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
