import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import Swal from "sweetalert2";

const AgregarCategoria = (props) => {
  const [categoria, setCategoria] = useState("");
  const [error, setError] = useState(false);
  const URL = process.env.REACT_APP_API_URL;
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (categoria.trim() === "") {
      setError(true);
      return;
    } else {
      setError(false);
      // objeto
      const cat = {
        categoria,
      };
      console.log(cat);

      try {
        const enviarCategoria = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cat),
        };
        const respuesta = await fetch(URL, enviarCategoria);
        console.log(respuesta);
        if (respuesta.status === 201) {
          Swal.fire(
            "Categoria agregada!",
            "Se agrego una nueva Categoria!",
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
      <h1 className="text-center my-4">Agregar Categoria</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Nombre de la Categoria</Form.Label>
          <Form.Control
            type="text"
            placeholder="Categoria"
            onChange={(e) => setCategoria(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
        {error === true ? (
          <Alert variant="warning">El campo es obligatorio</Alert>
        ) : null}
      </Form>
    </Container>
  );
};

export default AgregarCategoria;
