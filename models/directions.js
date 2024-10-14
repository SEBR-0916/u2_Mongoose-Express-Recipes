const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Direction = new Schema(
    {
        instructions: { type: String, required: true },
        description: { type: String, required: true },
        timeRequired: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('directions', Direction)