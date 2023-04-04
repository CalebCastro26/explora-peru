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
} from "@ant-design/icons";
import { FloatButton } from "antd";
import PorquePeru from "../Pages/PorquePeru";
//import Destinos from "../Pages/Destinos";
import Page404 from "../Pages/Page404";
import MejoresDestinos from "../Pages/MejoresDestinos";

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="btn-flotante medida flotante-contacto">
        <UserOutlined style={{ color: "white", fontSize: 22 }} />
        <p>VIAJE A LA MEDIDA</p>
      </div>
      <div className="btn-flotante grupo flotante-contacto">
        <TeamOutlined style={{ color: "white", fontSize: 22 }} />
        <p>VIAJE EN GRUPO</p>
      </div>
      <Routes>
        <Route path="/*" element={<Page404 />} />
        <Route path="/contacto" element={<Contacto />} />
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
        icon={<ArrowDownOutlined />}
      />
      <FloatButton
        className="float-phone"
        onClick={() => {
          window.scroll({
            top: 750,
            behavior: "smooth",
          });
        }}
        icon={<ArrowDownOutlined />}
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
