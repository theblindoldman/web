const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        requried: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;