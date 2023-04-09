import ReCAPTCHA from "react-google-recaptcha";
import "./Contacto.css";
import { useState, useEffect } from "react";
import { AutoComplete, Button, Input } from "antd";

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
          console.log(respuesta);
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
      <div className="contacto-img-header">
        <img src="/destinos/trek-cajamarca-trujillo.jpg" alt="" />
      </div>
      <div className="contactos-body">
        <div className="contactos-title">
          <h1>Contáctanos</h1>
        </div>
        <div className="contactos-content">
          <div className="contactos-content-left">
            <p>
              Explora Perú Travel & Taste se encuentra en el Perú. Usted puede
              contactarnos por email, teléfono, Whatsapp o completando el
              siguiente formulario:
            </p>
            <form className="form-contactanos">
              <div className="form-item">
                <Input
                  type="text"
                  placeholder="Nombre*"
                  onChange={handleChange}
                  name="nombre"
                />
                <Input
                  type="text"
                  placeholder="Apellido*"
                  onChange={handleChange}
                  name="apellido"
                />
              </div>
              <div className="form-item">
                <Input
                  type="email"
                  placeholder="E-mail"
                  onChange={handleChange}
                  name="email"
                />
                <Input
                  type="tel"
                  maxLength="10"
                  placeholder="Celular Ejm. +51 987654321"
                  onChange={handleChange}
                  name="movil"
                />
              </div>
              <div className="form-item">
                <AutoComplete
                  className="form-codigo"
                  options={options}
                  filterOption={true}
                  placeholder="Busca tu pais"
                  style={{ width: 300 }}
                />
                <Input
                  type="tel"
                  maxLength="10"
                  placeholder="Celular Ejm. +51 987654321"
                  onChange={handleChange}
                  name="movil"
                />
              </div>
              <Input.TextArea
                onChange={handleChange}
                name="descripcion"
                placeholder="Describenos tu plan de viaje: fecha, tipo de alojamiento, atractivos de interés, etc."
                style={{ resize: "none", height: 150 }}
              />
              {/* <div className="recaptcha">
              <ReCAPTCHA />
            </div> */}
              <div className="submit-content" style={{ marginTop: 20 }}>
                <Button onClick={submit} className="btn-submit" type="primary">
                  Enviar
                </Button>
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
                <p>Escuchamos sus preferencias</p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <img src="/explora-icon.webp" height="32" />
                <p>Recomendamos opciones para su viaje</p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <img src="/explora-icon.webp" height="32" />
                <p>Personalizamos su itinerario</p>
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
                <a
                  href="https://www.instagram.com/explora4256/"
                  target="_blank"
                >
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
      </div>
    </section>
  );
}
