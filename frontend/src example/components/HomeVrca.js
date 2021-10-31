import React, {useState, useEffect} from 'react';
import Axios from "axios";


function HomeVrca(props) {
    const [vrcaList, setvrcaList] = useState([]);

    useEffect(() => {
    
        Axios.get("http://localhost:3001/vrca/").then((res) => {
          setvrcaList(res.data);
        });
    
      }, [props]);

      const DeleteAvi = (id) => {
        Axios.delete("http://localhost:3001/vrca/" + id).then((res) => {
              console.log(res.data);
              window.location.reload(false);
    
        });
      };

      const cum = vrcaList.map((val, key) => {
        return <div key={key} className="con_vrcaBox">
          <div className="vrcaBox">
            <img src={val.imageURL} className="vrcaBox_img" alt=""></img>
            <p>USER ID : {val.userID}</p>
            <p>USER NAME : {val.playerName}</p>
            <p>AVATAR ID : {val.avatarID}</p>
            <p>AVATAR NAME : {val.avatarName}</p>
            <p>AVATAR DES : {val.avatarDescription}</p>
            <p>ASSET URL :</p>
            <a href={val.assetURL}>{val.assetURL}</a>
            <p>RELEASE STATUS : {val.releaseStatus}</p>
            <p>VERSION : {val.version}</p>
            <p>LOGGED TIME : {val.logTime}</p>
            <button className="AviRemoveBut" onClick={() => DeleteAvi(val._id)}>Remove Avatar</button> 
          </div>
        </div>
      })

      // const [q, setQ] = useState("");

      // function search(filters){
      //   return filters.filter((vrcaList) => vrcaList.playerName.indexOf(q) > -1)
      // }

      const Nut = () =>{

        var userID = document.getElementById("userid")
        var imageURL = document.getElementById("imageurl")
        var playerName = document.getElementById("playername")
        var avatarID = document.getElementById("avatarid")
        var avatarName = document.getElementById("avatarname")
        var avatarDescription = document.getElementById("avatardescription")
        var assetURl = document.getElementById("asseturl")
        var releaseStatus = document.getElementById("releasestatus")
        var version = document.getElementById("version")
      
        Axios.post("http://localhost:3001/vrca/",{
            userID: userID,
            imageURL: imageURL,
            playerName: playerName,
            avatarID: avatarID,
            avatarName: avatarName,
            avatarDescription: avatarDescription,
            assetURl: assetURl,
            releaseStatus: releaseStatus,
            version: version
        },)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        window.location.reload(false);
      }

    return (
        <div>
            <form id="form" method="post">
                <input className="textBoxToForm" type="text" id="userid" placeholder="user id"></input>
                <input className="textBoxToForm" type="text" id="imageurl" placeholder="image url"></input>
                <input className="textBoxToForm" type="text" id="playername" placeholder="player name"></input>
                <input className="textBoxToForm" type="text" id="avatarid" placeholder="avatar id"></input>
                <input className="textBoxToForm" type="text" id="avatarname" placeholder="avatar name"></input>
                <input className="textBoxToForm" type="text" id="avatardescription" placeholder="avatar description"></input>
                <input className="textBoxToForm" type="text" id="asseturl" placeholder="asset url"></input>
                <input className="textBoxToForm" type="text" id="releasestatus" placeholder="release status"></input>
                <input className="textBoxToForm" type="text" id="version" placeholder="version"></input>
                <button className="buttonBoxToForm" onClick={Nut}>Add a new avatar</button>
            </form>
            <div>
              {/* <input type="text" value={q} onChange={(e) => setQ(e.target.va)}></input> */}
            </div>

            {cum}
        </div>
    )
}

export default HomeVrca
