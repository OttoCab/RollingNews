import React from 'react';
import { Card, Button, Container, Carousel, CardDeck } from 'react-bootstrap';
import DefectoImg from './assets/img/defecto800x600.jpg';
import Defectowide from './assets/img/defecto-wide800x394.jpg';
import DefectoMini from './assets/img/defecto281x160.jpg';
import covidimg from './assets/img/covid-icon.svg';
import adBanner1 from './assets/img/adv-banner1.jpg';
import adBanner2 from './assets/img/adv-banner2.gif';
import adBanner3 from './assets/img/adv-banner3.jpg';
import adBanner4 from './assets/img/adv-banner4.gif';
import './assets/css/inicio.css';
import error404 from './Error404';


const Inicio = () => {
    return (
        <Container className="my-5 base-container">
            <h1>Ultima hora...</h1>
            <section className="row texts-small scale-texts mb-5">
                <div className="col-lg-7 col-sm-12">
                    <Card className="card shadow">
                        {/*La imagen de la card principal debe tener una resolución exacta de 800 x 600, si la imagen
                        tiene otra resolución, las cards pueden mostrarse de manera inadecuada*/}
                        <Card.Img src={DefectoImg} alt="No se encontró imagen"></Card.Img>
                        <div className="card-img-overlay d-flex align-items-end">
                            <div className="flex-column">
                            <Card.Title>Título de la noticia</Card.Title>
                            <Card.Text className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique accusamus illum quo saepe illo voluptates nobis quae sed. Pariatur quidem voluptas possimus cupiditate autem ut dolorem officiis animi illum atque maiores, ducimus vel veritatis voluptate perferendis asperiores omnis nemo commodi soluta obcaecati modi accusamus quos saepe exercitationem. Soluta, nobis voluptate.</Card.Text>
                            <Button variant="outline-danger" className="customButton">Ver más...</Button>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="col-lg-5 col-sm-12">
                    <div className="card text-dark my-sm-5 my-lg-0 my-3 shadow">
                        {/*La imagen de las cards secundarias deben tener una resolución exacta de 800 x 394, si la imagen
                        tiene otra resolución, las cards pueden mostrarse de manera inadecuada*/}
                        <img src={Defectowide} alt="No se encontró imagen"></img>
                        <div className="card-img-overlay d-flex align-items-end">
                            <div>
                                <h5>Título de la noticia</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique accusamus illum quo saepe illo voluptates nobis quae sed.</p>
                                <Button variant="outline-danger" className="customButton">Ver más...</Button>
                            </div>
                        </div>
                    </div>
                    <div className="card text-dark my-sm-5 my-lg-0 mt-lg-4 shadow">
                        <img src={Defectowide} alt="No se encontró imagen"></img>
                        <div className="card-img-overlay d-flex align-items-end">
                            <div>
                                <h5>Título de la noticia</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique accusamus illum quo saepe illo voluptates nobis quae sed.</p>
                                <Button variant="outline-danger" className="customButton">Ver más...</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr/>
            <div className="my-3">
                <Card.Img src={adBanner1}></Card.Img>
            </div>
            <section className="mt-5">
                <div>
                    {/*Banner con información sobre el avance del Covid*/}
                    <Card className="shadow bg-dark-gray">
                        <Card.Body className="row justify-content-between flex-sm-wrap covidBox">
                            <div className="col-lg-2 col-md-12 pl-3 pt-3 text-center">
                                <p className="texts-large"><b>Coronavirus en Tucumán</b></p>
                                <p className="texts-small text-secondary">Actualizado el: 19/05/2021</p>
                            </div>
                            <div className="col-lg-2 col-md-12 text-center">
                                <p className="text-danger font-weight-bold">Contagios</p>
                                <p className="bolder-numbers">115.267</p>
                                <p className="text-secondary texts-small font-weight-bolder">878 nuevos</p>
                            </div>
                            <div className="col-lg-2 col-md-12 text-center">
                                <p className="text-danger font-weight-bold">Vacunados</p>
                                <p className="bolder-numbers">267.826</p>
                                <p className="text-secondary texts-small font-weight-bolder">7.497 nuevos</p>
                            </div>
                            <div className="col-lg-2 col-md-12 text-center">
                                <p className="text-danger font-weight-bold">Recuperados</p>
                                <p className="bolder-numbers">104.307</p>
                                <p className="text-secondary texts-small font-weight-bolder">533 nuevos</p>
                            </div>
                            <div className="col-lg-2 col-md-12 text-center">
                                <p className="text-danger font-weight-bold">Fallecidos</p>
                                <p className="bolder-numbers">1.946</p>
                                <p className="text-secondary texts-small font-weight-bolder">9 nuevos</p>
                            </div>
                        </Card.Body>
                    </Card>
                    {/*Banner con consejos sobre Covid con animación de transición*/}
                    <Card className="shadow d-flex bg-dark-gray">
                        <Card.Body className="row align-items-center">
                            <div className="col-3 text-center">
                                <img src={covidimg}></img>
                            </div>
                            <div className="col-8">
                                <h2 className="font-weight-bolder mb-4">¡Cuidate!</h2>
                                <hr/>
                                <Carousel fade controls={false}>
                                    <Carousel.Item interval={9000}>
                                        <Card className="hidingCard">
                                            <Card.Body>
                                                <p className="advice"><b>Utiliza cubrebocas, evitarás contagiarte tú, a tus seres queridos y a las personas que te rodean</b></p>
                                            </Card.Body>
                                        </Card>
                                    </Carousel.Item>
                                    <Carousel.Item interval={9000}>
                                        <Card className="hidingCard">
                                            <Card.Body>
                                                <p className="advice"><b>Lávate las manos. Una completa higiene de las manos reduce en gran medida el riesgo de contagio</b></p>
                                            </Card.Body>
                                        </Card>
                                    </Carousel.Item>
                                    <Carousel.Item interval={9000}>
                                        <Card className="hidingCard">
                                            <Card.Body>
                                                <p className="advice"><b>Mantén las distancias. Evita espacios concurridos, procura mantener al menos 1 metro de distancia de otras personas</b></p>
                                            </Card.Body>
                                        </Card>
                                    </Carousel.Item>
                                    <Carousel.Item interval={9000}>
                                        <Card className="hidingCard">
                                            <Card.Body>
                                                <p className="advice"><b>Entre todos podemos hacer que esta pandemia termine. ¡Cuidate! no te conviertas en un número más en el marcador</b></p>
                                            </Card.Body>
                                        </Card>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </section>
            <hr className="my-5"/>
            <section className="row">
                <div className="col-lg-9 col-sm-12 texts-small">
                    <Card className="shadow containerAnimation">
                        <h4 className="font-weight-bold ml-3 mt-2"><i>Actualidad</i></h4>
                        <CardDeck className="container my-3">
                            <Card className="cardAnimation">
                                <Card.Img variant="top" src={DefectoMini}></Card.Img>
                                <Card.Body>
                                    <Card.Text className="scale-texts">
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="cardAnimation">
                                <Card.Img variant="top" src={DefectoMini}></Card.Img>
                                <Card.Body>
                                    <Card.Text className="scale-texts">
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="cardAnimation">
                            <Card.Img variant="top" src={DefectoMini}></Card.Img>
                                <Card.Body>
                                    <Card.Text className="scale-texts">
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                    </Card>
                    <Card className="shadow my-3 containerAnimation">
                        <h4 className="font-weight-bold ml-3 mt-2"><i>Salud</i></h4>
                        <CardDeck className="container my-3">
                            <Card className="cardAnimation">
                                <Card.Img variant="top" src={DefectoMini}></Card.Img>
                                <Card.Body>
                                    <Card.Text className="scale-texts">
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="cardAnimation">
                                <Card.Img variant="top" src={DefectoMini}></Card.Img>
                                <Card.Body>
                                    <Card.Text className="scale-texts">
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="cardAnimation">
                            <Card.Img variant="top" src={DefectoMini}></Card.Img>
                                <Card.Body>
                                    <Card.Text className="scale-texts">
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                    </Card>
                    <Card className="shadow containerAnimation">
                        <h4 className="font-weight-bold ml-3 mt-2"><i>Economía</i></h4>
                        <CardDeck className="container my-3">
                            <Card className="cardAnimation">
                                <Card.Img variant="top" src={DefectoMini}></Card.Img>
                                <Card.Body>
                                    <Card.Text className="scale-texts">
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="cardAnimation">
                                <Card.Img variant="top" src={DefectoMini}></Card.Img>
                                <Card.Body>
                                    <Card.Text className="scale-texts">
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img src={adBanner3}></Card.Img>
                            </Card>
                        </CardDeck>
                    </Card>
                    <Card className="shadow containerAnimation mt-3">
                        <h4 className="font-weight-bold ml-3 mt-2"><i>Política</i></h4>
                        <CardDeck className="container my-3">
                            <Card className="cardAnimation">
                                <Card.Img variant="top" src={DefectoMini}></Card.Img>
                                <Card.Body>
                                    <Card.Text className="scale-texts">
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="cardAnimation">
                                <Card.Img variant="top" src={DefectoMini}></Card.Img>
                                <Card.Body>
                                    <Card.Text className="scale-texts">
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="cardAnimation">
                                <Card.Img variant="top" src={DefectoMini}></Card.Img>
                                <Card.Body>
                                    <Card.Text className="scale-texts">
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                    </Card>
                    <div className="my-3">
                        <Card.Img src={adBanner2}></Card.Img>
                    </div>
                    <Card className="shadow containerAnimation">
                        <h4 className="font-weight-bold ml-3 mt-2"><i>Deportes</i></h4>
                        <CardDeck className="container my-3">
                            <Card className="cardAnimation">
                                <Card.Img variant="top" src={DefectoMini}></Card.Img>
                                <Card.Body>
                                    <Card.Text className="scale-texts">
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="cardAnimation">
                                <Card.Img variant="top" src={DefectoMini}></Card.Img>
                                <Card.Body>
                                    <Card.Text className="scale-texts">
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="cardAnimation">
                                <Card.Img variant="top" src={DefectoMini}></Card.Img>
                                <Card.Body>
                                    <Card.Text className="scale-texts">
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                    </Card>
                </div>
                <div className="col-lg-3 non-display">
                    <img className="w-100" src={adBanner4}></img>
                </div>
            </section>
        </Container>
    );
};

export default Inicio;