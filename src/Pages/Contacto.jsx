import "./Contacto.css";

export default function Contacto() {
  return (
    <section className="contacto">
      <h1>Contactanos</h1>
      <div className="contactos-content">
        <div className="contactos-content-left">
          <form>
            <label>Nombres</label>
            <input />
            <label>Apellidos</label>
            <input />
            <label>Correo</label>
            <input />
            <label>Telefono</label>
            <input />
            <label>Pais</label>
            <input />
            <label>Plan de viaje</label>
            <input />
            <button>Enviar</button>
          </form>
        </div>
        <div className="contactos-content-right">
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <ion-icon name="call" />
            <p>+51 960396110</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <ion-icon name="mail" />
            <p>info@exploraperutravel.com</p>
          </div>
          <p>Horario de Oficina</p>
          <p>Lunes a Viernes 9 a.m. a 5 p.m. (-5hrs GMT)</p>
          <div className="inner">
            <span>
              <a href="http://www.facebook.com">
                <ion-icon name="logo-facebook" />
              </a>
            </span>
            <span className="content">|</span>
            <span>
              <a href="https://www.instagram.com/">
                <ion-icon name="logo-instagram" />
              </a>
            </span>
            <span className="content">|</span>
            <span>
              <a href="https://www.youtube.com/">
                <ion-icon name="logo-youtube" />
              </a>
            </span>
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
        </div>
      </div>
    </section>
  );
}
