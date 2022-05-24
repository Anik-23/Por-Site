const express= require('express');
const app=express();
const path = require('path');
const mongoose=require('mongoose');

const Info = require('./models/information');

mongoose.connect('mongodb://localhost:27017/prot-folio');

const db=mongoose.connection;
db.on("error",console.error.bind(console,"connection error"));
db.once("open",()=>{
    console.log("Database Connected")
});


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'/public')))


app.get('/',(req,res)=>{
    res.render('Informations/index');
})
app.get('/find',async(req,res)=>{
    const {id}=req.query
    const info= await Info.findOne({_id:id});
    res.render('Informations/home',{info:info})

})

app.get('/all',async(req,res)=>{
    const Iinfo= await Info.find({})
    res.render('Informations/all',{Iinfo})
})

app.get('/new', (req,res)=>{
    res.render('Informations/new');
})

app.post('/create',async (req,res)=>{
    const newInfo=new Info(req.body);
    await newInfo.save();
    res.render('Informations/created',{newInfo});
})

app.listen('8080',()=>{
    console.log("Listining at 8080!!");
})


