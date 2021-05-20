import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const ItemCategoria = (props) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between shadow p-3 bg-body rounded my-2">
      <p>
      <span className="font-weight-bold">
      {
          props.dato.nombreCategoria
        }
      </span>
      </p>
      <div>
      <Button variant="success">
      <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default ItemCategoria;
