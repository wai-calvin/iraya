import React, {useState, useRef} from "react";
//Styles
import "./styles/App.css";
import "./styles/Body.css";
import "./styles/Nav.css";
import "./styles/Player.css";
//Components
import Nav from "./components/Nav";
import Body from "./components/Body";
import Player from "./components/Player";
import About from "./components/About";
//Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
//Util
import data from "./util";

function App() {
  //Ref
  const audioRef = useRef(null);
    //State
    const [songs, setSongs] = useState(data());
    const [currentSong, setCurrentSong] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [songInfo, setSongInfo] = useState({
      currentTime: 0,
      duration: 0,
    });
    // const [libraryStatus, setLibraryStatus] = useState(false);

    const timeUpdateHandler = (e) => {
      const current = e.target.currentTime;
      const duration = e.target.duration;
      setSongInfo({...songInfo, currentTime: current, duration})
    };

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/about" component={About} />       
        </Switch>
        <Body />
        <Player 
          audioRef={audioRef}
          setIsPlaying={setIsPlaying} 
          isPlaying={isPlaying} 
          currentSong={currentSong} 
          setSongInfo={setSongInfo}
          songInfo={songInfo}
        />
        <audio 
          onTimeUpdate={timeUpdateHandler} 
          onLoadedMetadata={timeUpdateHandler}
          ref={audioRef} 
          src={currentSong.audio}>
        </audio>
      </div>
    </Router>
  );
}

export default App;
