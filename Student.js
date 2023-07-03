var mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect("mongodb://127.0.0.1:27017/edupoly")

var studentSchema = new Schema({
    name: String,
    college:String,
    poy:Number
})

var StudentModel = mongoose.model("Student",studentSchema);

module.exports = StudentModel;