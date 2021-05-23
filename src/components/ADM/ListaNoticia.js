import React, { useEffect, useState } from "react";
import { Container, InputGroup, FormControl } from "react-bootstrap";
import ItemNoticia from "./ItemNoticia";

const ListaNoticia = (props) => {
  return (
    <Container>
      <h1 className="text-center my-4 fuente">Lista de Noticias</h1>
      <InputGroup className="my-3 w-25 fuente">
        <InputGroup.Prepend>
          <InputGroup.Text>Buscar</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Ingrese una categoria"
          // onChange={handleBuscador}
        />
      </InputGroup>
      <section className="row">
        {
          props.noticias.map((nota, indice) => (
            <ItemNoticia
              key={indice}
              dato={nota}
              consultarAPI={props.consultarAPI}
            ></ItemNoticia>
          ))}
      </section>
    </Container>
  );
};

export default ListaNoticia;
