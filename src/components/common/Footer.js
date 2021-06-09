import React from "react";
import { Container } from "react-bootstrap";
import AppleStore from "../img/AppleStore.svg";
import googlePlay from "../img/googlePlay.svg";
import logo from "../img/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
  return (
    <div className="bg-dark text-light py-3 mt-5">
      <Container>
        <article className="row">
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="text-center">
              <img src={logo} alt="" className="mb-3" />
            </div>{" "}
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" className="mr-2"></FontAwesomeIcon>{" "}
              Calle Falsa 123
            </p>
            <p>
              <FontAwesomeIcon icon={faWhatsapp} size="lg" className="mr-2"></FontAwesomeIcon>{" "}
              3815863692
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelopeOpen} size="lg" className="mr-2"></FontAwesomeIcon>{" "}
                rollingnewsg1@gmail.com
            </p>
            
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4"></div>
          <div className="col-sm-12 col-md-4 col-lg-4 text-center ">  
            <div>
              <a href="*">
              <img src={AppleStore} alt="" />
            </a>
            <a href="*">
              <img src={googlePlay} alt="" className="my-2" />
            </a>
            </div>
            <p>
              No te pierdas de nada!. Descarga nuestra app y mantenete Informado
            </p>
          </div>
        </article>

        <p className="text-center">
          El logo de RollingNews y sus logotipos son marcas registradas <br />
          &copy; Todos los derechos reservados
        </p>
      </Container>
    </div>
  );
};

export default Footer;
