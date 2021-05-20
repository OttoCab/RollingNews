import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import Swal from "sweetalert2";

const AgregarCategoria = (props) => {
  const [nombreCategoria, setNombreCategoria] = useState("");
  const [error, setError] = useState(false);
  const URLCat =process.env.REACT_APP_API_URL2;

  const handleSubmit = async (e)=>{
    e.preventDefault();
    //validacion de datos 
    if(nombreCategoria.trim() === ""){
      setError(true);
      return;
    }else{
      setError(false);
      //se crea el objeto de las categorias
      const categoria = {
        nombreCategoria
      }
      console.log(categoria);
      try{
        const enviarCategoria = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body:JSON.stringify(categoria)
        }
        const respuesta = await fetch(URLCat, enviarCategoria);
        console.log(respuesta); 
        if(respuesta.status === 201){
          Swal.fire(
            "Categoria agregada!",
            "Se agrego una nueva categoria !",
            "success"
          );
          //se actualiza la lista de categorias
          props.consultarAPI();
        }
      }catch(error){
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
    <Container className="my-5">
      <Form className="shadow-lg p-3 mb-5 bg-body rounded w-75 m-auto" onSubmit={handleSubmit}>
        <h1 className="text-center my-4 fuente">Agregar una Categoria</h1>
        <Form.Group className="fuente">
          <Form.Label>Nombre de la Categoria</Form.Label>
          <Form.Control
            type="text"
            placeholder="Actualidad, Deporte..."
            onChange={(e) => setNombreCategoria(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="fuente">
          Guardar
        </Button>
        {
          (error === true)?(<Alert variant="warning">Todos los campos son obligatorios</Alert>):(null )
        } 
      </Form>
    </Container>
  );
};

export default AgregarCategoria;
