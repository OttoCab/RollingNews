import React from "react";
import { Carousel } from "react-bootstrap";
import "../assets/css/inicio.css";

const ItemNoticiaDestacada = (props) => {
  return (
    <Carousel fade>
      {props.noticiasDestacadas.map((destacado, indice) => (
          <Carousel.Item className="size-adjust-car">
          <span className="bg-warning mt-4 px-5 py-1 tag">
            Destacado
          </span>
          <img className="d-block w-100 img-car" src={destacado.imagenNoticia} alt="First slide"/>
          <div className="overlay-car"></div>
          <Carousel.Caption>
            <h2>{destacado.tituloNoticia}</h2>
          </Carousel.Caption>
        </Carousel.Item>
        ))}
      
    </Carousel>
  );
};

export default ItemNoticiaDestacada;
