var mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://127.0.0.1:27017/crud');

var deviceSchema = new Schema({
    brand:String,
    color:String,
    ram:String,
    price:Number
})

var DeviceModel = mongoose.model("Device",deviceSchema);

module.exports = DeviceModel;