const {Collection, Client, Discord, MessageEmbed} = require('discord.js')
const fs = require('fs')
const request = require(`request`);
const client = new Client({
    disableEveryone: true,
});


const mongoose = require("mongoose")

mongoose.connect(require("./config.json").mongodb, {
    useUnifiedTopology : true,
    useNewUrlParser : true,
}).then(console.log("Connected to mogo db!"))

const blacklist = require("./models/blacklist")
const prefixSchema = require("./models/prefix")
const avatarSchema = require("./models/avatar")

const config = require('./config.json')
const prefix = config.prefix
const token = config.token



client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");


["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
}); 
/**
 * @param {Client} client
 */
    client.prefix = async function(message) {
        let custom;

        const data = await prefixSchema.findOne({ Guild : message.guild.id })
            .catch(err => console.log(err))

            if(data) {
                custom = data.Prefix;
            } else {
                custom = prefix;
            }
            return custom;
    }




client.on('ready', () => {
    client.user.setActivity(`${prefix}help`)
    console.log(`${client.user.username} ✅`)
})


client.on('message', async message =>{
    const p = await client.prefix(message)
    if(message.mentions.users.first()) {
        if(message.mentions.users.first().id == "825769859979018272") return message.channel.send(`Prefix in ${message.guild.name} is ${p}`)
    }
    if(message.author.bot) return;
    if(!message.content.startsWith(p)) return;
    blacklist.findOne({ id : message.author.id }, async(err, data) =>{
        if(err) throw err;
        if(!data) {
            if(!message.guild) return;
            if(!message.member) message.member = await message.guild.fetchMember(message);
            const args = message.content.slice(p.length).trim().split(/ +/g);
            const cmd = args.shift().toLowerCase();
            if(cmd.length == 0 ) return;
            let command = client.commands.get(cmd)
            if(!command) command = client.commands.get(client.aliases.get(cmd));
            if(command) command.run(client, message, args) 
        } else {
            message.channel.send("You are blacklisted feels bad man xD")
        }
    })
})


// const usersMap = new Map();
// const LIMIT = 5;
// const TIME = 7000;
// const DIFF = 3000;

// client.on('message', async(message) => {
//     if(message.author.bot) return;
//     if(usersMap.has(message.author.id)) {
//         const userData = usersMap.get(message.author.id);
//         const { lastMessage, timer } = userData;
//         const difference = message.createdTimestamp - lastMessage.createdTimestamp;
//         let msgCount = userData.msgCount;
//         console.log(difference);

//         if(difference > DIFF) {
//             clearTimeout(timer);
//             console.log('Cleared Timeout');
//             userData.msgCount = 1;
//             userData.lastMessage = message;
//             userData.timer = setTimeout(() => {
//                 usersMap.delete(message.author.id);
//                 console.log('Removed from map.')
//             }, TIME);
//             usersMap.set(message.author.id, userData)
//         }
//         else {
//             ++msgCount;
//             if(parseInt(msgCount) === LIMIT) {
//                 let muterole = message.guild.roles.cache.find(role => role.name === 'muted');
//                 if(!muterole) {
//                     try{
//                         muterole = await message.guild.roles.create({
//                             name : "muted",
//                             permissions: []
//                         })
//                         message.guild.channels.cache.forEach(async (channel, id) => {
//                             await channel.createOverwrite(muterole, {
//                                 SEND_MESSAGES: false,
//                                 ADD_REACTIONS : false
//                             })
//                         })
//                     }catch (e) {
//                         console.log(e)
//                     }
//                 }
//                 message.member.roles.add(muterole);
//                 message.channel.send('You have been muted!');
//                 setTimeout(() => {
//                     message.member.roles.remove(muterole);
//                     message.channel.send('You have been unmuted!')
//                 }, TIME);
//             } else {
//                 userData.msgCount = msgCount;
//                 usersMap.set(message.author.id, userData);
//             }
//         }
//     }
//     else {
//         let fn = setTimeout(() => {
//             usersMap.delete(message.author.id);
//             console.log('Removed from map.')
//         }, TIME);
//         usersMap.set(message.author.id, {
//             msgCount: 1,
//             lastMessage : message,
//             timer : fn
//         });
//     }
// })

client.on("guildDelete", async (guild) => {
    prefixSchema.findOne({ Guild: guild.id }, async(err, data) => {
        if(err) throw err;
        if(data) {
            prefixSchema.findOneAndDelete({ Guild : guild.id }).then(console.log("deleted data."))
        }
    })
})

client.login(token)
