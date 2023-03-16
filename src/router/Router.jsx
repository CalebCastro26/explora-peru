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

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="btn-flotante medida">
        <UserOutlined style={{ color: "white", fontSize: 22 }} />
        <p>VIAJE A LA MEDIDA</p>
      </div>
      <div className="btn-flotante grupo">
        <TeamOutlined style={{ color: "white", fontSize: 22 }} />
        <p>VIAJE EN GRUPO</p>
      </div>
      <Routes>
        <Route path="/contacto" element={<Contacto />} />
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
      <div className="btn-flotante wapp">
        <WhatsAppOutlined style={{ color: "white", fontSize: 22 }} />
      </div>
      <Footer />
    </BrowserRouter>
  );
}
