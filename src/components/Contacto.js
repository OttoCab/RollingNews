import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "../components/assets/css/admin.css";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faTwitterSquare, faInstagramSquare, faYoutube} from "@fortawesome/free-brands-svg-icons" 



const Contacto = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState(0);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      email.trim() === "" ||
      telefono.trim() === "" ||
      nombre.trim() === "" ||
      apellido.trim() === "" ||
      mensaje.trim() === ""
    ) {
      setError(true);
      return;
    } else {
      setError(false);
      Swal.fire({
        title: "Gracias por Contactarse con Nosotros",
        icon: "success",
        //   showCancelButton: true,
        confirmButtonColor: "#3085d6",
        //   cancelButtonColor: "#d33",
        confirmButtonText: "salir",
        //   cancelButtonText: "No!",
      }).then((result) => {
        if (result.isConfirmed) {
        } else {
        }
      });
    }
  };

  return (
    <Container>
      <h2 className="text-center fuente my-3">Escribinos</h2>
      <Form className="my-4 px-5" onSubmit={handleSubmit}>
        <hr></hr>
        <Form.Group className="mb-3 fuente">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="email@email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 fuente">
          <Form.Label>Numero de Telefono</Form.Label>
          <Form.Control
            type="text"
            placeholder="123 456 789"
            required
            onChange={(e) => setTelefono(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3 fuente">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Juan"
            required
            onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3 fuente">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Perez"
            required
            onChange={(e) => setApellido(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="fuente">Tu mensaje</Form.Label>
          <CKEditor
            editor={ClassicEditor}
            onChange={(e, editor) => setMensaje(editor.getData())}
            required
          ></CKEditor>
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
        {error === true ? (
          <Alert variant="warning">Todos los campos son obligatorios</Alert>
        ) : null}
      </Form>
      <div className="text-center my-4">
        <h5>Encontranos en:</h5>
          <FontAwesomeIcon  icon={faFacebookSquare} className="fa-3x mx-3"></FontAwesomeIcon>
          <FontAwesomeIcon icon={faInstagramSquare} className="fa-3x mx-3"></FontAwesomeIcon>
          <FontAwesomeIcon icon={faTwitterSquare} className="fa-3x mx-3"></FontAwesomeIcon>
          <FontAwesomeIcon icon={faYoutube} className="fa-3x mx-3"></FontAwesomeIcon>
      </div>
    </Container>
  );
};

export default Contacto;
