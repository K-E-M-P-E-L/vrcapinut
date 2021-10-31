const img = require("images-scraper")

const google = new img({
    puppeteer : {
        headless : true,
    }
})

module.exports = {
    name : "image",
    aliases : ["img"],
    description : "This command will search a image for you",
    usage : "?img",
    run : async(client, message, args) => {
        const query = args.join(" ")
        if(!query) return message.channel.send("Please enter a search query")    
        
        const results = await google.scrape(query, 1)
        message.channel.send(results[0].url);
    }
}