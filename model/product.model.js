import mongoose from 'mongoose'

var schema = new mongoose.Schema({
    name:String,
    image:String,
    description: String
});

var Product = mongoose.model('Product', schema, 'products');

export default Product