import React, { useState } from "react";
import { Container, InputGroup, FormControl } from "react-bootstrap";
import ItemNoticia from "./ItemNoticia";

const ListaNoticia = (props) => {
  const [buscar, setBuscar] = useState("");
  return (
    <Container>
      <InputGroup className="my-3 w-25">
        <InputGroup.Prepend>
          <InputGroup.Text          
            onChange={(e) => {
              setBuscar(e.target.value);
            }}
          >
            Buscar
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Ingrese una categoria"
        />
      </InputGroup>
      <section className="row">
        {props.noticias
          // .filter((nota) => {
          //   if (buscar === "") {
          //     return nota;
          //   } else if (
          //     nota.categoriaNoticia.toLowerCase().includes(buscar.toLowerCase())
          //   ) {
          //     return nota;
          //   }
          // })
          .map((nota, indice) => (
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
