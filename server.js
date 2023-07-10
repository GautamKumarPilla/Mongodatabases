var express = require('express');
var cors = require('cors');
var app = express();

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

var Product = require('./Product');
//var Student = require('./Student');
var Course = require('./Course');
var Enquiry = require('./Enquiry'); 
var Admin = require('./Admin');

// var newStudent = new Student({name:'gautam',college:'anits',poy:'2020'});
// newStudent.save();

//var newProduct = new Product({id:21,title:'Asus gaming tuf',price: 300.99,description:'Your perfect pack for everyday use and walks in the forest. Stash your with explosive gaming experience',category:'Gaming Laptops',image:'https://dlcdnwebimgs.asus.com/gain/1387056a-60c6-4579-a3f7-ccf65affd7fa/',rating:{rate:4.4,count:696}});

app.get('/courses',((req,res)=>{
    Course.find({}).then((data)=>{
       let courses = data;
       res.json(courses);
    })
}))

app.get('/courses/:id',((req,res)=>{
    Course.findById(req.params.id).then((data)=>{
       let courses = data;
       res.json(courses);
    })
}))

app.post('/addCourse',((req,res)=>{
     let newCourse = new Course(req.body)
    //  newCourse.save();
    //  res.json(newCourse);
}))

app.delete('/deleteCourse/:id',(req,res)=>{
    console.log(req.params);
    Course.deleteOne({_id:req.params.id}).then((deletedCount)=>{
        console.log(deletedCount);
    })
})

app.put('/updateCourse/:id',(req,res)=>{
    Course.findOneAndUpdate({_id:req.params.id},req.body).then((ab)=>{
        console.log(ab);
    })
})

app.patch('/patchCourse/:id',(req,res)=>{
    Course.findOneAndReplace({_id:req.params.id},req.body).then((ab)=>{
        console.log(ab);
    })
    console.log(res.data);
})  //Patch replaces whole body with a new body...(even --v in database gets replaced)

app.post('/register',((req,res)=>{
    let newEnquiry = new Enquiry(req.body)
    //newEnquiry.save();
    res.json(newEnquiry);
    //console.log(newEnquiry);
}))

app.get('/register',(req,res)=>{
    Enquiry.find({}).then((data)=>{
        let enquiryData = data;
        res.json(enquiryData);
     })
})
 
app.get('/admin',((req,res)=>{
    Admin.find({}).then((data)=>{
       let adminData = data;
       res.json(adminData);
    })
}))



app.listen(4500,()=>{console.log('Server is running !!')})