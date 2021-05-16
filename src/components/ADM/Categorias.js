import React from "react";
import { Container, InputGroup, FormControl, ListGroup } from "react-bootstrap";
import ItemCategoria from "./ItemCategoria";

const Categorias = (props) => {
  return (
    <Container>
        <h1 className="text-center my-4">Lista de Categoria</h1>
      <ListGroup ClassName= "my-3">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
      </ListGroup>
      <section>
        {props.categoria.map((nota, indice) => (
          <ItemCategoria
            key={indice}
            dato={nota}
            consultarAPI={props.consultarAPI}
          ></ItemCategoria>
        ))}
      </section>
    </Container>
  );
};

export default Categorias;
