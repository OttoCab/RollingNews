import React from "react";
import { ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ItemCategoria = (props) => {
  console.log(props);
  return (
    <ListGroup.Item className="d-flex justify-content-between shadow p-3 bg-body rounded my-2">
      <p>
        <span className="font-weight-bold">{props.dato.nombreCategoria}</span>
      </p>
      <div>
        <Link
          className="btn btn-success text-light"
          to={"/Categorias/detalleCategoria/" + props.dato.id}
        >
          <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
        </Link>
      </div>
      
    </ListGroup.Item>
  );
};

export default ItemCategoria;
