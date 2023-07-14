var express = require('express');
var cors = require('cors');
var app = express();
//var cookieParser = require('cookie-parser');
//var session = require('express-session');

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

//app.use(session({secret: "Shh, its a secret!"}));

// app.get('/', function(req, res){
//    if(req.session.page_views){
//       req.session.page_views++;
//       res.send("You visited this page " + req.session.page_views + " times");
//    } else {
//       req.session.page_views = 1;
//       res.send("Welcome to this page for the first time!");
//    }
// });

// app.listen(4700,()=>{console.log('Server is running !!')})


var Product = require('./Product');
var Student = require('./Student');
var Course = require('./Course'); 

// var newStudent = new Student({name:'gautam',college:'anits',poy:'2020'});
// newStudent.save();

//var newProduct = new Product({id:21,title:'Asus gaming tuf',price: 300.99,description:'Your perfect pack for everyday use and walks in the forest. Stash your with explosive gaming experience',category:'Gaming Laptops',image:'https://dlcdnwebimgs.asus.com/gain/1387056a-60c6-4579-a3f7-ccf65affd7fa/',rating:{rate:4.4,count:696}});

app.get('/courses',((req,res)=>{
    Course.find({}).then((data)=>{
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
})

app.listen(4500,()=>{console.log('Server is running !!')})