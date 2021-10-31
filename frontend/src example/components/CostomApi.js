import React, {useState, useEffect} from 'react';
import Axios from "axios";


function CostomApi(props) {
    
    const [costomList, setcostomList] = useState([]);

    useEffect(() => {
    
        Axios.get("").then((res) => {
            setcostomList(res.data);
        });
    
      }, [props]);


    return (
        <div>
            {costomList.map((val, key) => {
                return <div key={key} className="con_vrcaBox">
                  <div className="vrcaBox">
                    <img src={val.file_url} className="vrcaBox_img" alt=""></img>
                  </div>
                </div>
        })}
        </div>
    )
}

export default CostomApi
