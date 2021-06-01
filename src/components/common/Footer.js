import React from "react";
import {Container } from "react-bootstrap";
import AppleStore from '../img/AppleStore.svg';
import googlePlay from '../img/googlePlay.svg';
import logo from '../img/logo.svg'

const Footer = () => {
  return (
    <div className="bg-dark text-light  py-3">
      <Container>
        <article className="row">
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className='text-center'>
            <img src={logo} alt="" className='mb-3' />
            </div>
            <p>Direccion: <br />
            Telefono: <br />
            Mail:</p>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4"></div>
          <div className="col-sm-12 col-md-4 col-lg-4 text-center ">
            <p>No te pierdas de nada!. Descarga nuestra app y mantenete Informado</p>
            <a href="*"><img src={AppleStore} alt="" /></a>
            <a href="*"><img src={googlePlay} alt="" className='my-2' /></a>
            
          </div>

        </article>
        
        <p className='text-center'>
          El logo de RollingNews y sus logotipos son marcas registradas <br />
          &copy; Todos los derechos reservados
        </p>
      </Container>
    </div>
  );
};

export default Footer;
