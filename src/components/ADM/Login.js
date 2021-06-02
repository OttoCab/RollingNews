import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import '../assets/css/login.css';


const Login = () => {

  return (
    <Container>
      <Form className="py-3 px-5 login mt-5">
        <Form.Group className="mb-3">
          <Form.Label>Usuario</Form.Label>
          <Form.Control type="text" placeholder="Ingresar Usuario" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check type="checkbox" label="Recordar" />
        </Form.Group>
        <Button variant="primary" size="lg" type="submit" block>
          Ingresar
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
