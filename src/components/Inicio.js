import React from "react";
import { Card, Button, Container, Carousel, ProgressBar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import covidimg from "./assets/img/covid-icon.svg";
import adBanner1 from "./assets/img/adv-banner1.jpg";
import adBanner2 from "./assets/img/adv-banner2.gif";
import adBanner4 from "./assets/img/adv-banner4.gif";
import "./assets/css/inicio.css";
import ItemNoticiaInicio from "./ADM/ItemNoticiaInicio";
import TiempoMoneda from "./ADM/TiempoMoneda";
import ItemNoticiaDestacada from "../components/ADM/ItemNoticiaDestacada";

const Inicio = (props) => {
  return (
    <>
      <Container fluid className="containerCotizador pt-2">
        <TiempoMoneda></TiempoMoneda>
      </Container>
      <section>
        <Container className="my-5 base-container">
        <h1 className="titles">Ultima hora...</h1>
          {/* <Carousel fade> */}
                <ItemNoticiaDestacada noticiasDestacadas={props.noticiasDestacadas}></ItemNoticiaDestacada>
        </Container>
      </section>
      <Container className="my-5 base-container">
        <hr />
        <NavLink className="my-3" to="*">
          <Card.Img src={adBanner1}></Card.Img>
        </NavLink>
        <section className="mt-5">
          <div>
            {/*Banner con consejos sobre Covid*/}
            <Card className="shadow d-flex bg-dark-gray">
              <Card.Body className="row align-items-center">
                <div className="col-3 text-center">
                  <img src={covidimg}></img>
                </div>
                <div className="col-8">
                  <h2 className="font-weight-bolder mb-4">¡Cuidate!</h2>
                  <hr />
                  <Carousel fade controls={false}>
                    <Carousel.Item interval={9000}>
                      <Card className="hidingCard">
                        <Card.Body>
                          <p className="advice">
                            <b>
                              Utiliza cubrebocas, evitarás contagiarte tú, a tus
                              seres queridos y a las personas que te rodean
                            </b>
                          </p>
                        </Card.Body>
                      </Card>
                    </Carousel.Item>
                    <Carousel.Item interval={9000}>
                      <Card className="hidingCard">
                        <Card.Body>
                          <p className="advice">
                            <b>
                              Lávate las manos. Una completa higiene de las
                              manos reduce en gran medida el riesgo de contagio
                            </b>
                          </p>
                        </Card.Body>
                      </Card>
                    </Carousel.Item>
                    <Carousel.Item interval={9000}>
                      <Card className="hidingCard">
                        <Card.Body>
                          <p className="advice">
                            <b>
                              Mantén las distancias. Evita espacios concurridos,
                              procura mantener al menos 1 metro de distancia de
                              otras personas
                            </b>
                          </p>
                        </Card.Body>
                      </Card>
                    </Carousel.Item>
                    <Carousel.Item interval={9000}>
                      <Card className="hidingCard">
                        <Card.Body>
                          <p className="advice">
                            <b>
                              Entre todos podemos hacer que esta pandemia
                              termine. ¡Cuidate! no te conviertas en un número
                              más en el marcador
                            </b>
                          </p>
                        </Card.Body>
                      </Card>
                    </Carousel.Item>
                  </Carousel>
                </div>
              </Card.Body>
            </Card>
          </div>
        </section>
        <hr className="my-5" />
        {/**************** Categorías de la página de inicio ********************/}
        <section className="row">
          <div className="col-lg-9 col-sm-12">
              <h4 className="font-weight-bold mt-2 titles text-success">
                Actualidad
              </h4>
              <ProgressBar className="title-line" variant="success" now={10}/>
            <div className="col-sm-12 my-3">
              <div className="container my-3 row">
                {props.noticias
                  .filter((cat) => {
                    if (cat.idCategoriaNoticia === "60b7d6acfeb96a24dce5c898") {
                      return cat;
                    }
                  })
                  .map((detalleCat, indice) => (
                    <ItemNoticiaInicio
                      key={indice}
                      dato={detalleCat}
                      Categorias={props.Categorias}
                    ></ItemNoticiaInicio>
                  ))}
              </div>
            </div>
            <hr/>
            <div className="my-3">
              <h4 className="font-weight-bold mt-2 text-danger titles">
                Salud
              </h4>
              <ProgressBar className="title-line" variant="danger" now={10}/>
              <div className="container my-3 row">
                {props.noticias
                  .filter((cat) => {
                    if (cat.idCategoriaNoticia === "6") {
                      return cat;
                    }
                  })
                  .map((detalleCat, indice) => (
                    <ItemNoticiaInicio
                      key={indice}
                      dato={detalleCat}
                      Categorias={props.Categorias}
                    ></ItemNoticiaInicio>
                  ))}
              </div>
            </div>
            <hr/>
            <div>
              <h4 className="font-weight-bold text-warning mt-2 titles">
                Economía
              </h4>
              <ProgressBar className="title-line" variant="warning" now={10}/>
              <div className="container my-3 row">
                {props.noticias
                  .filter((cat) => {
                    if (cat.idCategoriaNoticia === "5") {
                      return cat;
                    }
                  })
                  .map((detalleCat, indice) => (
                    <ItemNoticiaInicio
                      key={indice}
                      dato={detalleCat}
                      Categorias={props.Categorias}
                    ></ItemNoticiaInicio>
                  ))}
              </div>
            </div>
            <hr/>
            <NavLink to="*">
              <div className="my-3">
                <Card.Img src={adBanner2}></Card.Img>
              </div>
            </NavLink>
            <div className="mt-3">
              <h4 className="font-weight-bold text-info mt-2 titles">
                Política
              </h4>
              <ProgressBar className="title-line" variant="info" now={10}/>
              <div className="container my-3 row">
                {props.noticias
                  .filter((cat) => {
                    if (cat.idCategoriaNoticia === "7") {
                      return cat;
                    }
                  })
                  .map((detalleCat, indice) => (
                    <ItemNoticiaInicio
                      key={indice}
                      dato={detalleCat}
                      Categorias={props.Categorias}
                    ></ItemNoticiaInicio>
                  ))}
              </div>
            </div>
            <hr/>
            <div className="mt-3">
              <h4 className="font-weight-bold text-primary mt-2 titles">
                Deportes
              </h4>
              <ProgressBar className="title-line" variant="primary" now={10}/>
              <div className="container my-3 row">
                {props.noticias
                  .filter((cat) => {
                    if (cat.idCategoriaNoticia === "60b58135d63ea4368c0cf559") {
                      return cat;
                    }
                  })
                  .map((detalleCat, indice) => (
                    <ItemNoticiaInicio
                      key={indice}
                      dato={detalleCat}
                      Categorias={props.Categorias}
                    ></ItemNoticiaInicio>
                  ))}
              </div>
            </div>
            <NavLink to="/Categorias" className="text-decoration-none">
              <Button className="mt-4 btn-grad" variant="info" block>
                <h5>Ver todas las categorías</h5>
              </Button>
            </NavLink>
          </div>
          <NavLink className="col-lg-3 non-display" to="*">
            <img className="w-100" src={adBanner4}></img>
          </NavLink>
        </section>
      </Container>
    </>
  );
};

export default Inicio;