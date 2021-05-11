import React from "react";
import { Card, Button, CardGroup } from "react-bootstrap";

const ItemNoticia = (props) => {
  return (
    <div className="col-sm-12 col-md-4 my-4">
      <CardGroup>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>{props.dato.tituloNoticia}</Card.Title>
            <Card.Text>{props.dato.contenidoNoticia}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{props.dato.autorNoticia}</small>
          </Card.Footer>
          <section className="d-flex justify-content-around my-3">
            <Button variant="primary">Eliminar</Button>
            <Button variant="primary">Editar</Button>
          </section>
        </Card>
      </CardGroup>
    </div>
  );
};

export default ItemNoticia;
