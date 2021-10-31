const express = require("express");
const router = express.Router();
const avatarSchema = require("../models/avatar");

router.route("/create").post((req, res) =>{
    const userID = req.body.userID;
    const playerName = req.body.playerName;
    const avatarID = req.body.avatarID;
    const avatarName = req.body.avatarName;
    const assetURL = req.body.assetURL;
    const imageURL = req.body.imageURL;
    const releaseStatus = req.body.releaseStatus;
    const version = req.body.version;
    const newAvatarSchema = new avatarSchema({
        userID,
        playerName,
        avatarID,
        avatarName,
        assetURL,
        imageURL,
        releaseStatus,
        version
    });

    newAvatarSchema.save();
})

router.route("/avatars").get((req, res) => {
    avatarSchema.find()
        .then(foundAvatar => res.json(foundAvatar))
});

module.exports = router;