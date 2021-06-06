import React, { useState } from "react";
import { Card, Button, CardGroup } from "react-bootstrap";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrashAlt,
  faHighlighter,
} from "@fortawesome/free-solid-svg-icons";
import ReactHtmlParser from "react-html-parser";

const ItemNoticia = (props) => {
  const URL = process.env.REACT_APP_API_URL;
  const eliminarNoticia = (idNoticia) => {
    console.log(idNoticia);
    Swal.fire({
      title: "¿Quiere eliminar la noticia?",
      text: "No puede volver atras esta accion!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelBButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const URL = `${process.env.REACT_APP_API_URL}/${idNoticia}`;
          const respuesta = await fetch(URL, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          });
          if (respuesta.status === 200) {
            Swal.fire(
              "Eliminada",
              "La noticia fue correctamente eliminada",
              "success"
            );
            //se actualiza los datos de la api para mostrar
            props.consultarAPI();
          }
        } catch (error) {
          console.log(error);
          Swal.fire(
            "Ocurrio un error!",
            "Intentelo de nuevo mas tarde!",
            "error"
          );
        }
      }
    });
  };


  const destacarNoticia = (idN) => {
    console.log(idN);
    Swal.fire({
      title: "¿Va a destacar esta Noticia?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si!",
      cancelButtonText: "No!",
    }).then(async(result) => {
      const URL = `${process.env.REACT_APP_API_URL}/${idN}`;
      if (result.isConfirmed) {
        try{
          const respuesta = await fetch(URL,{
            method:"PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body:JSON.stringify({destacada:true})
          });
          if(respuesta.status === 200){
            const noticiasDestacadas = await respuesta.json();
            console.log(noticiasDestacadas,"NOTICIA DESTACADA");
            Swal.fire(
              "¡Destacada!",
              "La noticia fue destacada!",
              "success"
            );
            props.consultarAPI();
          }
        }catch(error){
          console.log(error);
        }
      } else {
        const respuesta = await fetch(URL,{
          method:"PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body:JSON.stringify({destacada:false})
        });
          Swal.fire(
            "La noticia dejo de destacarse",
            "La noticia sera eliminada de la pagina principal!",
            "success"
          );
          props.consultarAPI();
        
      }
    });
  };

  return (
    <div className="col-sm-12 my-3">
      <CardGroup>
        <Card>
          <div className="d-flex align-items-center justify-content-between mx-3">
            <div>
              <Card.Body>
                <Card.Title>
                  <span className="font-weight-bold fuente">
                    {props.dato.tituloNoticia}
                  </span>
                </Card.Title>
                <Card.Text>{props.dato.categoriaNoticia}</Card.Text>

                <Card.Text>
                  {ReactHtmlParser(props.dato.contenidoNoticia)}
                </Card.Text>
              </Card.Body>
            </div>
            <section className="d-flex flex-column">
              <Link
                className="btn btn-info text-light"
                to={"/Noticia/editar/" + props.dato._id}
              >
                <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
              </Link>
              <Button
                variant="danger"
                className="my-2"
                onClick={() => eliminarNoticia(props.dato._id)}
              >
                <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
              </Button>
              <Button variant="success" className="my-2">
                <FontAwesomeIcon
                  icon={faHighlighter}
                  onClick={() => destacarNoticia(props.dato._id)}
                ></FontAwesomeIcon>
              </Button>
            </section>
          </div>
          <Card.Footer>
            <small className="text-muted">
              {props.dato.autorNoticia} {props.dato.fechaNoticia}
            </small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default ItemNoticia;
