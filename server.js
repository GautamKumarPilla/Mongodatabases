var express = require('express');
var cors = require('cors');
var app = express();

var Device = require('./Device');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/device',(req,res)=>{
   Device.find({}).then((data)=>{
     let deviceinfo = data;
     res.json(deviceinfo);
   })
})

app.get('/device/:id',(req,res)=>{
    Device.findById({_id:req.params.id}).then((data)=>{
      let deviceinfo = data;
      res.json(deviceinfo); 
    })
 })

app.post('/add',(req,res)=>{
    let newDevice = new Device(req.body);
    newDevice.save();
    res.json(newDevice);
})

app.delete('/delete/:id',(req)=>{
    console.log(req.params.id)
    Device.findByIdAndDelete({_id:req.params.id}).then((data)=>{
        console.log(data);
    })
})

app.put('/update/:id',(req,res)=>{
    Device.findOneAndUpdate({_id:req.params.id},req.body).then((ab)=>{
        console.log(ab);
    })
})

app.listen(4500,()=>{console.log('Server running on port 4500')})