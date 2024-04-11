const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user.route.js')
const authRoutes = require('./routes/auth.route.js')
const postRoutes = require('./routes/post.route.js')
const commentRoutes = require('./routes/comment.route.js')
const cookieParser = require('cookie-parser');
const path = require('path');

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("MongoDB connected!");
}).catch((err)=>{
    console.log(err);
})

const _dirname = path.resolve();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(3000, ()=>{
    console.log('Server is running on PORT:3000!');
})


app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/post', postRoutes)
app.use('/api/comment', commentRoutes)

app.use(express.static(path.join(_dirname, '/client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(_dirname, 'client', 'dist', 'index.html'));
});

app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})