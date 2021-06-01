import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

const Login = () => {

  return (
    <Container>
      <Form className="w-50 ">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Usuario</Form.Label>
          <Form.Control type="text" placeholder="Ingresar Usuario" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label=" Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
