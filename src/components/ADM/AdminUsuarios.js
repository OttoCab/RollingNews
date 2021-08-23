import { react } from "@babel/types";
import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";

const AdminUsuarios = (props) => {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [nombreClave, setNombreClave] = useState("");
  const URLusr = process.env.REACT_APP_API_URL3;
  const handleSubmit = async(e)=>{
    e.preventDefault();

    const user = {
        nombreUsuario,
        nombreClave,
    }
    try{
        const enviarUsuario = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body:JSON.stringify(user)
        };
        const respuesta = await fetch(URLusr,enviarUsuario);
        if(respuesta.status === 201){
            Swal.fire(
              "Usuario agregado!",
              "Se agrego un nuevo usuario !",
              "success"
            );
            
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
  return (
    <Container>
      <Form className="my-5" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Ingrese un Usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Usuario"
            onChange={(e) => setNombreUsuario(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Ingrese una Clave</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            onChange={(e) => setNombreClave(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </Container>
  );
};

export default AdminUsuarios;
