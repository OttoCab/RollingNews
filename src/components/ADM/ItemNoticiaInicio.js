import React from "react";
import { Card } from "react-bootstrap";

const ItemNoticiaInicio = (props) => {
  return (
    <div className="col-sm-12 col-md-4 my-4">
      <Card className="cardAnimation">
        <Card.Img variant="top" src={props.dato.imagenNoticia}></Card.Img>
        <Card.Body>
          <Card.Text className="scale-texts">
            {/* <h3 className="font-weight-bold ml-3 mt-2">{props.dato.tituloNoticia}</h3> */}
            <h4><span>{props.dato.tituloNoticia}</span></h4>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemNoticiaInicio;
