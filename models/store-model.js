const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Item = new Schema (
    {
        title: { type: String, required: true },
        category: { type: String, required: true },
        description: { type: String, required: false },
        price: { type: Number, required: true },
        image: { type: [String], required: false}
    },
    {timestamps: true },
)

module.exports = mongoose.model('items', Item)