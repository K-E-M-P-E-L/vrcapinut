const express = require("express");
const router = express.Router();
const Vrca = require("../models/vrca");

router.get("/", async (req, res) => {
    try{
        const vrcas = await Vrca.find()
        res.json(vrcas)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.get("/:id", getVrca, (req, res) => {
    res.send(res.vrca.author)
})

router.post("/", async (req, res) => {
    const vrca = new Vrca({
        userID: req.body.userID,
        playerName: req.body.playerName,
        avatarID: req.body.avatarID,
        avatarName: req.body.avatarName,
        avatarDescription: req.body.avatarDescription,
        assetURL: req.body.assetURL,
        imageURL: req.body.imageURL,
        releaseStatus: req.body.releaseStatus,
        version: req.body.version,
        logTime: req.body.logTime
    })
    try {
        const newVrca = await vrca.save()
        res.status(201).json(newVrca)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

router.patch("/:id", getVrca, async (req, res) => {
    if (req.body.userID != null) {
        res.vrca.userID = req.body.userID
    }
    if (req.body.playerName != null) {
        res.vrca.playerName = req.body.playerName
    }
    if (req.body.avatarID != null) {
        res.vrca.avatarID = req.body.avatarID
    }
    if (req.body.avatarName != null) {
        res.vrca.avatarName = req.body.avatarName
    }
    if (req.body.avatarDescription != null) {
        res.vrca.avatarDescription = req.body.avatarDescription
    }
    if (req.body.assetURL != null) {
        res.vrca.assetURL = req.body.assetURL
    }
    if (req.body.imageURL != null) {
        res.vrca.imageURL = req.body.imageURL
    }
    if (req.body.releaseStatus != null) {
        res.vrca.releaseStatus = req.body.releaseStatus
    }
    if (req.body.version != null) {
        res.vrca.version = req.body.version
    }
    if (req.body.logTime != null) {
        res.vrca.logTime = req.body.logTime
    }
    try {
        const updatedVrca = await res.vrca.save()
        res.json(updatedVrca)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

router.delete("/:id", getVrca, async (req, res) => {
    try {
        await res.vrca.remove()
        res.json({ message: "Deleted Vrca" })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getVrca(req, res, next) {
    try {
        vrca = await Vrca.findById(req.params.id)
        if (vrca == null) {
            return res.status(404).json({ message: "cannot find user name or avatar"})
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.vrca = vrca
    next()
}


module.exports = router;