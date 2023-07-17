var mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect("mongodb://127.0.0.1:27017/edupoly")

var enquirySchema = new Schema({
    fullname: String,
    experience:String,
    course:Array,
    academics:String,
    contact:Number,
    email:String
})

var EnquiryModel = mongoose.model("Enquiry",enquirySchema);

module.exports = EnquiryModel;