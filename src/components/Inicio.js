import React from 'react';
import { Container } from 'react-bootstrap';
import DefectoImg from './assets/img/defecto.jpg';
import Defectowide from './assets/img/defecto-wide.jpg';


const Inicio = () => {
    return (
        <Container className="my-5">
            <h1>Ultima hora...</h1>
            <section className="row">
                <div className="col-lg-7 col-sm-12">
                    <div className="card">
                        <img src={DefectoImg}></img>
                        <div className="card-img-overlay d-flex align-items-end">
                            <div className="flex-column">
                            <h5>Título de la noticia</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique accusamus illum quo saepe illo voluptates nobis quae sed. Pariatur quidem voluptas possimus cupiditate autem ut dolorem officiis animi illum atque maiores, ducimus vel veritatis voluptate perferendis asperiores omnis nemo commodi soluta obcaecati modi accusamus quos saepe exercitationem. Soluta, nobis voluptate.</p>
                            <button className="btn btn-primary">Ver más...</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-sm-12">
                    <div className="card bg-dark text-dark my-sm-5 my-lg-0">
                        <img src={Defectowide}></img>
                        <div className="card-img-overlay">
                            <h5>Título de la noticia</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique accusamus illum quo saepe illo voluptates nobis quae sed.</p>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    );
};

export default Inicio;