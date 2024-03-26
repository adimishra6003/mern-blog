const User = require('../models/user.model.js')
const bcryptjs = require('bcryptjs');

const signup = async (req, res) =>{
    const {username, email, password} = req.body;

    if(!username || !email || !password || username === '' || email === ''|| password === ''){
        return res.status(400).json({msg:"All fields are required!"})
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);
    
    const newUser = new User({
        username, email, password:hashedPassword
    })


    try{
        await newUser.save();
        res.json('Signup successful!')
    }
    catch(error){
        res.status(500).json({msg:error.message})
    }
}

module.exports = signup;