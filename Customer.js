var mongoose = require('mongoose');
const { Schema } = mongoose;

//mongoose.connect('mongodb+srv://gautam1999:gautam123@cluster0.hb7t5zh.mongodb.net/?retryWrites=true&w=majority');
mongoose.connect('mongodb+srv://cluster0.hb7t5zh.mongodb.net/?retryWrites=true&w=majority',{user:'gautam1999',pass:'gautam123'});

const customerSchema = new Schema({
    firstname:String,
    lastname:String,
    age:Number
})

var CustomerModel = mongoose.model("Customer",customerSchema);
module.exports = CustomerModel;