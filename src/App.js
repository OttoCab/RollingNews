
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navegacion from './components/common/Navegacion';
import Footer from './components/common/Footer';
import Inicio from './components/Inicio';
import PgADM from './components/ADM/PgADM';
import Contacto from './components/Contacto';
import ADN from './components/ADN';
import "bootstrap/dist/css/bootstrap.min.css";
import ListaNoticia from './components/ADM/ListaNoticia';
import AgregarNoticia from './components/ADM/AgregarNoticia';
import {useState, useEffect} from 'react';
import React from 'react';

function App() {
  const [noticias, setNoticias] = useState([]);

  useEffect(()=>{
    consultarAPI();
  },[])

  const consultarAPI = async()=>{
    try{
      const respuesta = await fetch('http://localhost:3005/News');
      console.log(respuesta);
      if(respuesta.status === 200){
        const listaNoticias = await respuesta.json();
        setNoticias(listaNoticias);
      }
    }catch(error){
      console.log(error);
    }
  }

  return (
    <Router>
      <Navegacion></Navegacion>
      <Switch>
        <Route exact path="/">
          <Inicio></Inicio> 
        </Route>
        <Route exact path="/ADM">
          <ListaNoticia noticias={noticias}></ListaNoticia>
        </Route>
        <Route exact path="/ADM/nuevo">
          <AgregarNoticia></AgregarNoticia>
        </Route>
        <Route exact path="/contact">
          <Contacto></Contacto>
        </Route>
        <Route exact path="/adn">
          <ADN></ADN>
        </Route>
        {/* Dejo un Route para lo que sera CATEGORIA, no se donde va */}
        <Route></Route> 
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
