const express = require('express')
const Category = require('../models/category')
const router = express.Router()

router.get('/categorys', async (req, res) => {
    try {
        const categorys = await Category.find()
        res.json(categorys)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.post('/addcategory', async (req, res) => {

    const addCategory = new Category({
        categoryName: req.body.categoryName,
    })
    try {
        const newCategory = await addCategory.save()
       res.status(201).send(newCategory)
    } catch (error) {
        res.status(400).json({ message: error.message})
        
    }
})

module.exports = router