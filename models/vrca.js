const mongoose = require("mongoose");

const vrcaSchema = new mongoose.Schema({
    userID: {
        type: String,
        required: true
    },  
    playerName: {
        type: String,
        required: true
    },
    avatarID: {
        type: String,
        required: true
    },
    avatarName: {
        type: String,
        required: true
    },
    avatarDescription: {
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
        required: true
    },
    version: {
        type: String,
        required: true
    },
    logTime: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model("Vrca", vrcaSchema);