import React, { Fragment } from "react";
import nosotros4 from "./assets/img/nosotros4.jpg";
import nosotros3 from "./assets/img/nosotros3.jpg";
import flor from "./assets/img/authors/flor.jpg";
import ema from "./assets/img/authors/ema.jpg";
import { Carousel, Container } from "react-bootstrap";
import './assets/css/admin.css';
import './assets/css/adn.css';
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
          Seis amigos reunidos en un bar. Así comenzó nuestra historia. 
          Ellos compartían un sueño común que seguimos desarrollando:
          convertirnos en la mejor compañía que ofrece informacion de la actualidad Argentina.
          Estamos ubicados en San Miguel de Tucuman en calle 9 de julio 167. 
        </h3>
        <h2 className="text-center display-2">¿Quienes Somos?</h2>
        <section className="row">
            <div className="col col-sm-12 col-md-4 fotos">
                <img src={flor} alt="" className="fotos"/>
            </div>
            <div className="col col-sm-12 col-md-4">
            <img src={ema} alt="" className="fotos"/>
            </div>
            <div className="col col-sm-12 col-md-4">imagen</div>
            <div className="col col-sm-12 col-md-4">imagen</div>
            <div className="col col-sm-12 col-md-4">imagen</div>
            <div className="col col-sm-12 col-md-4">imagen</div>
        </section>
      </Container>
    </Fragment>
  );
};
export default ADN;