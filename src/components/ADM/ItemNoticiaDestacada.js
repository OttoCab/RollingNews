import React from "react";
import { Carousel } from "react-bootstrap";

const ItemNoticiaDestacada = (props) => {
  return (
      <Carousel fade>
        if(props.key === 0)
      {
        <Carousel.Item className="size-adjust-car">
          <span className="position-absolute bg-warning mt-4 px-5 py-1 tag">
            Destacado
          </span>
          <img
            className="d-block w-100"
            src={props.dato.imagenNoticia}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{props.dato.tituloNoticia}</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      }
      else if(key === 1)
      {
        <Carousel.Item className="size-adjust-car">
          <span className="position-absolute bg-warning mt-4 px-5 py-1 tag">
            Destacado
          </span>
          <img
            className="d-block w-100"
            src={props.dato.imagenNoticia}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      }else{
          
        <Carousel.Item className="size-adjust-car">
          <span className="position-absolute bg-warning mt-4 px-5 py-1 tag">
            Destacado
          </span>
          <img
            className="d-block w-100"
            src={props.dato.imagenNoticia}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      

      }
    </Carousel>
  );
};

export default ItemNoticiaDestacada;
