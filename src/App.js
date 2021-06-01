import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/common/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import ListaNoticia from "./components/ADM/ListaNoticia";
import AgregarNoticia from "./components/ADM/AgregarNoticia";
import AgregarCategoria from "./components/ADM/AgregarCategoria";
import ListaCategorias from "./components/ADM/ListaCategorias";
import EditarNoticia from "./components/ADM/EditarNoticia";
import { useState, useEffect } from "react";
import React from "react";
import Error404 from './components/Error404'
import DetalleCategoria from './components/ADM/DetalleCategoria'
import Inicio from './components/Inicio.js';
import Login from './components/ADM/Login.js';
import ADN from './components/ADN.js';
import Contacto from './components/Contacto.js';
import Navegacion from "./components/common/Navegacion";
import Detalles from "./components/Detalles";
import Suscripcion from './components/Suscripcion';


function App() {
  const URL = process.env.REACT_APP_API_URL;
  const URLCat = process.env.REACT_APP_API_URL2;
  const [noticias, setNoticias] = useState([]);
  const [Categorias, setCategoria] = useState([]);

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
          <Inicio noticias={noticias} consultarAPI={consultarAPI}></Inicio>
        </Route>
        <Route exact path="/Noticias">
          <ListaNoticia
            noticias={noticias}
            consultarAPI={consultarAPI}
          ></ListaNoticia>
        </Route>
        <Route exact path='/Detalles'>
        {/*Ruta remporal, es solo para poder visualizarla y maquetarla*/}
          <Detalles></Detalles>
        </Route>
        <Route exact path="/Noticia/nuevo">
          <AgregarNoticia
            consultarAPI={consultarAPI}
            Categorias={Categorias}
            noticias={noticias}
          ></AgregarNoticia>
        </Route>
        <Route exact path="/Noticia/editar/:idNoticia">
          <EditarNoticia consultarAPI={consultarAPI}></EditarNoticia>
        </Route>
        <Route exact path="/Categorias/nuevaCategoria">
          <AgregarCategoria consultarAPI={consultarAPI}></AgregarCategoria>
        </Route>
        <Route exact path="/Categorias">
          <ListaCategorias Categorias={Categorias}></ListaCategorias>
        </Route>
        <Route exact path="/Categorias/detalleCategoria/:idCategoriaNoticia">
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
