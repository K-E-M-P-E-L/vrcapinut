import React, {useEffect, useState} from 'react'


function Filter() {
  const [avatars, setavatars] = useState([{
    userID: "",
    playerName: "",
    avatarID: "",
    avatarName: "",
    assetURL: "",
    imageURL: "",
    releaseStatus: "",
    version: ""
  }])

  useEffect(() => {
    fetch("/avatars").then(res => {
        res.json()
    }).then(jsonRes => setavatars(jsonRes));
  })

    return (
        <div id="contact2">
        <div class="contact2 container2">
          <div><h1 class="section-title2">Kempel'S <span>Avatar</span> Filter</h1></div>
          <input type="search" className="inputAvatar" placeholder="Search For Avatars" value="" onChange=""/>
          <div class="container20">
            <div class="contact-item2">
                <div class="icon2"><img alt="" src=""/></div>
            </div>
          </div>
          </div>
        </div>
    )
}

export default Filter
