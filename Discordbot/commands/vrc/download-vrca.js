const { Message, MessageAttachment } = require("discord.js")
var fs = require('fs');
var https = require('https');
var JFile = require('jfile');
const avatarSchema = require("../../models/avatar")

module.exports = {
    name : "download-vrca",
    aliases : ["d-vrca", "vrca-download", "vrca-d"],
    run : async(client, message, args) => { 
        const res = await args
        if(!message.attachments.first()) return message.channel.send("Please gib file!") 

            //console.log(message.attachments.first().url)

            const file = fs.createWriteStream(`./output/${message.attachments.first().name}`);
            const request = https.get(message.attachments.first().url, function(response) {
                response.pipe(file);
            });

            playerName = []

            function sleep(ms) {
                return new Promise(
                  resolve => setTimeout(resolve, ms)
                );
              }


              await sleep(5000);
                // fs.readFile(`./output/${message.attachments.first().name}`, 'utf8' , (err, data) => {
                //     if (err) {
                //         console.error(err)
                //         return
                //     }
                //     console.log(data) 
                //     message.channel.send(data)
                
                //     console.log(data)
                // })

                var txtFile = new JFile(`./output/${message.attachments.first().name}`);

                // var playerNameInfo = ["Player Name:", "Author:", "Avatar AuthorName:"]
                // var avatarIdInfo = ["Avatar ID:", "AvatarID:"]
                // var avatarNameInfo = ["Avatar Name:", "AvatarName:"]
                // var authorIdInfo = ["Author ID:", "AuthorID:"]
                // var assetURLInfo = ["Asset URL:", "AssetsURL:", "Avatar AssetUrl:"]
                // var imageURLInfo = ["ImageURL:", "Avatar Picture URL:", "AvatarPictureURL:", "Avatar ImageURL:"]
                // var releaseStatusInfo = ["Release Status:", "ReleaseStatus:"]

                fs.readFile(`./output/${message.attachments.first().name}`, 'utf8', function (err,data) {

                    var formatted = data.replace("Avatar Author", "Player Name")
                    .replace("Avatar Picture URL", "ImageURL")
                    .replace("Avatar AuthorName", "Player Name")
                    .replace("Avatar AssetUrl", "Asset URL")
                    .replace("Avatar ImageURL", "Image URL")
                    .replace("ReleaseStatus", "Release Status")
                    .replace("NameName", "Name")
                    .replace("AvatarID", "Avatar ID")


                    fs.writeFile(`./output/${message.attachments.first().name}`, formatted, 'utf8', function (err) {
                      if (err) return console.log(err);
                    });
                  });

                await sleep(5000);

                var playerName = txtFile.grep("Player Name:");
                var avatarId = txtFile.grep("Avatar ID:");
                var avatarName = txtFile.grep("Avatar Name:");
                var authorId = txtFile.grep("Author ID:");
                var assetURL = txtFile.grep("Asset URL:");
                var imageURL = txtFile.grep("Image URL:");
                var releaseStatus = txtFile.grep("Release Status:");
                var version = txtFile.grep("version:");

                console.log(avatarName)

                class vrc {
                    constructor(playerName, avatarId, avatarName, authorId, assetURL, imageURL, releaseStatus, version) { 
                        this.playerName = playerName
                        this.avatarId = avatarId
                        this.avatarName = avatarName
                        this.authorId = authorId
                        this.assetURL = assetURL
                        this.imageURL = imageURL
                        this.releaseStatus = releaseStatus
                        this.version = version
                    }
                }

                var vrcArray = []
                var data = ""

                for (let i = 0; i < playerName.length; i++) {
                    var tempVrc = new vrc(playerName[i], avatarId[i], avatarName[i], authorId[i], assetURL[i], imageURL[i], releaseStatus[i], version[i])
                    tempVrc = new avatarSchema({
                        userID : authorId[i],
                        playerName : playerName[i],
                        avatarID : avatarId[i],
                        avatarName : avatarName[i],
                        assetURL : assetURL[i],
                        imageURL : imageURL[i],
                        releaseStatus : releaseStatus[i],
                        version : version[i]
                    })
                    tempVrc.save()
                    vrcArray.push(tempVrc)
                }
                
                 
                var data1 = JSON.stringify(vrcArray);
                fs.writeFileSync(`./output/Avatars.json`, data1);
            
        
                await sleep(5000);

                message.channel.send("Avatarlogs has been stored!")
          
        /*
        const attachment = new MessageAttachment("Link-go-here")
        message.channel.send(message.author, attachment)
        msg.attachments.first().url
        */
        
    }
}