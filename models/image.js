const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({

    // Javascript objekter

    imageName: {
        type: String,
        require: true
    },
    imageCategory: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'category'
    },


})

module.exports = mongoose.model('image', categorySchema)