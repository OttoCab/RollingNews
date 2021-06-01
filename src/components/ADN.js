import React, { Fragment } from "react";
import nosotros4 from "./assets/img/nosotros4.jpg";
import nosotros3 from "./assets/img/nosotros3.jpg";
import flor from "./assets/img/authors/flor.jpg";
import ema from "./assets/img/authors/ema.jpg";
import { Carousel, Container, Card } from "react-bootstrap";
import "./assets/css/admin.css";
import "./assets/css/adn.css";
const ADN = () => {
  return (
    <Fragment>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={nosotros4} alt="First slide" />
          <Carousel.Caption>
            <h2 className="display-">
              Utilizamos las últimas tecnologías en el campo digital y cognitivo
              para transformar las organizaciones en todos los aspectos.
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={nosotros3} alt="Second slide" />
        </Carousel.Item>
      </Carousel>
      <Container>

        <h3 className="fuente my-4">
          Seis amigos reunidos en un bar. Así comenzó nuestra historia. Ellos
          compartían un sueño común que seguimos desarrollando: convertirnos en
          la mejor compañía que ofrece informacion de la actualidad Argentina.
          Estamos ubicados en San Miguel de Tucuman en calle 9 de julio 167.
        </h3>
        <h2 className="text-center display-2">¿Quienes Somos?</h2>
    <section className="row">

          <Card className="bordes col-sm-12 col-md-6 col-lg-4">
            <Card.Img className="fotos" src={flor} />
            <Card.Body>
              <Card.Text>
              Mi Nombre es Florencia Norry, soy estudiante de Ingenieria en
              Sistemas proxima a recibirme de Ananlista en Sistemas y tambien
              estudio en Rolling News, soy amante de los gatos y mi hobbie es
              Jugar al voley.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="bordes col-sm-12 col-md-6 col-lg-4">
            <Card.Img className="fotos" src={ema} />
            <Card.Body>
              <Card.Text>
              Mi Nombre es Florencia Norry, soy estudiante de Ingenieria en
              Sistemas proxima a recibirme de Ananlista en Sistemas y tambien
              estudio en Rolling News, soy amante de los gatos y mi hobbie es
              Jugar al voley.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="bordes col-sm-12 col-md-6 col-lg-4">
            <Card.Img className="fotos" src={ema} />
            <Card.Body>
              <Card.Text>
              Mi Nombre es Florencia Norry, soy estudiante de Ingenieria en
              Sistemas proxima a recibirme de Ananlista en Sistemas y tambien
              estudio en Rolling News, soy amante de los gatos y mi hobbie es
              Jugar al voley.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="bordes col-sm-12 col-md-6 col-lg-4">
            <Card.Img className="fotos" src={ema} />
            <Card.Body>
              <Card.Text>
              Mi Nombre es Florencia Norry, soy estudiante de Ingenieria en
              Sistemas proxima a recibirme de Ananlista en Sistemas y tambien
              estudio en Rolling News, soy amante de los gatos y mi hobbie es
              Jugar al voley.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="bordes col-sm-12 col-md-6 col-lg-4">
            <Card.Img className="fotos" src={ema} />
            <Card.Body>
              <Card.Text>
              Mi Nombre es Florencia Norry, soy estudiante de Ingenieria en
              Sistemas proxima a recibirme de Ananlista en Sistemas y tambien
              estudio en Rolling News, soy amante de los gatos y mi hobbie es
              Jugar al voley.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="bordes col-sm-12 col-md-6 col-lg-4">
            <Card.Img className="fotos" src={ema} />
            <Card.Body>
              <Card.Text>
              Mi Nombre es Florencia Norry, soy estudiante de Ingenieria en
              Sistemas proxima a recibirme de Ananlista en Sistemas y tambien
              estudio en Rolling News, soy amante de los gatos y mi hobbie es
              Jugar al voley.
              </Card.Text>
            </Card.Body>
          </Card>
        </section>

      </Container>
    </Fragment>
  );
};
export default ADN;
