var mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect("mongodb://127.0.0.1:27017/edupoly")

var courseSchema = new Schema({
    name:String,
    duration:String,
    type:String,
    price:Number 
})

var CourseModel = mongoose.model("Course",courseSchema);

module.exports = CourseModel;