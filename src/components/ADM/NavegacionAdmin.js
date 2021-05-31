import React from "react";
import {Navbar, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import logo from '../img/logo.svg'

const Navegacion = () => {
  return (
    <Navbar bg="danger" variant="dark" expand="lg">
      <Navbar.Brand href="/">
        <img src={logo} alt="logo del RollongNews"></img>

      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink className="nav-link" exact={true} to='/' >Inicio</NavLink>
          <NavLink className="nav-link" exact={true} to='/Noticia/nuevo'>Agregar Noticias</NavLink>
          <NavLink className="nav-link" exact={true} to='/Noticias'>Lista Noticias</NavLink>
          <NavLink className="nav-link" exact={true} to='/Categorias/nuevaCategoria'>Agregar Categorias</NavLink>
          <NavLink className="nav-link" exact={true} to='/Categorias'>Lista Categorias</NavLink>
          <NavLink className="nav-link" exact={true} to='/Login'>Login</NavLink>
          <NavLink className="nav-link" exact={true} to='/ADN'>Acerca de Nosotros</NavLink>
          <NavLink className="nav-link" exact={true} to='/Contacto'>Contactanos</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navegacion;