var express = require('express');
var cors = require('cors');
var app = express();

var Customer = require('./Customer');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/customers',(req,res)=>{
    Customer.find({}).then((data)=>{
        let customdata = data;
        res.json(customdata);
    })
})

 app.get('/customers/:id',(req,res)=>{
     Customer.findById({_id:req.params.id}).then((data)=>{
       let customdata = data;
       res.json(customdata); 
     })
  })
 
 app.post('/add',(req,res)=>{
     let newCust = new Customer(req.body);
     newCust.save();
     res.json(newCust);
 })
 
 app.delete('/delete/:id',(req)=>{
     console.log(req.params.id);
     Customer.findByIdAndDelete({_id:req.params.id}).then((data)=>{
         console.log(data);
     })
 })
 
 app.put('/update/:id',(req,res)=>{
     Customer.findOneAndUpdate({_id:req.params.id},req.body).then((ab)=>{
         console.log(ab);
     })
 })

app.listen(4600 , ()=>
        {"Server is running on port 4600"});