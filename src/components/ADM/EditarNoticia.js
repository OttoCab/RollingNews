import React, { useState, useEffect, useRef } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import Swal from "sweetalert2";
import { useParams, withRouter } from "react-router-dom";
import { campoRequerido } from "../common/helpers.js";

//withRouter redirecciona
const EditarNoticia = (props) => {
  const codNoticia = useParams().id;
  console.log(codNoticia);
  // const [categoriaNoticia, setCategoriaNoticia] = useState("");
  const [error, setError] = useState(false);
  const [noticia, setNoticia] = useState({});
  const URL = process.env.REACT_APP_API_URL + "/" + codNoticia;
  // const URLCat =process.env.REACT_APP_API_URL2;
  //variables de referencia
  const categoriaNoticiaRef = useRef("");
  const tituloNoticiaRef = useRef("");
  const autorNoticiaRef = useRef("");
  const fechaNoticiaRef = useRef("0");
  const contenidoNoticiaRef = useRef("");

  useEffect(async () => {
    try {
      const respuesta = await fetch(URL);
      if (respuesta.status === 200) {
        const noticiaSolicitada = await respuesta.json();
        setNoticia(noticiaSolicitada);
        console.log(noticiaSolicitada.categoriaNoticia);
        console.log(noticiaSolicitada, "NOTICIA");
      }  
    } catch (error) {
      console.log(error);
      Swal.fire("Ocurrio un error!", "Intentelo de nuevo mas tarde!", "error");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      campoRequerido(categoriaNoticiaRef.current.value)&&
      (tituloNoticiaRef.current.value) &&
      (autorNoticiaRef.current.value) &&
      (fechaNoticiaRef.current.value) &&
      (contenidoNoticiaRef.current.value)
    ) {
      setError(false);
      try {
        const noticiaModificada = {
          categoriaNoticia: categoriaNoticiaRef.current.value,
          tituloNoticia: tituloNoticiaRef.current.value,
          autorNoticia: autorNoticiaRef.current.value,
          fechaNoticia: fechaNoticiaRef.current.value,
          contenidoNoticia: contenidoNoticiaRef.current.value
        };
        const respuesta = await fetch(URL, {
          method: 'PUT',
          headers: {"Content-Type":"application/json"},
          body: JSON.stringify(noticiaModificada)
        });
        if(respuesta.status === 200){
          Swal.fire(
            "Noticia Modificada!",
            "Se actualizaron los datos de la noticia!",
            "success"
          )
          props.consultarAPI();
          props.history.push('/Noticias');
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setError(true);
    }
  };
  return (
    <Container>
      <h1 className="text-center my-4">Editar Noticias</h1>
      <Form
        className="my-4 shadow p-3 mb-5 bg-body rounded"
        onSubmit={handleSubmit}
      >
        <Form.Group>
          <Form.Label>Categoria</Form.Label>
          <Form.Control
            type="text"
            defaultValue={noticia.categoriaNoticia}
            ref={categoriaNoticiaRef}
            readOnly 
          >
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Titulo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el Titulo de la Noticia"
            defaultValue={noticia.tituloNoticia}
            ref={tituloNoticiaRef}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Autor</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese al Autor de la Noticia"
            defaultValue={noticia.autorNoticia}
            ref={autorNoticiaRef}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Seleccione una Fecha</Form.Label>
          <Form.Control
            type="text"
            defaultValue={noticia.fechaNoticia}
            ref={fechaNoticiaRef}
          />
        </Form.Group>
        <Form.Group>
          <Form.File label="Seleccione una Imagen" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Contenido</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            defaultValue={noticia.contenidoNoticia}
            ref={contenidoNoticiaRef}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="my-4">
          Guardar
        </Button>
        {error === true ? (
          <Alert variant="warning">Todos los campos son obligatorios</Alert>
        ) : null}
      </Form>
    </Container>
  );
};

export default withRouter(EditarNoticia);
