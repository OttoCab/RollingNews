import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/common/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import AgregarNoticia from "./components/ADM/AgregarNoticia";
import AgregarCategoria from "./components/ADM/AgregarCategoria";
import ListaNoticia from "./components/ADM/ListaNoticia";
import ListaCategorias from "./components/ADM/ListaCategorias";
import EditarNoticia from "./components/ADM/EditarNoticia";
import EditarCategoria from "./components/ADM/EditarCategoria"
import DetalleCategoria from "./components/ADM/DetalleCategoria";
import { useState, useEffect } from "react";
import React from "react";
import Error404 from './components/Error404'
import Inicio from './components/Inicio.js';
import Login from './components/common/Login';
import ADN from './components/ADN.js';
import Contacto from './components/Contacto.js';
import Navegacion from "./components/common/Navegacion";
import Suscripcion from '../src/components/common/Suscripcion';
import Swal from "sweetalert2";
import Detalles from '../src/components/Detalles';



function App() {
  const URL = process.env.REACT_APP_API_URL;
  const URLCat = process.env.REACT_APP_API_URL2;
  const [noticias, setNoticias] = useState([]);
  const [Categorias, setCategoria] = useState([]);
  const [noticiasDestacadas, setNoticiasDestacadas] = useState([]);
  console.log(noticiasDestacadas,"NOTICAD");

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      const respuesta = await fetch(URL);
      const respuesta2 = await fetch(URLCat);
      console.log(respuesta);
      console.log(respuesta2);
      if (respuesta.status === 200) {
        const listaNoticias = await respuesta.json();
        const listaCategorias = await respuesta2.json();
        setNoticias(listaNoticias);
        setCategoria(listaCategorias);
        const destacadas= listaNoticias.filter((nota)=>(nota.destacada == true)).slice(0,3);
        setNoticiasDestacadas(destacadas);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Router>
      <Navegacion Categorias={Categorias}></Navegacion>
      <Switch>
        <Route exact path="/">
          <Inicio noticias={noticias} consultarAPI={consultarAPI} noticiasDestacadas={noticiasDestacadas}></Inicio>
        </Route>
        <Route exact path="/detalles">
          <Detalles></Detalles>
        </Route>
        <Route exact path="/Noticias">
          <ListaNoticia noticias={noticias} consultarAPI={consultarAPI}>
          </ListaNoticia>
        </Route>
        <Route exact path="/Categorias">
          <ListaCategorias Categorias={Categorias} consultarAPI={consultarAPI}>          
          </ListaCategorias>
        </Route>
        <Route exact path="/Noticia/nuevo">
          <AgregarNoticia consultarAPI={consultarAPI} Categorias={Categorias} noticias={noticias}>
          </AgregarNoticia>
        </Route>
        <Route exact path="/Categorias/nuevaCategoria">
          <AgregarCategoria consultarAPI={consultarAPI}></AgregarCategoria>
        </Route>
        <Route exact path="/Noticia/editar/:idNews">
          <EditarNoticia consultarAPI={consultarAPI}></EditarNoticia>
        </Route>
        <Route exact path="/Categorias/editar/:idCategoria">
          <EditarCategoria consultarAPI={consultarAPI}></EditarCategoria>
        </Route>
        <Route exact path="/Categorias/detalleCategoria/:idCategoria">
          <DetalleCategoria
            noticias={noticias}
            Categorias={Categorias}
          ></DetalleCategoria>
        </Route>
        <Route exact path="/contacto">
          <Contacto></Contacto>
        </Route>
        <Route exact path='/Login'>
          <Login></Login>
        </Route>
        <Route exact path='/ADN'>
          <ADN></ADN>
        </Route>
        <Route exact path='/suscripcion'>
          <Suscripcion></Suscripcion>
        </Route>
        <Route path='*'>
          <Error404></Error404>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
