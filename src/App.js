import React from 'react';
import {Switch,Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import BestSeller from "./components/BestSeller";
import Authors from "./components/Authors"
function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/bestseller" component={BestSeller} />
        <Route path="/authors" component={Authors} />
        <Route path="/cart" component={Cart} />
        <Route path="/default" component={Default} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
