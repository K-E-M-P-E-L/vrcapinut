
import React, {useState, useEffect} from 'react';
import Axios from "axios";
import Bands from './Bands';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


function Home(props) {

const [genreList, setgenreList] = useState([]);

useEffect(() => {

    Axios.get("http://localhost:3001/genres/").then((res) => {
      setgenreList(res.data);
    });

  }, [props]);


  return(
  <Router>
    <div>

        <div>
          <Link to="/vrcaHome" className="linkPog">Vrca</Link>
          <Link to="/RandomApi" className="linkPog">RandomApi</Link>
          <Link to="/CostomApi" className="linkPog">CostomApi</Link>
        </div>
      
        <h1>Genre</h1>
    
        <div>
            {genreList.map((val, key) => {
                return <div key={key}>
                <Link  to={"/bandsbygenre/" + val._id} >{val.genreName}</Link>
                </div>
        })}

        
        <Route path="/bandsbygenre/:id" component={Bands} />
        </div>
   
    </div> 
    </Router>
  );

}
export default Home