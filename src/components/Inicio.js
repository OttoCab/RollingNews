import React from "react";
import { Card, Button, Container, Carousel, CardDeck } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import DefectoImg from "./assets/img/defecto800x600.jpg";
// import Defectowide from "./assets/img/defecto-wide800x394.jpg";
// import DefectoMini from "./assets/img/defecto281x160.jpg";
import covidimg from "./assets/img/covid-icon.svg";
import adBanner1 from "./assets/img/adv-banner1.jpg";
import adBanner2 from "./assets/img/adv-banner2.gif";
// import adBanner3 from "./assets/img/adv-banner3.jpg";
import adBanner4 from "./assets/img/adv-banner4.gif";
import "./assets/css/inicio.css";
// import error404 from "./Error404";
// import { useParams } from "react-router-dom";
import ItemNoticiaInicio from "./ADM/ItemNoticiaInicio";
// import ItemNoticia from './ADM/ItemNoticia';
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
                <ItemNoticiaDestacada
                  noticiasDestacadas={props.noticiasDestacadas}
                ></ItemNoticiaDestacada>

          {/* {props.noticiasDestacadas.map((detalleCat, indice) => (
                <ItemNoticiaDestacada
                  key={indice}
                  dato={detalleCat}
                  Categorias={props.Categorias}
                ></ItemNoticiaDestacada>
              ))} */}

          {/* <Carousel.Item className="size-adjust-car">
              <span className="position-absolute bg-warning mt-4 px-5 py-1 tag">
                Destacado
              </span>
              <img
                className="d-block w-100"
                src="https://img.lagaceta.com.ar/fotos/notas/2021/06/04/argentina-se-suma-produccion-sputnik-v-896799-231540.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item> */}
          {/* <Carousel.Item className="size-adjust-car">
              <span className="position-absolute bg-warning mt-4 px-5 py-1 tag">
                Destacado
              </span>
              <img
                className="d-block w-100"
              
                src="https://img.lagaceta.com.ar/fotos/notas/2021/05/30/avance-llegan-215-millones-vacunas-astrazeneca-pais-superara-175-millones-dosis-895957-191703.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="size-adjust-car">
              <span className="position-absolute bg-warning mt-4 px-5 py-1 tag">
                Destacado
              </span>
              <img
                className="d-block w-100"
                src="https://img.lagaceta.com.ar/fotos/notas/2021/05/30/avance-llegan-215-millones-vacunas-astrazeneca-pais-superara-175-millones-dosis-895957-191703.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item> */}
          {/* </Carousel> */}
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
        <section className="row">
          <div className="col-lg-9 col-sm-12 texts-small">
            <Card className="shadow containerAnimation col-sm-12 my-3">
              <h4 className="font-weight-bold mt-2">
                <i className="titles">Actualidad</i>
              </h4>
              <CardDeck className="container my-3 row">
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
              </CardDeck>
            </Card>
            <Card className="shadow my-3 containerAnimation">
              <h4 className="font-weight-bold ml-2 mt-2">
                <i className="titles">Salud</i>
              </h4>
              <CardDeck className="container my-3 row">
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
              </CardDeck>
            </Card>
            <Card className="shadow containerAnimation">
              <h4 className="font-weight-bold ml-2 mt-2">
                <i className="titles">Economía</i>
              </h4>
              <CardDeck className="container my-3 row">
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
              </CardDeck>
            </Card>
            <NavLink to="*">
              <div className="my-3">
                <Card.Img src={adBanner2}></Card.Img>
              </div>
            </NavLink>
            <Card className="shadow containerAnimation mt-3">
              <h4 className="font-weight-bold ml-2 mt-2">
                <i className="titles">Política</i>
              </h4>
              <CardDeck className="container my-3 row">
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
              </CardDeck>
            </Card>
            <Card className="shadow containerAnimation mt-3">
              <h4 className="font-weight-bold ml-2 mt-2">
                <i className="titles">Deportes</i>
              </h4>
              <CardDeck className="container my-3 row">
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
              </CardDeck>
            </Card>
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