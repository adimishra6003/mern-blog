const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user.route.js')
// import userRoutes from './routes/user.route.js'

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("MongoDB connected!");
}).catch((err)=>{
    console.log(err);
})


const app = express();

app.listen(3000, ()=>{
    console.log('Server is running on PORT:3000!');
})

app.use('/api/user', userRoutes)