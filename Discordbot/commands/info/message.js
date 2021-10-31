const { MessageEmbed, Message } = require("discord.js")

module.exports = {
    name : "message",
    aliases : ["msg"],
    run : async(client, message) => {
        const embed = new MessageEmbed()
        .setTitle(`Kempel's discord server`)
        .setDescription(`Welcome to my discord server ;D`)
        .setColor("00ff46")
        .setThumbnail("https://cdn.discordapp.com/attachments/810925592534843412/826055127160062002/unknown.png")

        // message.channel.send() sends back the embed only
        // message.reply() reply sends back with @yourname

        message.channel.send(embed)
    }
}