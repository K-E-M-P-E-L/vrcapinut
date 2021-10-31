const { Client, Message } = require("discord.js")

module.exports = {
    name : "ticket",
    /**
     * @param {Client} client
     * @param {Message} message
     */
    run : async(client, message) => {
        message.channel.send("Monkey")
    }
}