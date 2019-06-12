var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
    imagePath: { type: String },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    type: { type: String },
    review: { type: Number }
});

module.exports = mongoose.model('Product',schema);