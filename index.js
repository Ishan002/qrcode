const mongoose = require("mongoose");
const express = require('express');
const ejs = require('ejs');
const path =require("path");
const qrcode = require('qrcode');
const connectDB = require("./db");
const { Server } = require("http");
const server = express();
const app = express();
const port = process.env.port || 3000;
const employee = require("./models/employee")


const url = 'mongodb://123.201.15.216/32';
const dbName = 'qrcode.qrcode';
const { accessSync } = require("fs");
app.use(express.json())
app.use(express.urlencoded({ extended: false}));
app.set('view engine', 'ejs')
app.set('views',path.join(__dirname, 'view'))
app.use(express.static('public'))
app.get("/",(req,res,next) =>{
res.render('index');
})



app.post('/scan',async(req,res,next)=>{
    const input_text = req.body.text;
    const employee1 = new employee({
        text :req.body.text,
    })
    await employee1.save()
    .then(response =>{
        qrcode.toDataURL(input_text,(err,src)=>{
            res.render("scan",{
            qr_code: src,
        });
        })
    })
    .catch(error =>{
        res.json({
            message :'an error occured'
        })
    })
    
});
const start = async() => {
    try{
        await connectDB();
        app.listen(port,()=>{
            console.log("Connected to PORT");
        })
    }
    catch(error){
        console.log("error",error)
    }
}

start();

//password
//ekWNVKvTTG0YElz4

//username
//ishan4343shah





