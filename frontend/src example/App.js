import './App.css';
import "cors";
import Home from './components/Home';
import {BrowserRouter as Router, Route } from "react-router-dom";
import HomeVrca from './components/HomeVrca';
import RandomApi from './components/RandomApi';
import CostomApi from './components/CostomApi';


function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home}/>
        <Route exact path="/vrcaHome" component={HomeVrca} />
        <Route exact path="/RandomApi" component={RandomApi} />
        <Route exact path="/CostomApi" component={CostomApi} />
      </div>
    </Router>
  );
}

export default App;
