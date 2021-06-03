import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import ItemCategoria from "./ItemCategoria";

const ListaCategorias = (props) => {
  return (
    <Container>
      <h1 className="text-center my-4 fuente">Lista de Categorias</h1>
      <ListGroup className="my-5 fuente">
        {props.Categorias.map((categoria) => (
          <ItemCategoria
            key={categoria._id}
            categoria={categoria}
            consultarAPI={props.consultarAPI}
          ></ItemCategoria>
        ))}
      </ListGroup>
    </Container>
  );
};

export default ListaCategorias;
