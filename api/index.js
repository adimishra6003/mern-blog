const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user.route.js')
const authRoutes = require('./routes/auth.route.js')

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("MongoDB connected!");
}).catch((err)=>{
    console.log(err);
})


const app = express();

app.use(express.json());

app.listen(3000, ()=>{
    console.log('Server is running on PORT:3000!');
})


app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)

app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})