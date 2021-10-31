const { Message } = require("discord.js")

module.exports = {
    name : "removerole",
    run : async(client, message, args) => {
        /**
         * @param {Message} message
         */
        // checking if author has permisions
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("you do not have permission")

        const target = message.mentions.members.first() //member = mentions
        if(!target) return message.channel.send("No member specified") //when no member is pinged
        const role = message.mentions.roles.first() //roles = mentions
        if(!role) return message.channel.send("No role specified") //when no role is specified

        await target.roles.remove(role)
        message.channel.send(`${target.user.username} role has been removed`)
    }
}