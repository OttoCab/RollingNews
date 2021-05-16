import React from "react";
import { ListGroup } from "react-bootstrap";

const ItemCategoria = (props) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      <p>
        {props.dato.categoria}

      </p>
      <div>
        {/* <Link
          className="btn btn-warning text-light mr-3"
          to={"/productos/editar/" + props.producto.id}
        >
          <FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon>
        </Link>
        <Button
          variant="danger"
          onClick={() => eliminarProducto(props.producto.id)}
        >
          <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
        </Button> */}
      </div>
    </ListGroup.Item>
  );
};

export default ItemCategoria;
