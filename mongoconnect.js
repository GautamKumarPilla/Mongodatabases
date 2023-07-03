var {MongoClient} = require('mongodb');
var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());

//const client = new MongoClient("mongodb://localhost:27017");

app.get("/products", (req,res) =>{
    client.connect().then(()=>{
        const db = client.db("edupoly");
        var products=  db.collection("products");
        products.find({}).toArray().then((data) =>{
            let products = data;
            res.json(products);
        })
    })
})

// app.listen(4500,
//     ()=>{console.log('Server is running !!')})