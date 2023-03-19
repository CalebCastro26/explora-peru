import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p className="footer-title">Explora Perú, Travel & Taste</p>
        <div className="footer-left-content">
          <p>RUC: 20608802267 </p>
          <p>Jr. Nicolás de Piérola 117. Int 807. San Miguel 15087.</p>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <ion-icon name="call" />
            <p>+51 960396110</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <ion-icon name="mail" />
            <p>info@exploraperutravel.com</p>
          </div>
        </div>
      </div>
      <div className="footer-middle">
        <ul>
          <li>
            <a href="">Políticas de Prestación de Servicios</a>
          </li>
          <li>
            <a href="">Términos de uso de este Sitio Web</a>
          </li>
          <li>
            <a href="">Políticas de Privacidad</a>
          </li>
          <li>
            <a href="">Marco Legal ESSNA</a>
          </li>
        </ul>
      </div>
      <div className="footer-right">
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
    </footer>
  );
}
