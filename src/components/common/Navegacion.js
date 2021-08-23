import React from "react";
import { Navbar, Nav, NavDropdown, NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import logo from "../img/logo.svg";
import "../assets/css/navegacion.css";

const Navegacion = (props) => {
  const cerrarSesion = () => {
    props.setAdminUser(false);
  };
  return (
    <Navbar variant="dark" expand="lg" className="background">
      <Navbar.Brand href="/">
        <img src={logo} alt="logo del RollongNews"></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* menu habilitado para administrador  */}
          {props.adminUser ? (
            <Nav title="administrador">
              <NavLink className="nav-link" exact={true} to="/Noticia/nuevo">
                Agregar Noticias
              </NavLink>
              <NavLink className="nav-link" exact={true} to="/Noticias">
                Lista Noticias
              </NavLink>
              <NavLink
                className="nav-link"
                exact={true}
                to="/Categorias/nuevaCategoria"
              >
                Agregar Categorias
              </NavLink>
              <NavLink className="nav-link" exact={true} to="/Categorias">
                Lista Categorias
              </NavLink>
              <NavLink className="nav-link" exact={true} to="/usuarios">
                Administracion de Usuarios
              </NavLink>
            </Nav>
          ) : (
            <Nav>
              <NavLink className="nav-link" exact={true} to="/">
                Inicio
              </NavLink>
              <NavDropdown title="Categorias">
                {props.Categorias.map((option, indice) => (
                  <NavDropdown.Item key={indice}>
                    {option.nombreCategoria}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              <NavLink className="nav-link" exact={true} to="/contacto">
                Contacto
              </NavLink>
              <NavLink className="nav-link" exact={true} to="/adn">
                Acerca de Nosotros
              </NavLink>
            </Nav>
          )}
        </Nav>

        {props.adminUser ? (
          <Nav>
            <NavItem>
              <NavLink
                className="nav-link text-white mr-3"
                to="/"
                exact={true}
                onClick={cerrarSesion}
              >
                Cerrar Sesion
              </NavLink>
            </NavItem>
          </Nav>
        ) : (
          <Nav>
            <NavLink
              className="nav-link text-white mr-3"
              exact={true}
              to="/Login"
            >
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              Ingresar
            </NavLink>
            <NavLink
              className="nav-link text-white btn btn-danger"
              exact={true}
              to="/suscripcion"
            >
              Subcribeme
            </NavLink>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navegacion;
