import React, {useState} from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import Swal from "sweetalert2";
import '../assets/css/admin.css';

const AgregarNoticia = (props) => {
  const [categoriaNoticia, setCategoriaNoticia] = useState("");
  const [idCategoriaNoticia, setidCategoriaNoticia] = useState(0);
  const [tituloNoticia, setTituloNoticia] = useState("");
  const [autorNoticia, setAutorNoticia] = useState("");
  const [fechaNoticia, setFechaNoticia] = useState("");
  const [imagenNoticia, setImagenNoticia] = useState("");
  const [contenidoNoticia, setContenidoNoticia] = useState("");
  const [error, setError] = useState(false);
  const URL = process.env.REACT_APP_API_URL;
  // const URLCat =process.env.REACT_APP_API_URL2;
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      // categoriaNoticia.trim() === "" ||
      tituloNoticia.trim() === "" ||
      autorNoticia.trim() === "" ||
      fechaNoticia.trim() === "" ||
      // imagenNoticia.trim() === ""||
      contenidoNoticia.trim() === ""
    ){
      setError(true); 
      return;
    } else {
      setError(false);
      // objeto
      const noticia = {
        categoriaNoticia,
        idCategoriaNoticia,
        tituloNoticia,
        autorNoticia,
        fechaNoticia,
        imagenNoticia,
        contenidoNoticia,
      };
      console.log(noticia);

      try {
        console.log("noticiaID", noticia);
        console.log("las categorias :", props.Categorias);
        const resultadoCat = props.Categorias.find((categoria)=>{
        
         return categoria.id == idCategoriaNoticia;
        });
        const nombreC = resultadoCat.nombreCategoria;
        setCategoriaNoticia(nombreC);
   
        const enviarNoticia = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({...noticia,categoriaNoticia:nombreC}),
        };
        const respuesta = await fetch(URL, enviarNoticia);
        console.log(nombreC, "GUARDADA");
        if (respuesta.status === 201) {
          Swal.fire(
            "Producto agregado!",
            "Se agrego un nuevo producto!",
            "success"
          );
          //actualiza la lista de noticias
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
  };

  return (
    <Container>
      <h1 className="text-center my-4 fuente">Alta de  Noticias</h1>
      <Form
        className="my-4 shadow p-3 mb-5 bg-body rounded"
        onSubmit={handleSubmit}
      >
     <Form.Group className="fuente">
          <Form.Label>Seleccione la Categoria</Form.Label>
          <Form.Control
            as="select"
            placeholder="seleccione..."
            custom
            onChange={(e) => setidCategoriaNoticia(e.target.value)}
              // setidCategoriaNoticia(e.target.value)}
            >
              <option>Seleccionar. . .</option>
            {props.Categorias.map((opcion, indice) => (
              <option value={opcion.id} key={indice}>{opcion.nombreCategoria}</option>
              ))}
          </Form.Control>
        </Form.Group>

        <Form.Group className="fuente">
          <Form.Label> Titulo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el Titulo de la Noticia"
            onChange={(e) => setTituloNoticia(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="fuente">
          <Form.Label > Autor</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese al Autor de la Noticia"
            onChange={(e) => setAutorNoticia(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="fuente">Seleccione una Fecha</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setFechaNoticia(e.target.value)}
          />
        </Form.Group>


        <Form.Group>
          <Form.Label className="fuente">Seleccione una Imagen</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setFechaNoticia(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label className="fuente">Contenido</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={(e) => setContenidoNoticia(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="my-4 fuente">
          Guardar
        </Button>
        {
          (error === true)?(<Alert variant="warning">Todos los campos son obligatorios</Alert>):(null )
        }   
      </Form>
    </Container>
  );
};

export default AgregarNoticia;
