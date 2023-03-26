import "./Nosotros.css";
import { Card, Tabs } from "antd";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Nosotros() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scroll({ top: 0 });
  }, []);

  const { Meta } = Card;
  const tab1 = (
    <div className="tab">
      <p>{t("nosotros.tab.1")}</p>
      <img src="/destinos/trek-cajamarca-trujillo.jpg" alt="" />
      <img src="/destinos/trek-cajamarca-trujillo.jpg" alt="" />
    </div>
  );
  const tab2 = (
    <div className="tab">
      <p>{t("nosotros.tab.2")}</p>
      <img src="/destinos/trek-cajamarca-trujillo.jpg" alt="" />
      <img src="/destinos/trek-cajamarca-trujillo.jpg" alt="" />
    </div>
  );
  const tab3 = (
    <div className="tab">
      <p>{t("nosotros.tab.3")}</p>
      <img src="/destinos/trek-cajamarca-trujillo.jpg" alt="" />
      <img src="/destinos/trek-cajamarca-trujillo.jpg" alt="" />
    </div>
  );
  const tab4 = (
    <div className="tab">
      <p>{t("nosotros.tab.4")}</p>
      <img src="/destinos/trek-cajamarca-trujillo.jpg" alt="" />
      <img src="/destinos/trek-cajamarca-trujillo.jpg" alt="" />
    </div>
  );
  const tab5 = (
    <div className="tab">
      <p>{t("nosotros.tab.5")}</p>
      <img src="/destinos/trek-cajamarca-trujillo.jpg" alt="" />
      <img src="/destinos/trek-cajamarca-trujillo.jpg" alt="" />
    </div>
  );

  const items = [
    {
      key: "1",
      label: `Diseño Personalizado`,
      children: tab1,
    },
    {
      key: "2",
      label: `Servicio`,
      children: tab2,
    },
    {
      key: "3",
      label: `Nuestros Guias`,
      children: tab3,
    },
    {
      key: "4",
      label: `Inmersión Cultural y gastronomica`,
      children: tab4,
    },
    {
      key: "5",
      label: `Inclusión y respeto`,
      children: tab5,
    },
  ];

  return (
    <section className="nosotros">
      <div className="nosotros-img-header">
        <img src="/destinos/trek-cajamarca-trujillo.jpg" alt="" />
      </div>
      <h1>EXPLORA PERÚ, TRAVEL & TASTE</h1>
      <p>{t("nosotros")}</p>
      <h3>Por qué Explora Perú</h3>
      <div className="tab-container">
        <Tabs
          tabPosition="top"
          type="card"
          items={items}
          defaultActiveKey="1"
        />
      </div>
      <h3>EXPERTOS EN PERÚ</h3>
      <div className="expertos-container">
        <Card
          style={{ width: 250 }}
          cover={
            <img
              className="img-expertos"
              alt="victor"
              src="/destinos/trek-cajamarca-trujillo.jpg"
            />
          }
        >
          <Meta
            title="Victor Minaya"
            description={
              <p className="expertos-card-text">
                “He sido agente de viajes desde los 19 años, soy Guía Oficial de
                turismo y chef de profesión. Apasionado por la cocina y por los
                productos andinos nativos. Especializado en la iconografía
                prehispánica y religiosa. Con amplio conocimiento del Perú y sus
                atractivos turísticos. Experto en cotizaciones y operaciones de
                los programas de Explora Perú Travel. Tengo dominio del idioma
                francés y un gran sentido del humor”. <br /> <br /> Mi frase
                favorita es: “Comer es una necesidad y cocinar es un arte”
              </p>
            }
          />
        </Card>
        <Card
          style={{ width: 250 }}
          cover={
            <img
              className="img-expertos"
              alt="magalí"
              src="/destinos/trek-cajamarca-trujillo.jpg"
            />
          }
        >
          <Meta
            title="Magalí Malca"
            description={
              <p className="expertos-card-text">
                “Soy de Cajamarca, una ciudad llena de lindos paisajes al norte
                del Perú. Soy Licenciada en Turismo y Hotelería, también Guía
                Oficial de Turismo y tengo un Diplomado en Historia del Arte. Lo
                que me motivó a estudiar turismo es la riqueza histórica y
                arqueológica de mi país. Tengo dominio del idioma francés e
                inglés. He viajado por todo el Perú y hoy en Explora Perú Travel
                deseo compartir mi experiencia”. <br /> <br /> Mi frase favorita
                es: “El mundo es un libro, quienes no viajan leen sólo una
                página”
              </p>
            }
          />
        </Card>
        <Card
          style={{ width: 250 }}
          cover={
            <img
              alt="rodrigo"
              src="/destinos/trek-cajamarca-trujillo.jpg"
              className="img-expertos"
            />
          }
        >
          <Meta
            title="Rodrigo Zanabria"
            description={
              <p className="expertos-card-text">
                “Soy de Lima, una ciudad llena de hermosos contrastes. Tengo más
                de veinte años de experiencia trabajando en atención al cliente,
                en cruceros y restaurantes. Estudié turismo porque me gusta
                conocer gente de diferentes culturas. Hablo el idioma inglés y
                portugues. Me apasiona la fusión cultural que la gastronomía
                peruana refleja. A través de Explora Perú Travel deseo mostrar
                al viajero lo maravilloso que es mi país”. <br />
                <br /> Mi frase favorita es: “Piensa, cree, sueña…. y atrévete a
                viajar”
              </p>
            }
          />
        </Card>
        <Card
          style={{ width: 250 }}
          cover={
            <img
              className="img-expertos"
              alt="erika"
              src="/destinos/trek-cajamarca-trujillo.jpg"
            />
          }
        >
          <Meta
            title="Erika Aguirre"
            description={
              <p className="expertos-card-text">
                "Nací y crecí en Lima. Viví a pocas cuadras del centro
                histórico. Empecé a trabajar en turismo a los 17 años y soy
                bachiller en Administración Turística y Hotelera. Me encanta la
                observación de aves, historia del arte y la fotografía. Tengo
                más de 20 años en el sector turístico, hablo inglés e italiano.
                Amo mi trabajo y me siento bendecida, porque Explora Perú Travel
                me da la oportunidad de hacer realidad los sueños de los
                viajeros.
                <br />
                <br />
                Mi frase favorita es: ”El hoy es un regalo, por eso se le llama
                presente“{" "}
              </p>
            }
          />
        </Card>
      </div>
    </section>
  );
}
