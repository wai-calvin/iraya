import React from "react";
//Styles
import "./styles/app.scss";
//Components
import Nav from "./components/Nav";
import Body from "./components/Body";
import Player from "./components/Player";

function App() {
  return (
    <div className="App">
      <div className="navBar">
        <Nav />
      </div>
      <Body />
      <Player />
    </div>
  );
}

export default App;
