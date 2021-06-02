import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.svg";

const Navegacion = (props) => {
  return (
    <Navbar bg="info" variant="dark" expand="lg">
      <Navbar.Brand href="/">
        <img src={logo} alt="logo del RollongNews"></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink className="nav-link" exact={true} to="/">
            Inicio
          </NavLink>
          <NavDropdown title="Administracion" id="basic-nav-dropdown">
            <NavDropdown.Item>
              <NavLink exact={true} to="/Noticia/nuevo">
                Agregar Noticias
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink exact={true} to="/Noticias">
                Lista Noticias
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>
              <NavLink exact={true} to="/Categorias/nuevaCategoria">
                Agregar Categorias
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink exact={true} to="/Categorias">
                Lista Categorias
              </NavLink>
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Categorias">
            {props.Categorias.map((option, indice) => (
              <NavDropdown.Item key={indice}>
                {option.nombreCategoria}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
          {/* <NavLink className="nav-link" exact={true} to='/Noticia/nuevo'>Agregar Noticias</NavLink>
          <NavLink className="nav-link" exact={true} to='/Noticias'>Lista Noticias</NavLink>
          <NavLink className="nav-link" exact={true} to='/Categorias/nuevaCategoria'>Agregar Categorias</NavLink>
          <NavLink className="nav-link" exact={true} to='/Categorias'>Lista Categorias</NavLink> */}
          <NavLink className="nav-link" exact={true} to="/contacto">
            Contacto
          </NavLink>
          <NavLink className="nav-link" exact={true} to="/adn">
            Acerca de Nosotros
          </NavLink>
        </Nav>
        <Nav>
          <NavLink className="nav-link" exact={true} to="/Login">
            Registrarse
          </NavLink>
          <NavLink className="nav-link" exact={true} to="/suscripcion">
            SUSCRIBIRSE
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navegacion;
