
import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import Axios from "axios";


function Details(props) {

const [oneBand, setOneBand] = useState([])

const [newBandName, setNewBandName] = useState('')
const [newBandKategori, setNewBandKategori] = useState('')

const [genreList, setgenreList] = useState([]);



let { id } = useParams();

useEffect(() => {

    Axios.get("http://localhost:3001/band/" + id).then((res) => {
      setOneBand(res.data);

    });

    Axios.get("http://localhost:3001/genres/").then((res) => {
      setgenreList(res.data);
    });

  }, [props]);


  const UpdateBand = (id) => {

    Axios.patch("http://localhost:3001/updateband/" + id, {newBandName: newBandName, newBandKategori: newBandKategori});
    window.location.reload(false);

  };


  return(

    <div>
            <h1>Band</h1>


            <select onChange={(Event) => setNewBandKategori(Event.target.value)}>
                {genreList.map((val, key) => {
                    return <option key={key} value={val._id}>{val.genreName}</option>
                })}
            </select>

            <input type="text" placeholder={oneBand.bandName} onChange={(Event) => setNewBandName(Event.target.value)}></input>
            <p>
            <button onClick={() => UpdateBand(oneBand._id)}>Rediger Band</button>
            </p>

    </div>
  );

}
export default Details