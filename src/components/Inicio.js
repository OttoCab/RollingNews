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
import actualidad from "../components/assets/img/actualidad.jpg";
// import politica from "../components/assets/img/politica.jpg";
import economia from "../components/assets/img/economia.jpg";
import TiempoMoneda from "./ADM/TiempoMoneda";
<<<<<<< HEAD
=======
import ItemNoticiaDestacada from "../components/ADM/ItemNoticiaDestacada";
>>>>>>> dev

const Inicio = (props) => {
  return (
    <>
<<<<<<< HEAD
      <Container fluid className="containerCotizador">
        <TiempoMoneda></TiempoMoneda>
      </Container>
=======
      <Container fluid className="containerCotizador pt-2">
        <TiempoMoneda></TiempoMoneda>
      </Container>
      <section>
        <Container className="my-5 base-container">
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
>>>>>>> dev
      <Container className="my-5 base-container">
        <h1 className="titles">Ultima hora...</h1>
        <section className="row texts-small scale-texts mb-5">
          <div className="col-lg-7 col-sm-12">
<<<<<<< HEAD
            <Card>
              {props.noticiasDestacadas.map((detalleCat, indice) => (
                  <ItemNoticiaInicio
                    key={indice}
                    dato={detalleCat}
                    Categorias={props.Categorias}
                  ></ItemNoticiaInicio>
                ))}

              {/*La imagen de la card principal debe tener una resolución exacta de 800 x 600, si la imagen
                        tiene otra resolución, las cards pueden mostrarse de manera inadecuada*/}
              {/* <Card.Img src={politica} alt="No se encontró imagen"></Card.Img> */}
              {/* <div className="card-img-overlay d-flex align-items-end">
=======
            <Card className="customCard-main bg-dark text-light shadow">
              {/* {props.noticiasDestacadas.map((detalleCat, indice) => (
                <ItemNoticiaInicio
                  key={indice}
                  dato={detalleCat}
                  Categorias={props.Categorias}
                ></ItemNoticiaInicio>
              ))} */}
              {/*La imagen de la card principal debe tener una resolución exacta de 800 x 600, si la imagen
                        tiene otra resolución, las cards pueden mostrarse de manera inadecuada*/}
              <Card.Img src={politica} alt="No se encontró imagen"></Card.Img>
              <div className="card-img-overlay d-flex align-items-end">
>>>>>>> dev
                <div className="flex-column cardBackground px-3 py-2">
                  <Card.Title>{politica}</Card.Title>
                  <Card.Text className="card-text">
                    Se podrá circular libremente durante el día sin permiso.
                    Comercios no esenciales, bares y restaurantes podrán atender
                    al público de acuerdo a los protocolos vigentes en cada
                    municipio. El jefe de Gabinete de la provincia de Buenos
                    Aires, Carlos Bianco, informó que no habrá cambios con
                    respecto a la hoja de ruta prevista en el DNU presidencial
                    que impuso el último confinamiento estricto.
                  </Card.Text>
                  <Button variant="outline-danger" className="customButton">
                    Ver más...
                  </Button>
                </div>
<<<<<<< HEAD
              </div> */}
=======
              </div>
>>>>>>> dev
            </Card>
          </div>
          <div className="col-lg-5 col-sm-12">
            <Card className="customCard-sub text-light bg-dark my-sm-5 my-lg-0 my-3 shadow">
              {/*La imagen de las cards secundarias deben tener una resolución exacta de 800 x 394, si la imagen
                        tiene otra resolución, las cards pueden mostrarse de manera inadecuada*/}
              <Card.Img src={actualidad} alt="No se encontró imagen"></Card.Img>
              <div className="card-img-overlay d-flex align-items-end">
                <div className="cardBackground px-3 pt-2">
                  <Card.Title>Covid-19</Card.Title>
                  <Card.Text className="card-text">
                    A principios de mayo, el país superó los 3 millones de
                    contagiados: actualmente la cifra llega a 3.663.215. Se
                    produjeron 76.135 muertes por COVID-19. El número de
                    recuperados llega a 3.219.474, mientras que los casos
                    activos pasaron a ser 367.606.
                  </Card.Text>
                  <Button variant="outline-danger" className="customButton">
                    Ver más...
                  </Button>
                </div>
              </div>
            </Card>
            <Card className="customCard-sub text-light bg-dark my-sm-5 my-lg-0 mt-lg-4 shadow">
              <Card.Img src={economia} alt="No se encontró imagen"></Card.Img>
              <div className="card-img-overlay d-flex align-items-end">
                <div className="cardBackground cardBackground px-3 py-2">
                  <Card.Title>Cepo a las exportaciones de carne</Card.Title>
                  <Card.Text className="card-text">
                    La Mesa de Enlace endurece su reclamo y extiende el paro
                    hasta el miércoles próximoLos dirigentes que representan a
                    los productores no consiguieron hasta el momento que el
                    Gobierno deje sin efecto las restricciones para exportar.
                  </Card.Text>
                  <Button variant="outline-danger" className="customButton">
                    Ver más...
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
        <hr />
        <NavLink className="my-3" to="*">
          <Card.Img src={adBanner1}></Card.Img>
        </NavLink>
        <section className="mt-5">
          <div>
            {/*Banner con información sobre el avance del Covid*/}
            <Card className="shadow bg-dark-gray">
              <Card.Body className="row justify-content-between flex-sm-wrap covidBox">
                <div className="col-lg-2 col-md-12 pl-3 pt-3 text-center">
                  <p className="texts-large">
                    <b>Coronavirus en Tucumán</b>
                  </p>
                  <p className="texts-small text-secondary">
                    Actualizado el: 19/05/2021
                  </p>
                </div>
                <div className="col-lg-2 col-md-12 text-center">
                  <p className="text-danger font-weight-bold">Contagios</p>
                  <p className="bolder-numbers">115.267</p>
                  <p className="text-secondary texts-small font-weight-bolder">
                    878 nuevos
                  </p>
                </div>
                <div className="col-lg-2 col-md-12 text-center">
                  <p className="text-danger font-weight-bold">Vacunados</p>
                  <p className="bolder-numbers">267.826</p>
                  <p className="text-secondary texts-small font-weight-bolder">
                    7.497 nuevos
                  </p>
                </div>
                <div className="col-lg-2 col-md-12 text-center">
                  <p className="text-danger font-weight-bold">Recuperados</p>
                  <p className="bolder-numbers">104.307</p>
                  <p className="text-secondary texts-small font-weight-bolder">
                    533 nuevos
                  </p>
                </div>
                <div className="col-lg-2 col-md-12 text-center">
                  <p className="text-danger font-weight-bold">Fallecidos</p>
                  <p className="bolder-numbers">1.946</p>
                  <p className="text-secondary texts-small font-weight-bolder">
                    9 nuevos
                  </p>
                </div>
              </Card.Body>
            </Card>
            {/*Banner con consejos sobre Covid con animación de transición*/}
            <Card className="shadow d-flex bg-dark-gray">
              <Card.Body className="row align-items-center">
                <div className="col-3 text-center">
<<<<<<< HEAD
                  <img src={covidimg} className="covidIcon"></img>
=======
                  <img src={covidimg}></img>
>>>>>>> dev
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
<<<<<<< HEAD
                    if (cat.idCategoriaNoticia === "60bd5558f7e1e80decc9b981") {
=======
                    if (cat.idCategoriaNoticia === "60b58135d63ea4368c0cf559") {
>>>>>>> dev
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
<<<<<<< HEAD
            <Button className="mt-4" variant="outline-danger btn-grad" block>
              <h5>Ver todas las categorías</h5>
            </Button>
=======
            <NavLink to="/Categorias" className="text-decoration-none">
              <Button className="mt-4 btn-grad" variant="info" block>
                <h5>Ver todas las categorías</h5>
              </Button>
            </NavLink>
>>>>>>> dev
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
