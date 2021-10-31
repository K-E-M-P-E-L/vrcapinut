const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({

    // Javascript objekter

    categoryName: {
        type: String,
        require: true
    }

})

module.exports = mongoose.model('category', categorySchema)