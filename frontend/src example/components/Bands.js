
import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import Axios from "axios";
import Details from './Details';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


function Bands(props) {

const [bandList, setBandList] = useState([]);

let { id } = useParams();

useEffect(() => {

    Axios.get("http://localhost:3001/bandsbygenre/" + id).then((res) => {
      setBandList(res.data);

    });

  }, [props]);


  const DeleteBand = (id) => {
    Axios.delete("http://localhost:3001/deleteband/" + id).then((res) => {
          console.log(res.data);
          window.location.reload(false);

    });
  };

  return(

    <div>
            <h1>Bands</h1>
        <Router>
            <div>
                {bandList.map((val, key) => {
                    return <div key={key}>
                    <Link  to={"/band/" + val._id} >{val.bandName}</Link>  <button onClick={() => DeleteBand(val._id)}>Slet Band</button>
                </div>
                })}
                <Route exact path="/band/:id" component={Details} />
            </div>
        </Router>  

    </div>
  );

}

export default Bands