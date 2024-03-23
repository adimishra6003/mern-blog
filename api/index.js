const { log } = require('console');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("MongoDB connected!");
}).catch((err)=>{
    console.log(err);
})
//Username-adityamishra120799
//Password-VUV3CNGaV8n5Fpag

const app = express();

app.listen(3000, ()=>{
    console.log('Server is running on PORT:3000!');
})