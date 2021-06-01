import React, { Fragment, useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import Swal from 'sweetalert2';

const Suscripcion = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [intereses, setIntereses] = useState("");
  const [error, setError] = useState(false);

  const cambiarIntereses = (e) => {
    setIntereses(e.target.value);
  };

  const handleSubmit = async (e) => { 
    e.preventDefault();
    if (
      nombre.trim() === "" ||
      apellido.trim() === "" ||
      email.trim() === "" ||
      intereses.trim === ""
    ) {
      setError(true);
      return;
    } else {
      setError(false);
      Swal.fire({
        title: "Gracias por Suscribirte",
        text: "Recibiras las notificaciones a tu correo electronico!",
        icon: "success",
        //   showCancelButton: true,
        confirmButtonColor: "#3085d6",
        //   cancelButtonColor: "#d33",
        confirmButtonText: "salir",
        //   cancelButtonText: "No!",
      }).then((result) => {
        if (result.isConfirmed) {
        } else {
        }
      });
    }
  };

  return (
    <Fragment>
      <Container>
        <h1 className="text-center my-4">Suscribite a RollingNews</h1>
        <Form className="my-4 px-5 py-5" onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Juan"
               onChange={(e) => setNombre(e.target.value)}
               required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              placeholder="Perez"
              onChange={(e) => setApellido(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="email@email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <h3 className="text-center my-4">Intereses</h3>
          <Form.Group className="d-flex justify-content-center">
            <Form.Check
              name="categoria"
              type="radio"
              label="Economia"
              value="economia"
              onChange={cambiarIntereses}
              inline  
            />
            <Form.Check
              name="categoria"
              type="radio"
              label="Deportes"
              value="deportes"
              onChange={cambiarIntereses}
              inline
             
            />
            <Form.Check
              name="categoria"
              type="radio"
              label="Espectaculo"
              value="espectaculo"
              onChange={cambiarIntereses}
              inline
            />
            <Form.Check
              name="categoria"
              type="radio"
              label="Salud"
              value="salud"
              onChange={cambiarIntereses}
              inline
            />
            <Form.Check
              name="categoria"
              type="radio"
              label="Video Juegos"
              value="video juegos"
              onChange={cambiarIntereses}
              inline
            />
          </Form.Group>
          <Button variant="danger" type="submit" size="lg" type="submit" block>
            Suscribirse
          </Button>
          {
            // operador ternario
            error === true ? (
              <Alert variant="warning">Todos los campos son obligatorios</Alert>
            ) : null
          }
        </Form>
      </Container>
    </Fragment>
  );
};

export default Suscripcion;
