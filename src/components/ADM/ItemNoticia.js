import React from "react";
import { Card, Button, CardGroup } from "react-bootstrap";
import Swal from 'sweetalert2';

const ItemNoticia = (props) => {
  const eliminarNoticia = (idNoticia) =>{
    console.log(idNoticia);
    Swal.fire({
      title: '¿Quiere eliminar la noticia?',
      text: "No puede volver atras esta accion!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelBButtonText: 'Cancelar'
    }).then(async(result) => {
      if (result.isConfirmed) {
        try{
          const URL = `${process.env.REACT_APP_API_URL}/${idNoticia}`;
          const respuesta = await fetch(URL,{
            method: "DELETE",
            headers: {"Content-Type":"application/json"}
          });
          if(respuesta.status === 200){
            Swal.fire(
              'Eliminada',
              'La noticia fue correctamente eliminada',
              'success'
            )
            //se actualiza los datos de la api para mostrar
              props.consultarAPI();
          }
        }catch(error){
          console.log(error);
          Swal.fire(  
            "Ocurrio un error!",
            "Intentelo de nuevo mas tarde!",
            "error"
          );
        }
      }
    })    

  }
  return (
    <div className="col-sm-12 my-3">
      <CardGroup>
        <Card>
          <div className="d-flex align-items-center justify-content-between mx-3">
            <div>
              <Card.Img variant="top" src="holder.js/100px160" />
            </div>
            <div>
              <Card.Body>
                <Card.Title><span className="font-weight-bold">{props.dato.tituloNoticia}</span></Card.Title>
                <Card.Text>
                  {props.dato.categoriaNoticia}
               </Card.Text>
                
                <Card.Text>{props.dato.contenidoNoticia}</Card.Text>
              </Card.Body>
            </div>
          <section className="d-flex flex-column">
            <Button variant="primary" className="my-2" onClick={()=>eliminarNoticia(props.dato.id)}>Eliminar</Button>
            <Button variant="primary" className="my-2">Editar</Button>
            <Button variant="primary" className="my-2">Destacar</Button>
          </section>
            </div>
          <Card.Footer>
            <small className="text-muted">{props.dato.autorNoticia} {props.dato.fechaNoticia}</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default ItemNoticia;
