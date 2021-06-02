import React, { useEffect, useState, useRef } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import Swal from "sweetalert2";
import { useParams, withRouter } from "react-router-dom";
import { campoRequerido } from "../common/helpers";

const EditarCategoria = (props) => {
  const codCategoria = useParams().idCategoria;
  console.log(codCategoria);

  const [error, setError] = useState(false);
  const [categoria, setCategoria] = useState({});

  const URLCat = process.env.REACT_APP_API_URL2 + "/" + codCategoria;
  const nombreCatRef = useRef("");

  useEffect(async () => {
    try {
      const respuesta = await fetch(URLCat);
      if (respuesta.status === 200) {
        const categoriaSolicitada = await respuesta.json();
        setCategoria(categoriaSolicitada);
      }
    } catch (error) {
      console.log(error);
      Swal.fire("Ocurrio un error!", "Intentelo de nuevo mas tarde!", "error");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (campoRequerido(nombreCatRef.current.value)) {
      setError(false);
      try {
        const categoriaModificada = {
          nombreCategoria: nombreCatRef.current.value,
        };
        const respuesta = await fetch(URLCat, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(categoriaModificada),
        });
        if (respuesta.status === 200) {
          Swal.fire(
            "Categoria Modificada!",
            "Se actualizo el nombre de la Categoria!",
            "success"
          );
          props.consultarAPI();
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setError(true);
    }
  };
  return (
    <Container className="my-5">
      <Form className="shadow-lg p-3 mb-5 bg-body rounded w-75 m-auto" onSubmit={handleSubmit}>
        <h1 className="text-center my-4 fuente">Modificar Categoria</h1>
        <Form.Group className="fuente">
          <Form.Label>Cambiar nombre de la Categoria</Form.Label>
          <Form.Control type="text" defaultValue={categoria.nombreCategoria} ref={nombreCatRef} />
        </Form.Group>
        <Button variant="primary" type="submit" className="fuente">
          Modificar
        </Button>
        {error === true ? (
          <Alert variant="warning">Todos los campos son obligatorios</Alert>
        ) : null}
      </Form>
    </Container>
  );
};

export default EditarCategoria;
