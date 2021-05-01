
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navegacion from './components/common/Navegacion';
import Footer from './components/common/Footer';
import Inicio from './components/Inicio';
import PgADM from './components/ADM/PgADM';
import Contacto from './components/Contacto';
import ADN from './components/ADN';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navegacion></Navegacion>
      <Switch>
        <Route exact path="/">
          <Inicio></Inicio>
        </Route>
        <Route exact path="/adm">
          <PgADM></PgADM>
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
