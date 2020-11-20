import React from "react";
//Styles
import "./styles/App.css";
import "./styles/Body.css";
import "./styles/Nav.css";
//Components
import Nav from "./components/Nav";
import Body from "./components/Body";
import Player from "./components/Player";
import About from "./components/About";
import Home from "./components/Home";
//Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/about" component={About} />       
        </Switch>
        <Body />
        <Player />
      </div>
    </Router>
  );
}

export default App;
