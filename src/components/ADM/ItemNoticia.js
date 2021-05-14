import React from "react";
import { Card, Button, CardGroup } from "react-bootstrap";

const ItemNoticia = (props) => {
  return (
    <div className="col-sm-12 my-3">
      <CardGroup>
        <Card>
          <div className="d-flex align-items-center justify-content-between mx-3">
            <div>
              <Card.Img variant="top" src="holder.js/100px160" />
            </div>
            <div>
              <Card.Body>
                <Card.Title><span className="font-weight-bold">{props.dato.tituloNoticia}</span></Card.Title>
                <Card.Text>
                  {props.dato.categoriaNoticia}
               </Card.Text>
                
                <Card.Text>{props.dato.contenidoNoticia}</Card.Text>
              </Card.Body>
            </div>
          <section className="d-flex flex-column">
            <Button variant="primary" className="my-2">Eliminar</Button>
            <Button variant="primary" className="my-2">Editar</Button>
            <Button variant="primary" className="my-2">Destacar</Button>
          </section>
            </div>
          <Card.Footer>
            <small className="text-muted">{props.dato.autorNoticia} {props.dato.fechaNoticia}</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default ItemNoticia;
