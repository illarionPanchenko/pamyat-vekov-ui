import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import { Main } from './components/Main/Main'
import{ BrowserRouter as Router, Route,  Switch } from "react-router-dom";
import { Footer } from './components/footer/Footer'
import { Info } from './components/info/Info'
import { Service } from "./components/service/ service";
import Provinces from "./components/provinces/provinces";
import { Contacts } from "./components/contacts/contacts";

function App() {
  return (
      <Router>
    <div className="App">
     <Header/>
        <Switch>
            <Route path="/" exact>
                <Main/>
            </Route>
            <Route path='/provinces'>
                <Provinces/>
            </Route>
            <Route path='/info'>
                <Info/>
            </Route>
            <Route path='/services'>
                <Service/>
            </Route>
            <Route path='/contacts'>
                <Contacts/>
            </Route>
        </Switch>
     <Footer/>
    </div>
      </Router>
  );
}

export default App;
