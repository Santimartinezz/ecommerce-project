const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: String,
    description: String,
    category: String,
    price: Number,
    image: String
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
