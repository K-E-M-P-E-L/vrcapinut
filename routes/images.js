const express = require('express')
const Image = require('../models/image')
const router = express.Router()

router.get('/images', async (req, res) => {
    try {
        const images = await Image.find()
        res.json(images)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.get('/image/:id', async (req, res) => {
    try {
        const image = await Image.findById(req.params.id)
        res.json(image)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.get('/imagesbygenre/:id', async (req, res) => {
    try {
        const images = await Image.find({imageCategory: req.params.id })
        res.json(images)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.post('/addimage', async (req, res) => {

    const addImage = new Image({
        imageName: req.body.imageName,
        imageCategory: req.body.bandCategory,
    })
    try {
        const newImage = await addImage.save()
       res.status(201).send(newImage)
    } catch (error) {
        res.status(400).json({ message: error.message})
        
    }
})

router.delete('/deleteimage/:id', async (req, res) => {

    try {
        await Image.findById(req.params.id).remove()
       res.status(200).send({message: "image er slettet"})
    } catch (error) {
        res.status(400).json({ message: error.message})
        
    }
})

router.patch('/updateimage/:id',  async (req, res) => {

    let oneImage

    try {

        oneImage = await Image.findById(req.params.id)

        if(req.body.newImageName != null){
            oneImage.imageName = req.body.newImageName
        }
        if(req.body.newImageCategori != null){
            oneImage.imageCategori = req.body.newImageCategori
        }
        
        await oneImage.save()
        res.json("Image opdateret")

    } catch (error) {
        res.status(400).json({ message: error.message})
    }

})

module.exports = router