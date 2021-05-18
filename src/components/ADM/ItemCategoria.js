import React from "react";
import { ListGroup, Button } from "react-bootstrap";

const ItemCategoria = (props) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      <p>
        {props.dato.categoria}
      </p>
      <div>
      <Button variant="warning">Ver</Button>
      </div>
    </ListGroup.Item>
  );
};

export default ItemCategoria;
