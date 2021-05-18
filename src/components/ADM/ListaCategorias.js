import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import ItemCategoria from "./ItemCategoria";

const ListaCategorias = (props) => {
  return (
    <Container>
        <h1 className="text-center my-4">Lista de Categorias</h1>
      <ListGroup className="my-5">
      {props.Categorias
          .map((nombreCat, indice) => (
            <ItemCategoria
              key={indice}
              dato={nombreCat}
            ></ItemCategoria>
          ))}
      </ListGroup>
    </Container>
  );
};

export default ListaCategorias;
