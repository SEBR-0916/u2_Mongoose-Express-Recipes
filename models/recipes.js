const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Recipe = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        difficulty: {type: String, required: true},
        ingredients: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('recipes', Recipe)