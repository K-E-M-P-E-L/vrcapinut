var fs = require('fs');
const avatarSchema = require("../../models/avatar")
var MongoClient = require('mongodb').MongoClient;
const { MessageEmbed, Message, MessageAttachment } = require("discord.js")
var url = require("../../config.json").mongodb;
const assert = require('assert');


module.exports = {
    name : "avatar",
    aliases : ["avatarname", "avatarName"],
    run : async(client, message, args) => {
        const res = await args
        var dio = res.toString()


            const cliente = new MongoClient(url);
            
                try {
                  await cliente.connect();
                  '',
                  { useNewUrlParser: true, useUnifiedTopology: true };

                  const database = cliente.db("vrca");
                  const avatars = database.collection("avatars");
                  // query for movies that have a runtime less than 15 minutes
                 // const query = {playerName: 'Player Name: '+dio+'\r'};
                  //const options = {sort: { title: 1 }, projection: { /*playerName: 1*/ },};
                  const cursor = await avatars.aggregate([{'$search': {'index': 'default', 'text': {'query': dio, 'path': {'wildcard': '*'}}}}]).toArray();
                  


                // print a message if no documents were found
                //if ((await cursor.count()) === 0) {
                //  console.log("No documents found!");
                // }
                // replace console.dir with your callback to access individual elements
                //await cursor.forEach(console.dir);
                // var mystring = ""


          
               
 
              
                 
                //var attachment = MessageAttachment(path)
                //message.channel.send(attachment)
                 

              //  await cursor.forEach(); [{"":""}]
                 if(cursor.length > 5){  
                  const tmp = require('tmp');

                  function yeah() {
                      var str = '';
                    for (let i = 0; i < cursor.length; i++) {
                        let playerName = cursor[i].playerName
                        let userID = cursor[i].userID
                        let avatarID = cursor[i].avatarID
                        let avatarName = cursor[i].avatarName
                        let avatarDescription = cursor[i].avatarDescription
                        let assetURL = cursor[i].assetURL
                        let imageURL = cursor[i].imageURL
                        let releaseStatus = cursor[i].releaseStatus
                        let version = cursor[i].version
                        //console.log(cursor[index].playerName);                 
                        imageURL = imageURL.split(" ")
                     
    
                        let toDelete = ["Image", "URL:", "ImageURL:", "Avatar", "AvatarPictureURL:", "Picture"]
                        let test = imageURL.filter( item => !toDelete.includes(item) )

                        assetURL = assetURL.split(" ")
                     
    
                        let toDelete1 = ["Asset", "URL:", "AssetURL:", "Avatar"]
                        let test2 = assetURL.filter( item => !toDelete1.includes(item) )
                     // console.log(test) // [1]
                     // console.log(imageURL) // [1, 5, 6, 7, 8]
var avatarhtml = 
`
<div class="card item">
    <h3 class="card_title">${playerName}</h3>
    <h4>${userID}</h4>
    <h4>${avatarID}</h4>
    <h4>${avatarName}</h4>
    <h4>Asset URL: <a href="${test2}">Download The Vrca File</a></h4>
    <h4>${releaseStatus}</h4>
    <h4>${version}</h4>
    <img src="${test}" width="400" alt="Avatar image">
</div>                
`
                    

                    str += avatarhtml
                    //console.log(str);
                    
                    }
                    return str
                     }
                  
 
                  tmp.file({ mode: 0o644, prefix: dio, postfix: '.html' }, function _tempFileCreated(err, path, fd, cleanupCallback) {
                    if (err) throw err;

var templeAte = 
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
    <link rel="icon" href="" />
    <title>Document</title>
    <style>
        body {
            background-color: #393939;
            font-family: 'Montserrat', sans-serif;
            color: rgb(202, 202, 202);
            background-image: url("https://cdn.discordapp.com/attachments/826999910233931806/834771808758530048/wa.jpg");
            background-repeat: no-repeat;
            background-attachment: fixed;
        }
        .body{          
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: start;
            align-items: auto;
            align-content: start
        }

        .body:after {
            display: block;
            margin: 10px;
            flex: 999 999 auto;
        }

        .item {
        flex: 0 0 auto;
        margin: 10px;
        }

        .card {
            border-left: rgb(0, 214, 0) 2px solid;
            border-radius: 3px;
            background-color: rgba(0, 0, 0, 0.287);
            padding: 10px;
            width: 420px;
            
        }

        .a {
            color: red;
        }

        h1{
            text-align: center;
        }

        footer {
            text-align: center;
        }

    </style>
</head>
<body>
    <header><h1>Welcome to the perfect wether my broskis.</h1></header>
    <div class="body">
        ${yeah()}
    </div>
    <footer><h3>copyright 2021</h3><p>Made by kempelDev#2120</p></footer>
</body>
</html>
`

                    fs.writeFile(path, templeAte, function (err) {
                      if (err) throw err;
                    });

                    var attachment = new MessageAttachment(path)
                    message.channel.send(attachment)
                    console.log('File: ', path);
                    console.log('Filedescriptor: ', fd);
                    cleanupCallback();
                  });
                 }else {
                   for (let i = 0; i < cursor.length; i++) {
                    var playerName = cursor[i].playerName
                    var userID = cursor[i].userID
                    var avatarID = cursor[i].avatarID
                    var avatarName = cursor[i].avatarName
                    var avatarDescription = cursor[i].avatarDescription
                    var assetURL = cursor[i].assetURL
                    var imageURL = cursor[i].imageURL
                    var releaseStatus = cursor[i].releaseStatus
                    var version = cursor[i].version
                    //console.log(cursor[index].playerName);                 
                    imageURL = imageURL.split(" ")
                 

                  const toDelete = ["Image", "URL:", "ImageURL:", "Avatar Picture URL:", "AvatarPictureURL:", "Avatar ImageURL:"]
                  const test = imageURL.filter( item => !toDelete.includes(item) )
                 // console.log(test) // [1]
                 // console.log(imageURL) // [1, 5, 6, 7, 8]


                 if(version === undefined){
                    version = "There is no version info to this avatar."
                 } else {
                    version = version
                 }

                 const embed = new MessageEmbed()
                 .setTitle(playerName)
                 .addField(userID, "\u200b")
                 .addField(avatarID, "\u200b")
                 .addField(avatarName, "\u200b")
                 .addField(assetURL, "\u200b")
                 .addField(releaseStatus, "\u200b")
                 .addField(version, "\u200b")
                 .setImage(test.toString())
                 .setColor("00ff46")
                 
                 message.channel.send(embed)
                 
                  //console.log(tes
                  }
                 }
                // console.log( await cursor )
                 // console.log( mystring )

                } finally {
                  await cliente.close();
                }
              
    }

}