import React from "react";
import { Container } from "react-bootstrap";
import error404 from '../components/img/error404.png';

const Error404 = () => {
  return (
    <Container>
      <section className="text-center">
        <img src={error404} className="error" alt="fotode error"/>
      </section>
    </Container>
  );
};

export default Error404;
