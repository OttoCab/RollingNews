import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const ItemCategoria = (props) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      <p>
        {
          props.dato.nombreCategoria
        }
        
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
