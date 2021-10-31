import React, {useState, useEffect} from 'react';
import Axios from "axios";


function RandomApi(props) {
    
    const [randomApiList, setRandomApiList] = useState([]);

    useEffect(() => {
    
        Axios.get("https://swapi.dev/api/people/1/").then((res) => {
          setRandomApiList(res.data);
        });
    
      }, [props]);

    console.log(randomApiList)

        return(
            <div>
                <p>Name : {randomApiList.name}</p>
            </div>
        )
   
}

export default RandomApi
