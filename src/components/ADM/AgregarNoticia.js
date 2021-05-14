import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import Swal from "sweetalert2";

const AgregarNoticia = (props) => {
  const [categoriaNoticia, setCategoriaNoticia] = useState("");
  const [tituloNoticia, setTituloNoticia] = useState("");
  const [autorNoticia, setAutorNoticia] = useState("");
  const [fechaNoticia, setFechaNoticia] = useState("");
  const [contenidoNoticia, setContenidoNoticia] = useState("");
  const [error, setError] = useState(false);
  const URL = process.env.REACT_APP_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      categoriaNoticia.trim() === "" ||
      tituloNoticia.trim() === "" ||
      autorNoticia.trim() === "" ||
      fechaNoticia.trim() === "" ||
      contenidoNoticia.trim() === ""
    ){
      setError(true);
      return;
    } else {
      setError(false);
      // objeto
      const noticia = {
        categoriaNoticia,
        tituloNoticia,
        autorNoticia,
        fechaNoticia,
        contenidoNoticia,
      };
      console.log(noticia);

      try {
        const enviarNoticia = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(noticia),
        };
        const respuesta = await fetch(URL, enviarNoticia);
        console.log(respuesta);
        if (respuesta.status === 201) {
          Swal.fire(
            "Producto agregado!",
            "Se agrego un nuevo producto!",
            "success"
          );
          //actualiza la lista de noticias
          props.consultarAPI();
        }
      } catch (error) {
        console.log(error);
        Swal.fire(  
          "Ocurrio un error!",
          "Intentelo de nuevo mas tarde!",
          "error"
        );
      }
    }
  };

  return (
    <Container>
      <h1 className="text-center my-4">Agregar Noticias</h1>
      <Form
        className="my-4 shadow p-3 mb-5 bg-body rounded"
        onSubmit={handleSubmit}
      >
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>Seleccione la Categoria</Form.Label>
          <Form.Control
            as="select"
            custom
            onChange={(e) => setCategoriaNoticia(e.target.value)}
          >
            <option>Seleccionar</option>
            <option>Actualidad</option>
            <option>Espectaculo</option>
            <option>Tecnología</option>
            <option>Deportes</option>
            <option>Política</option>
            <option>Economía</option>
            <option>Salud</option>
            <option>Fotografía</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Titulo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el Titulo de la Noticia"
            onChange={(e) => setTituloNoticia(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Autor</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese al Autor de la Noticia"
            onChange={(e) => setAutorNoticia(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Seleccione una Fecha</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setFechaNoticia(e.target.value)}
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
            onChange={(e) => setContenidoNoticia(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="my-4">
          Guardar
        </Button>
        {
          (error === true)?(<Alert variant="warning">Todos los campos son obligatorios</Alert>):(null )
        }   
      </Form>
    </Container>
  );
};

export default AgregarNoticia;
