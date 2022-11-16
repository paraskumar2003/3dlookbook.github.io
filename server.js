import express from 'express';
import bodyParser from 'body-parser';
import ejs from 'ejs';
import * as dotenv from 'dotenv';
import {films} from './images.js';

dotenv.config()

const app = express();

// app configurations
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", 'ejs');

app.get("/",(req,res)=>{res.render("Index")});
app.get("/room",(req,res)=>{res.render("room")});
app.get("/product/:id",(req,res)=>{
    const id = req.params.id;
    const product = films[id];
    
    res.render("product",{src:product})});

app.listen(3000);