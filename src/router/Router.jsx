import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "../Pages/Index";
import Navbar from "../Components/Navbar";
import Nosotros from "../Pages/Nosotros";
import Footer from "../Components/Footer";
import Contacto from "../Pages/Contacto";
import {
  ArrowDownOutlined,
  TeamOutlined,
  UserOutlined,
  WhatsAppOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";
import { FloatButton } from "antd";
import PorquePeru from "../Pages/PorquePeru";
import Page404 from "../Pages/Page404";
import MejoresDestinos from "../Pages/MejoresDestinos";
import FloatingButton from "../Components/FloatingButton";
import RutasTrekking from "../Pages/RutasTrekking";
import { useEffect, useState } from "react";
import Highlights from "../Pages/Highlights";

export default function Router() {
  const [flecha, setFlecha] = useState(false);

  useEffect(() => {
    function handleFlecha() {
      if (window.pageYOffset > 750) {
        setFlecha(true);
      } else {
        setFlecha(false);
      }
    }

    window.addEventListener("scroll", handleFlecha);
    return () => {
      window.removeEventListener("scroll", handleFlecha);
    };
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <FloatingButton
        texto="VIAJE A LA MEDIDA"
        Icon={UserOutlined}
        clase="medida"
      />
      <FloatingButton
        texto="VIAJE EN GRUPO"
        Icon={TeamOutlined}
        clase="grupo"
      />
      <Routes>
        <Route path="/*" element={<Page404 />} />
        <Route path="/contacto" element={<Contacto />} />
        {/* Highlights */}
        <Route path="/highlights/:highlight" element={<Highlights />} />
        {/* Programas */}
        {/* Destinos */}
        <Route
          path="/destinos/rutastrekking/:ruta"
          element={<RutasTrekking />}
        />
        <Route
          path="/destinos/mejoresdestinos/:destino"
          element={<MejoresDestinos />}
        />
        <Route path="/destinos/porqueperu" element={<PorquePeru />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route index element={<Index />} />
      </Routes>
      <FloatButton
        className="float-fulls"
        onClick={() => {
          window.scroll({
            top: 850,
            behavior: "smooth",
          });
        }}
        icon={flecha ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
      />
      <FloatButton
        className="float-phone"
        onClick={() => {
          window.scroll({
            top: 750,
            behavior: "smooth",
          });
        }}
        icon={flecha ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
      />
      <a
        href="https://api.whatsapp.com/send?phone=51960396110&text=Hola,%20vi%20un%20anuncio%20en%20Facebook%20y%20quisiera%20conocer%20más%20sobre%20tus%20productos"
        target="_blank"
      >
        <div className="btn-flotante wapp">
          <WhatsAppOutlined style={{ color: "white", fontSize: 22 }} />
        </div>
      </a>
      <Footer />
    </BrowserRouter>
  );
}
