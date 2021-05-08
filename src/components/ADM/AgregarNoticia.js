import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const AgregarNoticia = () => {
  return (
    <Container>
      <h1 className="text-center my-4">Agregar Noticias</h1>
      <Form className="my-4 shadow p-3 mb-5 bg-body rounded">
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>Custom select</Form.Label>
          <Form.Control as="select" custom>
            <option>Seleccionar</option>
            <option>Actualidad</option>
            <option>Politica</option>
            <option>Deporte</option>
            <option>Espectaculo</option>
            <option>Economia</option>
            <option>Policiales</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Titulo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el Titulo de la Noticia"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Autor</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese al Autor de la Noticia"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Seleccione una Fecha</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group>
          <Form.File label="Seleccione una Imagen" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Contenido</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </Container>
  );
};

export default AgregarNoticia;
