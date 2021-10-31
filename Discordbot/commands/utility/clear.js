module.exports = {
    name : "clear",
    aliases : ["purge"],
    run : async(client, message, args) => {
        if(!message.member.hasPermission("MANGE_MESSAGES")) return message.channel.send("You do not have permission to use this command")
        if(!args[0]) return message.channel.send("Please specified and amount to delete (1-99)") // args is the end of the command ?help ..... all after is so this command is checking if there is anything here
        if(isNaN(args[0])) return message.channel.send("Only numbers are allowed") // checking if args is a number or not
        if(parseInt(args[0]) > 99) return message.channel.send("The max amount of message you can delete is 99") //Max amount of messages that can get deletet
        
        
        await message.channel.bulkDelete(parseInt(args[0]) + 1) // deleting messages
            .catch(err => console.log(err))
        message.channel.send(`Deleted ${args[0]} messages!`).then(m => m.delete({ timeout : 5000 })) //sending the sucess mssage after 5sec
        
    }
}