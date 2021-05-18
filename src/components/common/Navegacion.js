import React from "react";
import {Navbar, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const Navegacion = () => {
  return (
    <Navbar bg="info" variant="dark" expand="lg">
      <Navbar.Brand href="/">Rollings News</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink className="nav-link" exact={true} to='/' >Inicio</NavLink>
          <NavLink className="nav-link" exact={true} to='/adm'>Administacion</NavLink>
          <NavLink className="nav-link" exact={true} to='/contact'>Contacto</NavLink>
          <NavLink className="nav-link" exact={true} to='/adn'>Acerca de Nosotros</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navegacion;