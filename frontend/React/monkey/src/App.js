import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import File from "./page/File";
import Home from "./page/Home"
import Picture from "./page/Picture";
import Video from "./page/Video"

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home}/>
        <Route exact path="/Video" component={Video}/>
        <Route exact path="/Picture" component={Picture}/>
        <Route exact path="/Files" component={File}/>
      </div>
    </Router>
  );
}

export default App;
