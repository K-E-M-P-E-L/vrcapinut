const mongoose = require("mongoose")

let Schema = new mongoose.Schema({
    userID: {
        type: String,
        required: false
    },  
    playerName: {
        type: String,
        required: false
    },
    avatarID: {
        type: String,
        required: true
    },
    avatarName: {
        type: String,
        required: true
    },
    assetURL: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    },
    releaseStatus: {
        type: String,
        required: false
    },
    version: {
        type: String,
        required: false
    },
    logTime: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model("avatar", Schema)