import React from "react";
import { Container} from "react-bootstrap";
import ItemNoticia from "./ItemNoticia";
import {useParams} from 'react-router-dom';

const DetalleCategoria = (props) => {
  const {idCategoria} = useParams();
  const categoriaNFiltradas = props.noticias.filter((nota)=> nota.idCategoriaNoticia === idCategoria);
  console.log(categoriaNFiltradas, "FILTRO");

  return (
    <Container>
      <h1>desde detalle</h1>
      <section className="row">
      {categoriaNFiltradas.map((detalleCat, indice) => (
        <ItemNoticia
              key={indice}
              dato={detalleCat}
              Categorias={props.Categorias}
            ></ItemNoticia>
          ))}
      </section>
    </Container>
  
  );
};

export default DetalleCategoria;
