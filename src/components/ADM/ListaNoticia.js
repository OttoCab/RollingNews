import React, { useState } from "react";
import { Container, InputGroup, FormControl } from "react-bootstrap";
import ItemNoticia from "./ItemNoticia";

const ListaNoticia = (props) => {
  const [buscar, setBuscar] = useState("");

  return (
    <Container>
      <h1 className="text-center my-4 fuente">Lista de Noticias</h1>
      <InputGroup className="my-3 w-25 fuente">
        <InputGroup.Prepend>
          <InputGroup.Text>Buscar</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Ingresar una palabra"
          onChange={(e)=>setBuscar(e.target.value)}
          />
      </InputGroup>
      <section className="row">
        {
          props.noticias.filter((palabra)=>{
            if(buscar === ""){
              return palabra
            }else if(palabra.contenidoNoticia.toLowerCase().includes(buscar.toLowerCase())){
              return palabra
            }
          }).map((nota,indice) => (
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
