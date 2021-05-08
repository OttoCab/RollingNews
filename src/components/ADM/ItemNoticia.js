import React from "react";
import { Card, Button } from "react-bootstrap";

const ItemNoticia = () => {
  return (
    <div classNme="col-sm-4 col-lg-12">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Titulo de Noticia</Card.Title>
          <Card.Text>Detalle de la noticia.</Card.Text>
          <Button variant="primary">Editar</Button>
          <Button variant="primary">Borrar</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemNoticia;
