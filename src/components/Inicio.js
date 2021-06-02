import React from 'react';
import { Container } from 'react-bootstrap';
import DefectoImg from './assets/img/defecto.jpg';
import Defectowide from './assets/img/defecto-wide.jpg';
import './assets/css/inicio.css';
import { Card, Button } from 'react-bootstrap';
import TiempoMoneda from './ADM/TiempoMoneda';
import './Inicio.css';


const Inicio = () => {
    return (
        <>
            <Container fluid className="containerCotizador">
                <TiempoMoneda></TiempoMoneda>
            </Container>
            <Container className="my-5 base-container ">
                <h1>Ultima hora...</h1>
                <section className="row texts-small scale-texts mb-5">
                    <div className="col-lg-7 col-sm-12">
                        <Card className="card shadow">
                            <Card.Img src={DefectoImg} alt="No se encontró imagen"></Card.Img>
                            <div className="card-img-overlay d-flex align-items-end">
                                <div className="flex-column">
                                    <Card.Title>Título de la noticia</Card.Title>
                                    <Card.Text className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique accusamus illum quo saepe illo voluptates nobis quae sed. Pariatur quidem voluptas possimus cupiditate autem ut dolorem officiis animi illum atque maiores, ducimus vel veritatis voluptate perferendis asperiores omnis nemo commodi soluta obcaecati modi accusamus quos saepe exercitationem. Soluta, nobis voluptate.</Card.Text>
                                    <Button variant="outline-danger">Ver más...</Button>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-lg-5 col-sm-12">
                        <div className="card text-dark my-sm-5 my-lg-0 my-3 shadow">
                            <img src={Defectowide} alt="No se encontró imagen"></img>
                            <div className="card-img-overlay d-flex align-items-end">
                                <div>
                                    <h5>Título de la noticia</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique accusamus illum quo saepe illo voluptates nobis quae sed.</p>
                                    <button className="btn btn-outline-danger">Ver más...</button>
                                </div>
                            </div>
                        </div>

                        <div className="card text-dark my-sm-5 my-lg-0 mt-lg-4 shadow">
                            <img src={Defectowide} alt="No se encontró imagen"></img>
                            <div className="card-img-overlay d-flex align-items-end">
                                <div>
                                    <h5>Título de la noticia</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique accusamus illum quo saepe illo voluptates nobis quae sed.</p>
                                    <button className="btn btn-outline-danger">Ver más...</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <hr />
                <section className="mt-5">
                    <div>
                        <Card className="shadow">
                            <Card.Body className="row justify-content-between flex-sm-wrap covidBox">
                                <div className="col-2 pl-3 pt-3 text-center">
                                    <p className="texts-large"><b>Coronavirus en Tucumán</b></p>
                                    <p className="texts-small text-secondary">Actualizado el: 19/05/2021</p>
                                </div>
                                <div className="col-2 text-center">
                                    <p className="text-danger font-weight-bold">Contagios</p>
                                    <p className="bolder-numbers">115.267</p>
                                    <p className="text-secondary texts-small font-weight-bolder">878 nuevos</p>
                                </div>
                                <div className="col-2 text-center">
                                    <p className="text-danger font-weight-bold">Vacunados</p>
                                    <p className="bolder-numbers">267.826</p>
                                    <p className="text-secondary texts-small font-weight-bolder">7.497 nuevos</p>
                                </div>
                                <div className="col-2 text-center">
                                    <p className="text-danger font-weight-bold">Recuperados</p>
                                    <p className="bolder-numbers">104.307</p>
                                    <p className="text-secondary texts-small font-weight-bolder">533 nuevos</p>
                                </div>
                                <div className="col-2 text-center">
                                    <p className="text-danger font-weight-bold">Fallecidos</p>
                                    <p className="bolder-numbers">1.946</p>
                                    <p className="text-secondary texts-small font-weight-bolder">9 nuevos</p>
                                </div>

                            </Card.Body>
                        </Card>
                    </div>
                </section>
            </Container>
        </>
    );
};

export default Inicio;