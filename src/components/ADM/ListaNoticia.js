import React from "react";
import { Container } from "react-bootstrap";
import ItemNoticia from "./ItemNoticia";

const ListaNoticia = (props) => {
  return (
    <Container>
      <section className="row">
        {props.noticias.map((nota, indice) => (
          <ItemNoticia key={indice} dato={nota} consultarAPI={props.consultarAPI}></ItemNoticia>
        ))}
      </section>
    </Container>
  );
};

export default ListaNoticia;
