import React from "react";
import { Container } from "react-bootstrap";
import error404 from '../components/assets/img/error404.png';

const Error404 = () => {
  return (
    <Container>
      <section className="text-center">
        <img src={error404} className="error" alt="Error 404, sitio no encontrado"/>
      </section>
    </Container>
  );
};

export default Error404;
