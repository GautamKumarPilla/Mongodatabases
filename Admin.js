var mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect("mongodb://127.0.0.1:27017/edupoly")

var adminSchema = new Schema({
    username: String,
    password:String,
    
})

var AdminModel = mongoose.model("Admin",adminSchema);

module.exports = AdminModel;