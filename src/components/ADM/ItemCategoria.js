import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEdit,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ItemCategoria = (props) => {
  const eliminarCategoria = (idCategoria) => {
    console.log(idCategoria);
    Swal.fire({
      title: "¿Quiere eliminar esta Categoria?",
      text: "¡Se Eliminaran todas las Noticias relacionadas con la categoria!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelBButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const URLCat = `${process.env.REACT_APP_API_URL2}/${idCategoria}`;
        try {
          const respond = await fetch(URLCat, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          });
          eliminarNoticias(idCategoria);
          if (respond.status === 200) {
            Swal.fire(
              "Eliminada",
              "La categoria y las noticias fueron correctamente eliminadas",
              "success"
            );
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

    const eliminarNoticias = (idCategoria)=>{
       props.noticias.filter(
        (nota) => nota.idCategoriaNoticia === idCategoria
        ).map(async(notaFiltrada)=>{
          const notiFinal = notaFiltrada._id;
          console.log(notiFinal, "FILTRO");
          try{
            const URL = `${process.env.REACT_APP_API_URL}/${notaFiltrada._id}`;
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
            }
          }catch (error) {
            console.log(error);
            Swal.fire(
              "Ocurrio un error!",
              "Intentelo de nuevo mas tarde!",
              "error"
            );
          }
        })
    }

  return (
    <ListGroup.Item className="d-flex justify-content-between shadow p-3 bg-body rounded my-2">
      <p>
        <span className="font-weight-bold">
          {props.categoria.nombreCategoria}
        </span>
      </p>
      <div>
        <Link
          className="btn btn-success text-light"
          to={"/Categorias/detalleCategoria/" + props.categoria._id}
        >
          <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
        </Link>
        <Button
          variant="danger"
          className="mx-2"
          onClick={() => eliminarCategoria(props.categoria._id)}
        >
          <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
        </Button>
        <Link
          className="btn btn-info text-light"
          to={"/Categorias/editar/" + props.categoria._id}
        >
          <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
        </Link>
      </div>
    </ListGroup.Item>
  );
};

export default ItemCategoria;
