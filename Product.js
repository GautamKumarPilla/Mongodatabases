var mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect("mongodb://127.0.0.1:27017/edupoly")

var productSchema = new Schema({
    id:Number,
    title:String,
    price:Number,
    description:String,
    category:String,
    image:String,
    rating:Object
})

var ProductModel = mongoose.model("Product",productSchema);

module.exports = ProductModel;