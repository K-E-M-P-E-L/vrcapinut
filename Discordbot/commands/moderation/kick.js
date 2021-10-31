module.exports = {
    name : "kick",
    run : async(client, message, args) => {
        if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send("I do not have permisson");
        // ^^ its checking if bot has permissions

        const Member = message.mentions.members.first() // checking for member mentions
        if(!Member) return message.channel.send("Please specify a member to kick");
        // if there is no member ^^ that will return message

        await Member.kick({ reason : args.slice(1).join(" ") })
        // args.slice(1).join(" ") means it slices the member var and takes the text after it.

        message.channel.send(`${Member.user.tag} was kicked from the server!`)
        // sends member was kicked from server
    }
}