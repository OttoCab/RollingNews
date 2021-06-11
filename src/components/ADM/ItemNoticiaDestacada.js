import React from "react";
import { Carousel } from "react-bootstrap";

const ItemNoticiaDestacada = (props) => {
  return (
    <Carousel fade>
      {props.noticiasDestacadas.map((destacado, indice) => (
          <Carousel.Item className="size-adjust-car">
          <span className="position-absolute bg-warning mt-4 px-5 py-1 tag">
            Destacado
          </span>
          <img
            className="d-block w-100"
            src={destacado.imagenNoticia}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{destacado.tituloNoticia}</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        ))}
      
    </Carousel>
  );
};

export default ItemNoticiaDestacada;
