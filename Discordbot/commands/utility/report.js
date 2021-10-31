const { MessageEmbed, Message } = require("discord.js")

module.exports = {
    name : "report",
    run : async(client, message, args) => {
        const report = new MessageEmbed()
        .setTitle(`Kempel's discord server`)
        .setDescription("Wow you think somethings wrong!")
        .setURL("https://cdn.discordapp.com/attachments/682441433298239494/826742647724310558/vid51515eo0.mov")

        message.channel.send(report)
    }
}