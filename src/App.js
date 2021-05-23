import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./pages/home"
import Law from "./pages/Law"
import Media from "./pages/Media"
import About from "./pages/About"
import Art from "./pages/Art"
import Tutoring from "./pages/Tutoring"
import Other from "./pages/Other"
import Contact from "./pages/Contact"

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/media">
            <Media/>
          </Route>
          <Route path="/law">
            <Law/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/art">
            <Art />
          </Route>
          <Route path="/tutoring">
            <Tutoring />
          </Route>
          <Route path="/other">
            <Other />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
