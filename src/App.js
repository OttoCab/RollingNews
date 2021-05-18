
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavegacionAdmin from './components/ADM/NavegacionAdmin';
import Footer from './components/common/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import ListaNoticia from './components/ADM/ListaNoticia';
import AgregarNoticia from './components/ADM/AgregarNoticia';
import AgregarCategoria from './components/ADM/AgregarCategoria';
import ListaCategorias from './components/ADM/ListaCategorias';
import EditarNoticia from './components/ADM/EditarNoticia';
import {useState, useEffect} from 'react';
import React from 'react';
import PgADM from './components/PgADM';

function App() {
  const URL = process.env.REACT_APP_API_URL;
  const URLCat =process.env.REACT_APP_API_URL;
  const [noticias, setNoticias] = useState([]);
  const [nombreCategoria, setNombreCategoria] = useState([]);

  useEffect(()=>{
    consultarAPI();
  },[])

  useEffect(()=>{
    consultarAPICat();
  },[])


  const consultarAPI = async()=>{
    try{
      const respuesta = await fetch(URL);
      console.log(respuesta);
      if(respuesta.status === 200){
        const listaNoticias = await respuesta.json();
        setNoticias(listaNoticias);
      }
    }catch(error){
      console.log(error);
    }
  }

  const consultarAPICat = async()=>{
    try{
      const respuesta2 = await fetch(URLCat);
      console.log(respuesta2);
      if(respuesta2.status === 200){
        const listaCategorias = await respuesta2.json();
        setNombreCategoria(listaCategorias);
      }
    }catch(error){
      console.log(error);
    }
  }
  return (
    <Router>
      <NavegacionAdmin></NavegacionAdmin>
      <Switch>
      <Route exact path="/">
          <PgADM></PgADM>
        </Route>
        <Route exact path="/ADM">
          <ListaNoticia noticias={noticias} consultarAPI={consultarAPI}></ListaNoticia>
        </Route>
        <Route exact path="/ADM/nuevo">
          <AgregarNoticia consultarAPI = {consultarAPI}></AgregarNoticia>
        </Route>
        <Route exact path="/ADM/editar/:idNoticia">
          <EditarNoticia consultarAPI = {consultarAPI}></EditarNoticia>
        </Route>
        <Route exact path="/Categorias/nuevaCategoria">
          <AgregarCategoria></AgregarCategoria>
        </Route>
        <Route exact path="/Categorias">
          <ListaCategorias></ListaCategorias>
        </Route>
        {/* Dejo un Route para lo que sera CATEGORIA, no se donde va */}
        <Route></Route> 
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
