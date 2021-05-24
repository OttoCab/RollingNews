import React from "react";
import { Container} from "react-bootstrap";
import ItemNoticia from "./ItemNoticia";
import {useParams} from 'react-router-dom';


const DetalleCategoria = (props) => {
  const {idCategoriaNoticia} = useParams();
  const categoriaNFiltradas = props.noticias.filter((nota)=> nota.idCategoriaNoticia === idCategoriaNoticia);

  return (
    <Container>
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
